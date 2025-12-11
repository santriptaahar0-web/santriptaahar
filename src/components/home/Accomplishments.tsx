export default function Accomplishments() {
  const accomplishments = [
    { title: 'Silver Awards', icon: '🥈' },
    { title: 'Acknowledgment', icon: '👏' },
    { title: 'Serving with smile', icon: '😊' },
    { title: 'Young Indians', icon: '👨‍💼' },
    { title: 'Met Rajkot DDO', icon: '🤝' },
  ]

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--dark)' }}>
            Accomplishments ❤️
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {accomplishments.map((accomplishment, index) => (
            <div 
              key={index}
              className="section-card text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{accomplishment.icon}</div>
              <h3 className="font-bold" style={{ color: 'var(--dark)' }}>
                {accomplishment.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

