'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductGrid from '@/components/shop/ProductGrid'
import CategoryFilter from '@/components/shop/CategoryFilter'
import SortFilter from '@/components/shop/SortFilter'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState('createdAt')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--dark)' }}>
            Shop
          </h1>
          <p style={{ color: 'var(--gray-brand)' }}>Discover our premium spirulina products</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="md:w-64 flex-shrink-0">
            <CategoryFilter 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
              <div className="space-y-1">
                <p className="font-medium" style={{ color: 'var(--gray-brand)' }}>
                  {selectedCategory 
                    ? `Showing ${selectedCategory.replace('-', ' ')} products` 
                    : 'Showing all products'}
                </p>
                <p className="text-sm" style={{ color: 'var(--gray-light)' }}>
                  Search by product name, category, or description
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="input sm:w-64"
                />
                <SortFilter sortBy={sortBy} onSortChange={setSortBy} />
              </div>
            </div>
            <ProductGrid category={selectedCategory} sortBy={sortBy} searchQuery={searchQuery} />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
