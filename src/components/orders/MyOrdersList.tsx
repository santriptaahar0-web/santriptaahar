'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import api from '@/lib/api'

interface Order {
  id: number
  orderNumber: string
  totalAmount: number
  orderStatus: string
  paymentStatus: string
  createdAt: string
  items: Array<{
    id: number
    quantity: number
    price: number
    product: {
      id: number
      name: string
      slug: string
      images: Array<{ imageUrl: string }>
    }
  }>
}

export default function MyOrdersList() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const response = await api.get('/orders')
      setOrders(response.data.data.orders)
    } catch (error: any) {
      console.error('Failed to load orders:', error)
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'confirmed':
      case 'processing':
        return 'bg-blue-100 text-blue-800'
      case 'shipped':
        return 'bg-purple-100 text-purple-800'
      case 'delivered':
        return 'bg-green-100 text-green-800'
      case 'cancelled':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    )
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-16">
        <span className="text-6xl mb-4 block">📦</span>
        <h2 className="text-2xl font-bold mb-4 text-dark">No orders yet</h2>
        <p className="text-gray-600 mb-8">Start shopping to see your orders here!</p>
        <Link href="/shop" className="btn-primary">
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <div key={order.id} className="card">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-dark mb-2">
                Order #{order.orderNumber}
              </h3>
              <p className="text-gray-600 text-sm">
                Placed on {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <p className="text-2xl font-bold text-primary mb-2">
                ₹{order.totalAmount}
              </p>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.orderStatus)}`}>
                {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
              </span>
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {order.items.slice(0, 2).map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                    {item.product.images && item.product.images.length > 0 ? (
                      <img
                        src={item.product.images[0].imageUrl}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-2xl">🌿</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <Link
                      href={`/product/${item.product.slug}`}
                      className="font-medium text-dark hover:text-primary"
                    >
                      {item.product.name}
                    </Link>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            {order.items.length > 2 && (
              <p className="text-sm text-gray-600 mb-4">
                +{order.items.length - 2} more item(s)
              </p>
            )}
            <div className="flex gap-4">
              <Link
                href={`/track-order?order=${order.orderNumber}`}
                className="btn-outline text-sm px-4 py-2"
              >
                Track Order
              </Link>
              <Link
                href={`/order/${order.id}`}
                className="btn-primary text-sm px-4 py-2"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

