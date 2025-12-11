'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/lib/api'
import { FiShoppingCart, FiHeart, FiMinus, FiPlus } from 'react-icons/fi'
import { useCart } from '@/context/CartContext'
import { useToast } from '@/context/ToastContext'
import ProductReviews from './ProductReviews'
import { dummyProducts } from '@/data/dummyProducts'

interface Product {
  id: number
  name: string
  slug: string
  shortDescription: string
  detailedDescription: string
  price: number
  compareAtPrice?: number
  stock: number
  ingredients: string[]
  nutritionFacts: {
    protein?: number
    iron?: number
    vitaminB12?: number
    energy?: number
    fat?: number
  }
  benefits: string[]
  howToUse: string
  tasteTexture: string
  images: Array<{ imageUrl: string; orderIndex: number }>
  category: {
    name: string
    slug: string
  }
  averageRating: number
}

export default function ProductDetail({ slug }: { slug: string }) {
  const router = useRouter()
  const { addItem } = useCart()
  const { success, error } = useToast()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [addingToCart, setAddingToCart] = useState(false)

  useEffect(() => {
    fetchProduct()
  }, [slug])

  const fetchProduct = async () => {
    try {
      setLoading(true)
      const response = await api.get(`/products/${slug}`)
      setProduct(response.data.data.product)
    } catch (error) {
      console.log('API failed, checking dummy data:', error)
      // Try to find product in dummy data
      const dummyProduct = dummyProducts.find(p => p.slug === slug)
      if (dummyProduct) {
        // Convert dummy product to full product format
        const fullProduct: Product = {
          id: dummyProduct.id,
          name: dummyProduct.name,
          slug: dummyProduct.slug,
          shortDescription: dummyProduct.shortDescription,
          detailedDescription: dummyProduct.shortDescription + ' This premium product is made with the finest ingredients and follows traditional Ayurvedic principles. It provides essential nutrients and supports overall health and wellness.',
          price: dummyProduct.price,
          compareAtPrice: dummyProduct.compareAtPrice,
          stock: 50,
          ingredients: ['Spirulina', 'Natural Sweeteners', 'Organic Ingredients'],
          nutritionFacts: {
            protein: 60,
            iron: 28,
            vitaminB12: 150,
            energy: 290,
            fat: 7
          },
          benefits: [
            'Boosts Immunity',
            'Increases Energy Levels',
            'Rich in Protein',
            'Supports Digestive Health',
            'Natural Antioxidants'
          ],
          howToUse: 'Consume 1-2 servings daily. Can be taken with water, milk, or added to smoothies.',
          tasteTexture: 'Delicious and smooth texture with natural flavors.',
          images: dummyProduct.images.map((img, idx) => ({
            imageUrl: img.imageUrl,
            orderIndex: idx
          })),
          category: dummyProduct.category,
          averageRating: 4.5
        }
        setProduct(fullProduct)
      } else {
        console.error('Product not found in dummy data')
        router.push('/shop')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = async () => {
    if (!product) return

    if (quantity > product.stock) {
      error(`Only ${product.stock} items available in stock`)
      return
    }

    setAddingToCart(true)
    try {
      addItem(product, quantity)
      success(`${product.name} added to cart!`)
      setQuantity(1)
    } catch (err) {
      error('Failed to add item to cart')
    } finally {
      setAddingToCart(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-200 h-96 rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 animate-fade-in-up">
        {/* Product Images */}
        <div>
          <div className="section-card mb-6 p-0 overflow-hidden">
            <div className="h-[500px] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#f8fafc' }}>
              {product.images && product.images.length > 0 ? (
                <img
                  src={product.images[selectedImage]?.imageUrl || product.images[0].imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              ) : (
                <span className="text-9xl animate-float">🌿</span>
              )}
            </div>
          </div>
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-xl overflow-hidden transition-all duration-200 ${
                    selectedImage === index 
                      ? 'border-primary ring-2 ring-primary ring-offset-2' 
                      : 'border-gray-200 hover:border-primary/50'
                  }`}
                >
                  <img
                    src={image.imageUrl}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
              {product.category.name}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--dark)' }}>
              {product.name}
            </h1>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--gray-brand)' }}>
              {product.shortDescription}
            </p>
          </div>

          {/* Price */}
          <div className="section-card">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-5xl font-bold" style={{ color: 'var(--primary)' }}>
                ₹{product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && (
                <span className="text-2xl line-through" style={{ color: 'var(--gray-light)' }}>
                  ₹{product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Rating */}
            {product.averageRating > 0 && (
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-2xl ${
                        i < Math.round(product.averageRating) ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <span style={{ color: 'var(--gray-brand)' }}>
                  ({product.averageRating.toFixed(1)})
                </span>
              </div>
            )}

            {/* Stock Status */}
            <div className="mb-6">
              {product.stock > 0 ? (
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#dcfce7', color: '#166534' }}>
                  <span>✓</span> In Stock ({product.stock} available)
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-700">
                  Out of Stock
                </span>
              )}
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <label className="font-semibold" style={{ color: 'var(--dark)' }}>Quantity:</label>
                <div className="flex items-center border rounded-lg overflow-hidden" style={{ borderColor: 'var(--border-color)' }}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    <FiMinus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-2 font-semibold min-w-[3rem] text-center border-x" style={{ borderColor: 'var(--border-color)', color: 'var(--dark)' }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-4 py-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
                    disabled={quantity >= product.stock}
                  >
                    <FiPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex gap-4">
                <button 
                  onClick={handleAddToCart} 
                  disabled={addingToCart || product.stock === 0}
                  className="btn-primary flex-1 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {addingToCart ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Adding...
                    </>
                  ) : (
                    <>
                      <FiShoppingCart className="w-5 h-5" />
                      {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                    </>
                  )}
                </button>
                <button className="btn-outline px-6" title="Add to Wishlist">
                  <FiHeart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Benefits */}
          {product.benefits && product.benefits.length > 0 && (
            <div className="section-card">
              <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--dark)' }}>Key Benefits</h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✅</span>
                    <span style={{ color: 'var(--gray-brand)' }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Detailed Information */}
      <div className="mt-12 grid md:grid-cols-3 gap-8 animate-fade-in-up">
        {/* Description */}
        <div className="md:col-span-2 space-y-6">
          <div className="section-card">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--dark)' }}>Product Description</h2>
            <div className="prose max-w-none">
              <p className="mb-6 leading-relaxed" style={{ color: 'var(--gray-brand)' }}>
                {product.detailedDescription}
              </p>
              
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-bold mb-3" style={{ color: 'var(--dark)' }}>Ingredients:</h3>
                  <p style={{ color: 'var(--gray-brand)' }}>{product.ingredients.join(', ')}</p>
                </div>
              )}

              {product.howToUse && (
                <div className="mb-6">
                  <h3 className="font-bold mb-3" style={{ color: 'var(--dark)' }}>How to Use:</h3>
                  <p style={{ color: 'var(--gray-brand)' }}>{product.howToUse}</p>
                </div>
              )}

              {product.tasteTexture && (
                <div>
                  <h3 className="font-bold mb-3" style={{ color: 'var(--dark)' }}>Taste & Texture:</h3>
                  <p style={{ color: 'var(--gray-brand)' }}>{product.tasteTexture}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Nutrition Facts */}
        {product.nutritionFacts && (
          <div>
            <div className="section-card">
              <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--dark)' }}>Nutrition Facts</h2>
              <div className="space-y-3">
                {product.nutritionFacts.protein && (
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
                    <span className="font-medium" style={{ color: 'var(--dark)' }}>Protein</span>
                    <span className="font-semibold" style={{ color: 'var(--primary)' }}>{product.nutritionFacts.protein}g</span>
                  </div>
                )}
                {product.nutritionFacts.iron && (
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
                    <span className="font-medium" style={{ color: 'var(--dark)' }}>Iron</span>
                    <span className="font-semibold" style={{ color: 'var(--primary)' }}>{product.nutritionFacts.iron}% RDA</span>
                  </div>
                )}
                {product.nutritionFacts.vitaminB12 && (
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
                    <span className="font-medium" style={{ color: 'var(--dark)' }}>Vitamin B12</span>
                    <span className="font-semibold" style={{ color: 'var(--primary)' }}>{product.nutritionFacts.vitaminB12}% RDA</span>
                  </div>
                )}
                {product.nutritionFacts.energy && (
                  <div className="flex justify-between items-center py-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
                    <span className="font-medium" style={{ color: 'var(--dark)' }}>Energy</span>
                    <span className="font-semibold" style={{ color: 'var(--primary)' }}>{product.nutritionFacts.energy} kcal</span>
                  </div>
                )}
                {product.nutritionFacts.fat && (
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium" style={{ color: 'var(--dark)' }}>Fat</span>
                    <span className="font-semibold" style={{ color: 'var(--primary)' }}>{product.nutritionFacts.fat}g</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Reviews Section */}
      <ProductReviews productId={product.id} averageRating={product.averageRating} />
    </div>
  )
}

