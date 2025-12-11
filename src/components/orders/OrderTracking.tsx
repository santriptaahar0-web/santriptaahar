'use client'

import { useState } from 'react'
import api from '@/lib/api'
import { FiPackage, FiCheckCircle, FiTruck, FiClock } from 'react-icons/fi'

export default function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState('')
  const [order, setOrder] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      const response = await api.get(`/orders/track/${orderNumber}`)
      setOrder(response.data.data.order)
    } catch (err: any) {
      setError(err.response?.data?.message || 'Order not found')
      setOrder(null)
    } finally {
      setLoading(false)
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <FiClock className="w-6 h-6" />
      case 'confirmed':
        return <FiCheckCircle className="w-6 h-6" />
      case 'processing':
        return <FiPackage className="w-6 h-6" />
      case 'shipped':
        return <FiTruck className="w-6 h-6" />
      case 'delivered':
        return <FiCheckCircle className="w-6 h-6" />
      default:
        return <FiClock className="w-6 h-6" />
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
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleTrack} className="card mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            placeholder="Enter order number (e.g., SA1234567890)"
            className="input flex-1"
            required
          />
          <button type="submit" className="btn-primary" disabled={loading}>
            {loading ? 'Tracking...' : 'Track Order'}
          </button>
        </div>
        {error && (
          <p className="text-red-600 mt-4">{error}</p>
        )}
      </form>

      {order && (
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-dark">Order Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number:</span>
                <span className="font-bold">{order.orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Order Date:</span>
                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-bold text-primary">₹{order.totalAmount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.orderStatus)}`}>
                  {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                </span>
              </div>
              {order.trackingNumber && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Tracking Number:</span>
                  <span className="font-mono">{order.trackingNumber}</span>
                </div>
              )}
            </div>
          </div>

          {/* Order Status Timeline */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-6 text-dark">Order Status</h2>
            <div className="space-y-4">
              {['pending', 'confirmed', 'processing', 'shipped', 'delivered'].map((status, index) => {
                const isActive = ['pending', 'confirmed', 'processing', 'shipped', 'delivered']
                  .indexOf(order.orderStatus) >= index
                return (
                  <div key={status} className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isActive ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {getStatusIcon(status)}
                    </div>
                    <div className="flex-1">
                      <p className={`font-medium ${isActive ? 'text-dark' : 'text-gray-400'}`}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Order Items */}
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 text-dark">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item: any) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    {item.product.images && item.product.images.length > 0 ? (
                      <img
                        src={item.product.images[0].imageUrl}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <span className="text-3xl">🌿</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-dark">{item.product.name}</h3>
                    <p className="text-gray-600 text-sm">Quantity: {item.quantity}</p>
                  </div>
                  <span className="font-bold text-primary">₹{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

