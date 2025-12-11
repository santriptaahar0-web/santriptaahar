export default function Certifications() {
  const certifications = [
    'FSSAI Certified',
    '100% Natural',
    'Vegan',
    'Gluten-Free',
    'ISO 22000',
    'Sustainable Sourcing'
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-xl px-8 py-5 shadow-lg border border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-xl group">
                <span className="text-sm md:text-base font-semibold text-dark group-hover:text-primary transition-colors">{cert}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

