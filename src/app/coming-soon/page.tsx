export const metadata = {
  title: 'Coming Soon | Santript Aahar',
  description: 'We are crafting something new and nourishing. Stay tuned.',
}

const highlights = [
  { title: 'Pure spirulina', copy: 'Sourced for clean nutrition with protein, iron, and antioxidants.' },
  { title: 'No fillers', copy: 'No chemicals, just nutrient-dense goodness focused on your wellness.' },
  { title: 'Daily-ready', copy: 'Easy to add to smoothies, bowls, or your daily routine.' },
]

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-gray-900 relative overflow-hidden px-6 py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-emerald-100/50 blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.08) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <section className="relative max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm shadow-emerald-100">
          <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
          Coming soon
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
          We&apos;re crafting a better spirulina experience
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          The store is being refined for clarity, speed, and simplicity. We&apos;ll be back shortly with
          an improved way to discover and enjoy our spirulina products.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-emerald-100 bg-white/85 p-5 shadow-sm backdrop-blur">
              <h3 className="font-semibold text-emerald-800">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="rounded-3xl border border-emerald-100 bg-white/90 p-8 shadow-lg backdrop-blur max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-emerald-800 mb-3">What to expect</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            A cleaner product catalog, thoughtful guidance on usage, and a faster checkout tailored for
            wellness. Thank you for your patience while we polish the experience.
          </p>
        </div>
      </section>
    </main>
  )
}


