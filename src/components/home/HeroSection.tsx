import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary-dark text-dark py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-dark/10 text-dark px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🌿 Nature's Superfood
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-dark leading-tight">
            From Water to Wellness
            <br />
            <span className="text-primary-dark">Nourishment Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-dark/80 leading-relaxed max-w-2xl">
            At Santript Aahar, we bring nature's most powerful nutrition — Spirulina — from clean water farms straight to your plate. High in protein, iron, and antioxidants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/shop" className="btn-primary bg-dark text-primary hover:bg-dark-light text-center text-lg px-10 py-4">
              Shop Now
            </Link>
            <Link href="/why-spirulina" className="btn-outline border-2 border-dark text-dark hover:bg-dark hover:text-primary text-center text-lg px-10 py-4">
              Discover Spirulina
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

