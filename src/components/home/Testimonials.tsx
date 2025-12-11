import Link from 'next/link'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Mithali',
      role: 'Student',
      rating: 5,
      comment: 'I never thought I\'d be able to find a spirulina product that I actually enjoy eating. Santript Aahar has completely changed my mind and I\'ve been hooked ever since. Their products are incredibly tasty and I can actually feel the difference in my body'
    },
    {
      id: 2,
      name: 'Swati Sharma',
      role: 'Student',
      rating: 5,
      comment: 'It is a great innovation to include Spirulina-based food in the regular diet. Spirulina has great health benefits, but it often lacks in taste. This Santript Aahar unit at the Makers Fest provided a perfect solution to this issue. Kudos to the team for coming up with such a great idea. Thank you for bringing this to light.'
    },
  ]

  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: 'var(--background-gray)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--dark)' }}>
            What People Say About Us!
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8" style={{ color: 'var(--gray-brand)' }}>
            From increasing energy levels to helping with weight loss, spirulina has been proven to be a powerful superfood that can help with a variety of health issues. Our customers are our number one priority, and we strive to provide them with safe and effective products.
          </p>
          <Link href="/blog" className="btn-outline inline-block">
            See More
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="section-card hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span 
                    key={i} 
                    className="text-yellow-400 text-xl"
                  >
                    ⭐
                  </span>
                ))}
              </div>
              <p className="mb-6 italic text-lg leading-relaxed" style={{ color: 'var(--gray-brand)' }}>
                "{testimonial.comment}"
              </p>
              <div className="flex items-center pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: 'var(--primary)' }}>
                  <span className="text-xl text-white font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold" style={{ color: 'var(--dark)' }}>{testimonial.name}</p>
                  <p className="text-sm" style={{ color: 'var(--gray-brand)' }}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


