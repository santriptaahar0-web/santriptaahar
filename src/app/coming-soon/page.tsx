export const metadata = {
  title: 'Coming Soon | Santript Aahar',
  description: 'We are crafting something new and nourishing. Stay tuned.',
}

const highlights = [
  { title: 'Pure spirulina', copy: 'Sourced for clean nutrition with protein, iron, and antioxidants.' },
  { title: 'No fillers', copy: 'No chemicals—only nutrient-dense goodness for your wellness.' },
  { title: 'Daily-ready', copy: 'Smoothies, bowls, or sips—easy to add to your routine.' },
]

const productFocus = [
  { label: 'Immunity boost', detail: 'Antioxidant support to keep you steady, naturally.' },
  { label: 'Clean energy', detail: 'Plant protein that fuels without jitters or a crash.' },
  { label: 'Recovery', detail: 'Supports post-activity balance and daily repair.' },
]

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-white text-gray-900 relative overflow-hidden px-6 py-16 md:py-20">
      {/* Ambient glow & animated dots */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-emerald-200/40 blur-3xl animate-pulse" />
        <div className="absolute -right-24 top-6 h-96 w-96 rounded-full bg-emerald-100/45 blur-3xl animate-pulse" />
        <div
          className="absolute inset-0 opacity-80"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(16, 185, 129, 0.08) 1px, transparent 0)',
            backgroundSize: '22px 22px',
          }}
        />
      </div>

      <section className="relative max-w-6xl mx-auto space-y-12">
        {/* Hero */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm shadow-emerald-100">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-600 animate-ping" />
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            Coming soon
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600">
            A more vivid spirulina experience is almost here
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We&apos;re polishing a cleaner, faster way to discover Santript Aahar. Expect richer product stories,
            clearer benefits, and a calmer path from curiosity to daily habit.
          </p>
        </div>

        {/* Highlight tiles */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, idx) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-white/90 p-5 shadow-lg backdrop-blur"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/60 via-transparent to-teal-50/70" />
              <div className="relative space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-emerald-700">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  #{idx + 1}
                </div>
                <h3 className="font-semibold text-emerald-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Product focus + animated accent */}
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/90 shadow-2xl backdrop-blur">
          <div className="absolute -left-10 -top-12 h-48 w-48 rounded-full bg-emerald-200/50 blur-3xl animate-pulse" />
          <div className="absolute -right-6 top-10 h-56 w-56 rounded-full bg-teal-100/60 blur-3xl animate-spin-slow" />
          <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] p-8 md:p-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
                Product focus
              </div>
              <h2 className="text-2xl font-bold text-emerald-900">
                Built around what you use most
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Pure spirulina that lifts immunity, fuels clean energy, and supports recovery—without distractions.
                Thoughtfully prepared so you can add it to daily life with ease.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {productFocus.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white via-emerald-50/40 to-white p-4 shadow-sm"
                  >
                    <div className="flex items-start gap-2">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <div>
                        <p className="font-semibold text-emerald-900">{item.label}</p>
                        <p className="text-xs text-gray-600 leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 p-6 text-white shadow-xl">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)', backgroundSize: '18px 18px' }} />
              <div className="relative space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
                  Why you&apos;ll like it
                </div>
                <p className="text-base leading-relaxed">
                  Crafted for clarity, speed, and calm. Thank you for your patience while we add the final gloss—so your
                  wellness journey feels smoother than ever.
                </p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-white/10 px-3 py-3 backdrop-blur">
                    <p className="text-emerald-50/80">Ready soon</p>
                    <p className="text-lg font-semibold text-white">Polishing UI</p>
                  </div>
                  <div className="rounded-xl bg-white/10 px-3 py-3 backdrop-blur">
                    <p className="text-emerald-50/80">Experience</p>
                    <p className="text-lg font-semibold text-white">Faster, clearer</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-emerald-50/90">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/15 shadow-inner shadow-emerald-900/40 animate-spin-slow">
                    ✦
                  </span>
                  <span>Better stories, easier choices, and gentle guidance on how to use each product.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


