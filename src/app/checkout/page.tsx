import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CheckoutContent from '@/components/checkout/CheckoutContent'
import ProtectedRoute from '@/components/ProtectedRoute'

export default function CheckoutPage() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-dark">Checkout</h1>
          <CheckoutContent />
        </div>
        <Footer />
      </main>
    </ProtectedRoute>
  )
}

