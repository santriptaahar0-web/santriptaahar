'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import api from '@/lib/api'
import { FiCheckCircle, FiPackage, FiHome, FiShoppingBag } from 'react-icons/fi'

export default function OrderSuccessPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const orderId = searchParams.get('orderId')
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (orderId) {
      fetchOrder()
    } else {
      router.push('/')
    }
  }, [orderId])

  const fetchOrder = async () => {
    try {
      const response = await api.get(`/orders/${orderId}`)
      setOrder(response.data.data.order)
    } catch (error) {
      console.error('Failed to load order:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse text-center">
            <div className="h-32 bg-gray-200 rounded-lg mb-8"></div>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  if (!order) {
    return null
  }

  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
              <FiCheckCircle className="w-12 h-12 text-dark" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
              Order Placed Successfully!
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Thank you for your order
            </p>
            <p className="text-lg text-primary font-semibold">
              Order #{order.orderNumber}
            </p>
          </div>

          <div className="card mb-8 text-left">
            <h2 className="text-2xl font-bold mb-6 text-dark">Order Details</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-bold">{order.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-bold text-primary text-xl">₹{order.totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Payment Status:</span>
                <span className={`font-semibold ${
                  order.paymentStatus === 'paid' ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Status:</span>
                <span className="font-semibold text-primary">
                  {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/my-orders" className="btn-primary flex items-center justify-center gap-2">
              <FiPackage className="w-5 h-5" />
              View My Orders
            </Link>
            <Link href="/shop" className="btn-outline flex items-center justify-center gap-2">
              <FiShoppingBag className="w-5 h-5" />
              Continue Shopping
            </Link>
            <Link href="/" className="btn-outline flex items-center justify-center gap-2">
              <FiHome className="w-5 h-5" />
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

