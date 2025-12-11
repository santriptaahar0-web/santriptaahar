import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-dark text-center">
            Our Story
          </h1>

          <div className="prose max-w-none space-y-8">
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <p className="text-xl text-gray-700 mb-4">
                <strong>Santript Aahar LLP</strong> was founded with one mission — to make nutrition simple, sustainable, and accessible.
              </p>
              <p className="text-lg text-gray-700">
                We discovered the magic of Spirulina, an algae that grows in clean water and holds 60% protein — more than any plant or meat source.
              </p>
            </div>

            <p className="text-lg text-gray-700">
              Today, we cultivate Spirulina in eco-controlled water farms and turn it into tasty, everyday foods like chikkis, energy bars, and smoothies.
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-12">
              <div className="card">
                <h2 className="text-2xl font-bold mb-4 text-primary">Our Vision</h2>
                <p className="text-gray-700">
                  To bring the next generation of sustainable nutrition — from water, not soil — to every Indian home.
                </p>
              </div>
              <div className="card">
                <h2 className="text-2xl font-bold mb-4 text-primary">Our Mission</h2>
                <p className="text-gray-700">
                  To combine traditional Indian taste with modern superfood nutrition.
                </p>
              </div>
            </div>

            <div className="card bg-primary text-white">
              <h2 className="text-2xl font-bold mb-4">Our Promise</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  <span>Clean Nutrition from Nature</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  <span>Scientifically Validated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  <span>Sustainable Farming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✅</span>
                  <span>Affordable for All</span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-12">
              <Link href="/shop" className="btn-primary">
                Shop Our Products
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

