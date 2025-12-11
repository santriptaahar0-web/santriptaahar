'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'
import { useToast } from '@/context/ToastContext'
import api from '@/lib/api'
import Script from 'next/script'

declare global {
  interface Window {
    Razorpay: any
  }
}

export default function CheckoutContent() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCart()
  const { isAuthenticated, user } = useAuth()
  const { success, error: showError } = useToast()
  const [loading, setLoading] = useState(false)
  const [couponCode, setCouponCode] = useState('')
  const [discount, setDiscount] = useState(0)
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    street: '',
    city: '',
    state: '',
    pincode: '',
  })

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login?redirect=/checkout')
      return
    }
    if (items.length === 0) {
      router.push('/cart')
      return
    }
  }, [isAuthenticated, items.length, router])

  if (!isAuthenticated || items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="animate-pulse">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const subtotal = getTotal()
  const shipping = subtotal > 500 ? 0 : 50
  const total = subtotal + shipping - discount

  const handleCouponApply = async () => {
    if (!couponCode) return

    try {
      const response = await api.post('/offers/validate', {
        code: couponCode,
        amount: subtotal,
      })
      setDiscount(response.data.data.coupon.discount)
      success('Coupon applied successfully!')
    } catch (err: any) {
      showError(err.response?.data?.message || 'Invalid coupon code')
      setCouponCode('')
    }
  }

  const handlePayment = async (orderId: number, razorpayOrderId: string) => {
    return new Promise((resolve, reject) => {
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: total * 100, // Convert to paise
        currency: 'INR',
        name: 'Santript Aahar',
        description: `Order #${orderId}`,
        order_id: razorpayOrderId,
        handler: async function (response: any) {
          try {
            // Verify payment
            const verifyResponse = await api.post('/payments/verify', {
              orderId,
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            })

            if (verifyResponse.data.success) {
              clearCart()
              success('Payment successful!')
              router.push(`/order-success?orderId=${orderId}`)
              resolve(response)
            } else {
              showError('Payment verification failed')
              reject(new Error('Verification failed'))
            }
          } catch (err: any) {
            showError(err.response?.data?.message || 'Payment verification failed')
            reject(err)
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: '#00d97e',
        },
        modal: {
          ondismiss: function () {
            showError('Payment cancelled')
            reject(new Error('Payment cancelled'))
          },
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (items.length === 0) {
      showError('Your cart is empty')
      return
    }

    setLoading(true)

    try {
      // Create order
      const orderResponse = await api.post('/orders', {
        items: items.map((item) => ({
          productId: item.productId,
          quantity: item.quantity,
        })),
        shippingAddress: {
          street: formData.street,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
        },
        couponCode: couponCode || undefined,
      })

      const order = orderResponse.data.data.order

      // Create Razorpay order
      const paymentResponse = await api.post('/payments/create-order', {
        orderId: order.id,
      })

      const { orderId: razorpayOrderId } = paymentResponse.data.data

      // Open Razorpay checkout
      await handlePayment(order.id, razorpayOrderId)
    } catch (err: any) {
      showError(err.response?.data?.message || 'Failed to create order. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return null
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <div className="max-w-4xl mx-auto">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-dark font-bold">
              1
            </div>
            <div className="w-24 h-1 bg-primary"></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-dark font-bold">
              2
            </div>
            <div className="w-24 h-1 bg-primary"></div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-dark font-bold">
              3
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-3 gap-8">
          {/* Shipping Address Form */}
          <div className="md:col-span-2">
            <div className="card">
              <h2 className="text-2xl font-bold mb-6 text-dark">Shipping Address</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Street Address *</label>
                  <input
                    type="text"
                    required
                    value={formData.street}
                    onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                    className="input"
                  />
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">State *</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Pincode *</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                      className="input"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-xl font-bold mb-6 text-dark">Order Summary</h2>
              
              {/* Coupon Code */}
              <div className="mb-6">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                    placeholder="Coupon Code"
                    className="input flex-1 text-sm"
                  />
                  <button
                    type="button"
                    onClick={handleCouponApply}
                    className="btn-outline text-sm px-4 py-2 whitespace-nowrap"
                  >
                    Apply
                  </button>
                </div>
                {discount > 0 && (
                  <p className="text-sm text-primary mt-2">Discount: ₹{discount.toFixed(2)}</p>
                )}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-primary">Free</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-primary">
                    <span>Discount</span>
                    <span className="font-medium">-₹{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="border-t pt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">₹{total.toFixed(2)}</span>
                </div>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Processing...' : `Pay ₹${total.toFixed(2)}`}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
