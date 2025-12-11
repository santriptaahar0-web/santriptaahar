'use client'

import Link from 'next/link'
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi'
import { useCart } from '@/context/CartContext'
import { useToast } from '@/context/ToastContext'

export default function CartContent() {
  const { items, removeItem, updateQuantity, getTotal } = useCart()
  const { success } = useToast()

  if (items.length === 0) {
    return (
      <div className="text-center py-16 animate-fade-in-up">
        <span className="text-6xl mb-4 block animate-float">🛒</span>
        <h2 className="text-2xl font-bold mb-4 text-dark">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Add some products to get started!</p>
        <Link href="/shop" className="btn-primary">
          Continue Shopping
        </Link>
      </div>
    )
  }

  const subtotal = getTotal()
  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping

  const handleRemove = (productId: number) => {
    removeItem(productId)
    success('Item removed from cart')
  }

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    updateQuantity(productId, newQuantity)
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="md:col-span-2 space-y-4">
        {items.map((item, index) => (
          <div 
            key={item.id} 
            className="section-card flex flex-col md:flex-row items-center gap-6 hover-lift animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Link 
              href={`/product/${item.slug}`} 
              className="w-32 h-32 rounded-xl overflow-hidden flex-shrink-0"
              style={{ backgroundColor: '#f8fafc' }}
            >
              {item.image ? (
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-5xl animate-float">🌿</span>
                </div>
              )}
            </Link>
            <div className="flex-1 w-full md:w-auto min-w-0">
              <Link href={`/product/${item.slug}`}>
                <h3 className="font-bold text-lg mb-1 hover:text-primary transition-colors" style={{ color: 'var(--dark)' }}>
                  {item.name}
                </h3>
              </Link>
              <p style={{ color: 'var(--gray-brand)' }}>₹{item.price.toFixed(2)} each</p>
            </div>
            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start">
              <div className="flex items-center border rounded-lg overflow-hidden" style={{ borderColor: 'var(--border-color)' }}>
                <button 
                  onClick={() => handleQuantityChange(item.productId, Math.max(1, item.quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-50 transition-colors"
                  disabled={item.quantity <= 1}
                >
                  <FiMinus className="w-4 h-4" />
                </button>
                <span className="px-6 py-2 font-semibold min-w-[3rem] text-center" style={{ color: 'var(--dark)' }}>
                  {item.quantity}
                </span>
                <button 
                  onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  <FiPlus className="w-4 h-4" />
                </button>
              </div>
              <span className="font-bold text-xl w-28 text-right" style={{ color: 'var(--primary)' }}>
                ₹{(item.price * item.quantity).toFixed(2)}
              </span>
              <button 
                onClick={() => handleRemove(item.productId)}
                className="text-red-500 hover:text-red-600 p-2 transition-colors rounded-lg hover:bg-red-50"
                title="Remove item"
              >
                <FiTrash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="md:col-span-1">
        <div className="section-card sticky top-24 animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--dark)' }}>Order Summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center py-2">
              <span style={{ color: 'var(--gray-brand)' }}>Subtotal</span>
              <span className="font-semibold" style={{ color: 'var(--dark)' }}>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span style={{ color: 'var(--gray-brand)' }}>Shipping</span>
              <span className="font-semibold">
                {shipping === 0 ? (
                  <span style={{ color: 'var(--primary)' }}>Free</span>
                ) : (
                  <span style={{ color: 'var(--dark)' }}>₹{shipping}</span>
                )}
              </span>
            </div>
            {subtotal < 500 && (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 mt-4">
                <p className="text-sm font-medium" style={{ color: 'var(--primary)' }}>
                  🎁 Add ₹{(500 - subtotal).toFixed(2)} more for <strong>free shipping</strong>!
                </p>
              </div>
            )}
            <div className="border-t pt-4 mt-4 flex justify-between items-center text-xl font-bold">
              <span style={{ color: 'var(--dark)' }}>Total</span>
              <span style={{ color: 'var(--primary)' }}>₹{total.toFixed(2)}</span>
            </div>
          </div>
          <Link href="/checkout" className="btn-primary w-full text-center block">
            Proceed to Checkout
          </Link>
          <Link href="/shop" className="btn-outline w-full text-center block mt-4">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  )
}

