import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MyOrdersList from '@/components/orders/MyOrdersList'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function MyOrdersPage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-dark">My Orders</h1>
          <MyOrdersList />
        </div>
        <Footer />
      </main>
    </ProtectedRoute>
  )
}

