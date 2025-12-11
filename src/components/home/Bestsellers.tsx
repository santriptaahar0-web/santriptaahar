'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import api from '@/lib/api'

interface Product {
  id: number
  name: string
  slug: string
  shortDescription: string
  price: number
  compareAtPrice?: number
  images: Array<{ imageUrl: string }>
  isNewArrival?: boolean
  isFeatured?: boolean
}

export default function Bestsellers() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedProducts()
  }, [])

  const fetchFeaturedProducts = async () => {
    try {
      const response = await api.get('/products/featured')
      setProducts(response.data.data.products.slice(0, 3))
    } catch (error) {
      console.error('Failed to load featured products:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="card animate-pulse">
                <div className="bg-gray-200 h-56 rounded-xl mb-6"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return null
  }

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--dark)' }}>
            Our Bestsellers
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-scale-in"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Link 
              key={product.id}
              href={`/product/${product.slug}`}
              className="section-card group hover-lift animate-fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-56 rounded-xl mb-6 flex items-center justify-center overflow-hidden relative" style={{ backgroundColor: '#f8fafc' }}>
                {product.images && product.images.length > 0 ? (
                  <img
                    src={product.images[0].imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-7xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-float">🌿</span>
                )}
                {product.isNewArrival && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse-slow">
                    NEW
                  </div>
                )}
                {product.isFeatured && !product.isNewArrival && (
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
                {product.isFeatured && product.isNewArrival && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors" style={{ color: 'var(--dark)' }}>{product.name}</h3>
              <p className="mb-6 leading-relaxed line-clamp-2" style={{ color: 'var(--gray-brand)' }}>{product.shortDescription}</p>
              <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold group-hover:scale-110 transition-transform duration-300 inline-block" style={{ color: 'var(--primary)' }}>₹{product.price.toFixed(2)}</span>
                  {product.compareAtPrice && (
                    <span className="text-gray-400 line-through">₹{product.compareAtPrice.toFixed(2)}</span>
                  )}
                </div>
                <span className="btn-primary text-sm px-6 py-2.5 group-hover:shadow-lg inline-block">
                  Shop Now
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

