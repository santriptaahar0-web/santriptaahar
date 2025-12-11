'use client'

import { useState } from 'react'
import { FiMail } from 'react-icons/fi'
import api from '@/lib/api'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await api.post('/newsletter/subscribe', { email })
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    } catch (err: any) {
      console.error('Newsletter subscription failed:', err)
    }
  }

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-dark rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-dark rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-dark rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <div className="bg-dark/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in hover:scale-110 transition-transform duration-300">
            <FiMail className="w-10 h-10 text-dark animate-pulse-slow" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-dark">
            Newsletter
          </h2>
          <p className="text-lg mb-10 text-dark/80">
            SignUp now for latest updates
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-dark bg-white/90 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-dark focus:bg-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              required
            />
            <button
              type="submit"
              className="bg-dark text-primary px-10 py-4 rounded-lg font-bold hover:bg-dark-light transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {submitted ? '✓ Subscribed!' : 'Subscribe Now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

