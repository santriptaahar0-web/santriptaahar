'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import api from '@/lib/api'
import { dummyProducts, DummyProduct } from '@/data/dummyProducts'

interface Product {
  id: number
  name: string
  slug: string
  shortDescription: string
  price: number
  compareAtPrice?: number
  images: Array<{ imageUrl: string }>
  category: {
    name: string
    slug: string
  }
  isNewArrival?: boolean
  isFeatured?: boolean
}

interface ProductGridProps {
  category?: string | null
  sortBy?: string
  searchQuery?: string
}

export default function ProductGrid({ category, sortBy = 'createdAt', searchQuery = '' }: ProductGridProps) {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [useDummyData, setUseDummyData] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [category, sortBy])

  const normalizedSearch = searchQuery.trim().toLowerCase()

  const applySearchFilter = (list: Product[]) => {
    if (!normalizedSearch) return list
    return list.filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(normalizedSearch)
      const descMatch = product.shortDescription.toLowerCase().includes(normalizedSearch)
      const categoryMatch = product.category.name.toLowerCase().includes(normalizedSearch)
      return nameMatch || descMatch || categoryMatch
    })
  }

  const fetchProducts = async () => {
    try {
      setLoading(true)
      setError(null)
      const params: any = {}
      if (category) params.category = category
      if (sortBy) {
        if (sortBy.includes('-')) {
          const [field, order] = sortBy.split('-')
          params.sortBy = field
          params.sortOrder = order
        } else {
          params.sortBy = sortBy
          params.sortOrder = 'desc'
        }
      }
      const response = await api.get('/products', { params })
      const apiProducts: Product[] = response.data.data.products
      setProducts(apiProducts)
      setUseDummyData(false)
    } catch (err: any) {
      console.log('API failed, using dummy data:', err.message)
      // Use dummy data when API fails
      let filteredProducts = [...dummyProducts]
      
      // Filter by category if selected
      if (category) {
        filteredProducts = filteredProducts.filter(
          (p) => p.category.slug === category
        )
      }
      
      // Sort products
      filteredProducts.sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price
        if (sortBy === 'price-desc') return b.price - a.price
        if (sortBy === 'name') return a.name.localeCompare(b.name)
        // Default: new arrivals first
        if (a.isNewArrival && !b.isNewArrival) return -1
        if (!a.isNewArrival && b.isNewArrival) return 1
        return 0
      })
      
      setProducts(filteredProducts as Product[])
      setUseDummyData(true)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 mb-4">{error}</p>
        <button onClick={fetchProducts} className="btn-primary">
          Try Again
        </button>
      </div>
    )
  }

  const visibleProducts = applySearchFilter(products)

  if (visibleProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No products found</p>
      </div>
    )
  }

  return (
    <>
      {useDummyData && (
        <div className="mb-4 p-3 rounded-lg text-sm" style={{ backgroundColor: '#fef3c7', color: '#92400e' }}>
          <span className="font-medium">📦 Showing dummy data for design preview</span>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleProducts.map((product, index) => (
          <Link key={product.id} href={`/product/${product.slug}`}>
            <div className="section-card cursor-pointer group hover-lift animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="h-64 rounded-xl mb-4 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative" style={{ backgroundColor: '#f8fafc' }}>
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[0].imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-7xl animate-float">🌿</span>
                )}
                {product.isNewArrival && (
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse-slow shadow-lg">
                    NEW
                  </div>
                )}
                {product.isFeatured && !product.isNewArrival && (
                  <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    FEATURED
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="mb-2">
                <span className="inline-block px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                  {product.category.name}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors" style={{ color: 'var(--dark)' }}>
                {product.name}
              </h3>
              <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: 'var(--gray-brand)' }}>
                {product.shortDescription}
              </p>
              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold" style={{ color: 'var(--primary)' }}>
                    ₹{product.price.toFixed(2)}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-sm line-through" style={{ color: 'var(--gray-light)' }}>
                      ₹{product.compareAtPrice.toFixed(2)}
                    </span>
                  )}
                </div>
                <button className="btn-primary text-sm px-5 py-2">
                  View
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

