import Link from 'next/link'

export default function ProductsSection() {
  const products = [
    {
      id: 1,
      icon: '🍫',
      title: 'Spirulina chocolate',
      description: 'Enjoy an energy boost, increased immunity, and improved digestion from our chocolates. Get your hands on these delicious bars and make every snack a nutritious one!',
      link: '/shop',
    },
    {
      id: 2,
      icon: '🥤',
      title: 'Spirulina Premix',
      description: 'Get ready to experience the power of spirulina with our all-natural, organic spirulina juice! Our juice is made using only the freshest and most vibrant ingredients.',
      link: '/shop',
    },
    {
      id: 3,
      icon: '🍪',
      title: 'Spirulina Cookies',
      description: 'Are you looking for a delicious and nutritious treat that packs a punch of nutrients and flavor? Look no further than spirulina cookies! These tasty treats are made with pure spirulina powder.',
      link: '/shop',
    },
  ]

  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: 'var(--background-gray)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--dark)' }}>
            Our Products
          </h2>
          <p className="text-lg max-w-3xl mx-auto mb-8" style={{ color: 'var(--gray-brand)' }}>
            At Santript Aahar, we are passionate about providing our customers with the highest quality spirulina food products. We are dedicated to helping you feel your best and look forward to having you as a part of our family. Try our products today and see the difference for yourself
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="section-card hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-center mb-6">
                <div className="text-7xl mb-4 animate-float">{product.icon}</div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--dark)' }}>
                  {product.title}
                </h3>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--gray-brand)' }}>
                  {product.description}
                </p>
                <Link href={product.link} className="btn-outline inline-block">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

