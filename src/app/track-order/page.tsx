import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OrderTracking from '@/components/orders/OrderTracking'

export default function TrackOrderPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-dark">Track Your Order</h1>
        <OrderTracking />
      </div>
      <Footer />
    </main>
  )
}

