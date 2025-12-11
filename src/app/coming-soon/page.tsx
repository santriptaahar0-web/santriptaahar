import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Coming Soon | Santript Aahar',
  description: 'We are crafting something new and nourishing. Stay tuned.',
}

const highlights = [
  {
    title: 'Elevated shopping',
    copy: 'Simpler navigation, faster checkout, and clearer product stories.',
  },
  {
    title: 'Better wellness guidance',
    copy: 'Curated routines and tips so you know exactly how to use our products.',
  },
  {
    title: 'Fresh launches',
    copy: 'New spirulina-powered formulations coming with the redesign.',
  },
]

const roadmap = [
  { label: 'Design polish', status: 'In progress', tone: 'text-amber-700 bg-amber-100' },
  { label: 'Performance tuning', status: 'In review', tone: 'text-blue-700 bg-blue-100' },
  { label: 'Content refresh', status: 'Next', tone: 'text-slate-700 bg-slate-100' },
]

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 via-white to-white text-gray-900 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -right-16 top-32 h-80 w-80 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.12) 1px, transparent 0)', backgroundSize: '22px 22px' }} />
      </div>

      <Header />

      <section className="flex-1 px-6 py-16 md:py-24 relative">
        <div className="max-w-6xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm shadow-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
              Coming soon
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              A refreshed Santript Aahar experience is almost here
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              We&apos;re refining the journey from water to wellness with a faster, clearer, and more helpful store.
              Stay tuned while we add the finishing touches.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold shadow-lg shadow-emerald-200 transition hover:bg-emerald-700"
              >
                Explore products
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-emerald-200 px-6 py-3 text-emerald-800 font-semibold transition hover:border-emerald-300 hover:bg-emerald-50"
              >
                Talk to us
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-emerald-100 bg-white/80 p-4 shadow-sm backdrop-blur">
                  <h3 className="font-semibold text-emerald-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-lg backdrop-blur">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm uppercase tracking-wide text-emerald-700 font-semibold">Roadmap</p>
                  <p className="text-sm text-gray-600">What we&apos;re wrapping up before launch</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  In progress
                </span>
              </div>
              <div className="space-y-3">
                {roadmap.map((step) => (
                  <div
                    key={step.label}
                    className="flex items-center justify-between rounded-2xl border border-emerald-50 bg-emerald-50/60 px-4 py-3"
                  >
                    <span className="font-semibold text-gray-900">{step.label}</span>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${step.tone}`}>
                      {step.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-emerald-100 bg-white/90 p-6 shadow-lg backdrop-blur">
              <h3 className="text-lg font-semibold text-emerald-800">Get notified</h3>
              <p className="text-sm text-gray-600 mb-4">
                We’ll announce the launch soon. Share a quick note and we’ll keep you posted.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm text-gray-800 shadow-sm focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white text-sm font-semibold shadow-md shadow-emerald-200 transition hover:bg-emerald-700"
                >
                  Notify me
                </Link>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Or drop us a line at{' '}
                <a className="text-emerald-700 font-semibold" href="mailto:support@santriptaahar.com">
                  support@santriptaahar.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


