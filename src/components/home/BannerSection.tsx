'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

export default function BannerSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const banners = [
    {
      id: 1,
      title: 'Your Taste, Your Health',
      subtitle: 'Premium Spirulina Products',
      description: 'Discover delicious and nutritious spirulina-based foods that nourish your body and delight your taste buds',
      image: '🌿',
      link: '/shop',
      buttonText: 'Explore More',
      bgGradient: 'from-primary via-primary-dark to-primary'
    },
    {
      id: 2,
      title: 'Stay healthy without tackling medical products',
      subtitle: 'Natural Nutrition from Nature',
      description: 'Experience the power of 100% Ayurvedic spirulina products - no chemicals, just pure health',
      image: '💚',
      link: '/shop',
      buttonText: 'Explore More',
      bgGradient: 'from-primary-dark via-primary to-accent'
    },
    {
      id: 3,
      title: 'Sustainable Nutrition',
      subtitle: 'Grown in Water, Not Soil',
      description: 'Eco-friendly farming that gives you the best of nature',
      image: '🌊',
      link: '/about',
      buttonText: 'Our Story',
      bgGradient: 'from-accent via-primary to-primary-dark'
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [banners.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {/* Banner Slides */}
      <div className="relative h-full">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? 'opacity-100 translate-x-0'
                : index < currentSlide
                ? 'opacity-0 -translate-x-full'
                : 'opacity-0 translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${banner.bgGradient} relative overflow-hidden`}>
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 animate-float" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                }}></div>
              </div>

              <div className="container mx-auto px-4 h-full flex items-center relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                  {/* Content */}
                  <div className={`text-dark ${index === currentSlide ? 'animate-fade-in-up' : ''}`}>
                    <div className="mb-4">
                      <span className="inline-block bg-dark/20 text-dark px-4 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
                        {banner.subtitle}
                      </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                      {banner.title}
                    </h2>
                    <p className="text-xl md:text-2xl mb-8 text-dark/80 leading-relaxed">
                      {banner.description}
                    </p>
                    <Link
                      href={banner.link}
                      className="inline-block bg-dark text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-dark-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                    >
                      {banner.buttonText} →
                    </Link>
                  </div>

                  {/* Image/Icon */}
                  <div className={`hidden md:flex items-center justify-center ${index === currentSlide ? 'animate-scale-in' : ''}`}>
                    <div className="relative">
                      <div className="text-9xl animate-float">{banner.image}</div>
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-dark/80 text-primary p-3 rounded-full hover:bg-dark transition-all duration-300 z-20 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <FiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-dark/80 text-primary p-3 rounded-full hover:bg-dark transition-all duration-300 z-20 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <FiChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-dark w-8'
                : 'bg-dark/40 hover:bg-dark/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

