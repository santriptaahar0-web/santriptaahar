import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductDetail from '@/components/product/ProductDetail'

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <ProductDetail slug={params.slug} />
      <Footer />
    </main>
  )
}

