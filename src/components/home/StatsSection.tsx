export default function StatsSection() {
  const stats = [
    { number: '234', label: 'Happy Clients', icon: '😊' },
    { number: '1097', label: 'Cups Served', icon: '☕' },
    { number: '4', label: 'Dedicated Staff', icon: '👥' },
    { number: '5', label: 'Awards Achieved', icon: '🏆' },
  ]

  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: 'var(--background-gray)' }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="section-card">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
                  {stat.number}
                </div>
                <div className="text-lg font-semibold" style={{ color: 'var(--dark)' }}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

