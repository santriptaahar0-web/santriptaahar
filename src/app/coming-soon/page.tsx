import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Coming Soon | Santript Aahar',
  description: 'We are crafting something new and nourishing. Stay tuned.',
}

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-white text-gray-900">
      <Header />
      <section className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-3xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            Coming Soon
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            A fresh Santript Aahar experience is on the way
          </h1>
          <p className="text-lg text-gray-600">
            We&apos;re putting the finishing touches on a new journey from water to wellness.
            Check back shortly or head to the shop to explore our spirulina-powered products.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className="rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"
            >
              Visit the shop
            </Link>
            <Link
              href="/"
              className="rounded-full border border-emerald-200 px-6 py-3 text-emerald-800 font-semibold transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              Back to home
            </Link>
          </div>
          <p className="text-sm text-gray-500">
            Want updates? Subscribe on our homepage and be first to know when we launch.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}


