import Link from 'next/link'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '✅',
      title: '100% Satisfaction',
      description: 'We guarantee your satisfaction with our premium quality products'
    },
    {
      icon: '⭐',
      title: 'Best Consumer Review',
      description: 'Rated highly by thousands of satisfied customers'
    },
    {
      icon: '💡',
      title: 'Modern Problem Solution',
      description: 'Innovative approach to nutrition and health'
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--dark)' }}>
            Few Reasons Why People Choose Us!
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8" style={{ color: 'var(--gray-brand)' }}>
            Our products are sustainably sourced and have nutritional value. Additionally, our customer service is second-to-none, and we will go above and beyond to make sure you're satisfied with your purchase
          </p>
          <Link href="/shop" className="btn-primary inline-block">
            Explore More
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="section-card text-center hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-6xl mb-6">{reason.icon}</div>
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--dark)' }}>
                {reason.title}
              </h3>
              <p style={{ color: 'var(--gray-brand)' }}>
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

