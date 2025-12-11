export default function BenefitsBar() {
  const benefits = [
    { icon: '🧪', text: 'No chemical' },
    { icon: '🌿', text: '100% Ayurvedic' },
    { icon: '🕐', text: '24/7 Available online' },
  ]

  return (
    <section className="bg-white py-16 border-y overflow-hidden" style={{ borderColor: 'var(--border-color)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="section-card w-full group-hover:shadow-xl transition-all duration-300 hover-lift">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{benefit.icon}</div>
                <h3 className="text-lg font-bold" style={{ color: 'var(--dark)' }}>{benefit.text}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

