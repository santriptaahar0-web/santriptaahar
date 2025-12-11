import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CartContent from '@/components/cart/CartContent'

export default function CartPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--dark)' }}>
            Shopping Cart
          </h1>
          <p style={{ color: 'var(--gray-brand)' }}>Review your items before checkout</p>
        </div>
        <CartContent />
      </div>
      <Footer />
    </main>
  )
}

