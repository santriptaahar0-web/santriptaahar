import Link from 'next/link'

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image/Icon Section */}
            <div className="animate-slide-in-left">
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-2xl">
                  <span className="text-9xl animate-float">🌊</span>
                </div>
                <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-2xl animate-pulse-slow"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
            We are not farmers.
            <br />
            <span className="text-primary">We are water cultivators.</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            <strong className="text-primary">Santript Aahar</strong> means "Satisfaction through Food." But for us, satisfaction isn't about taste alone — it's about nutrition that truly nourishes.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Our journey began with one question: <em className="text-primary font-semibold">What if food could come from water, not soil?</em>
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            And from that idea, Spirulina — the world's most nutrient-dense algae — became our foundation for creating sustainable, healthy food for all.
          </p>
          <Link href="/about" className="btn-outline inline-block hover-lift">
            Know More →
          </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

