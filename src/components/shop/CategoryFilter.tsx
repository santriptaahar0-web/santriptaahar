'use client'

import { useEffect, useState } from 'react'
import api from '@/lib/api'
import { dummyCategories, DummyCategory } from '@/data/dummyProducts'

interface Category {
  id: number
  name: string
  slug: string
}

interface CategoryFilterProps {
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    try {
      const response = await api.get('/categories')
      setCategories(response.data.data.categories)
    } catch (error) {
      console.log('API failed, using dummy categories:', error)
      // Use dummy data when API fails
      setCategories(dummyCategories as Category[])
    }
  }

  return (
    <div className="section-card">
      <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--dark)' }}>Categories</h3>
      <div className="space-y-2">
        <button
          onClick={() => onCategoryChange(null)}
          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
            selectedCategory === null
              ? 'bg-primary text-white font-semibold shadow-md'
              : 'hover:bg-gray-50'
          }`}
          style={selectedCategory === null ? {} : { color: 'var(--dark)' }}
        >
          All Products
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.slug)}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
              selectedCategory === category.slug
                ? 'bg-primary text-white font-semibold shadow-md'
                : 'hover:bg-gray-50'
            }`}
            style={selectedCategory === category.slug ? {} : { color: 'var(--dark)' }}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  )
}

