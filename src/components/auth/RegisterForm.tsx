'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { useToast } from '@/context/ToastContext'

export default function RegisterForm() {
  const router = useRouter()
  const { register } = useAuth()
  const { success, error: showError } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await register(formData.name, formData.email, formData.password, formData.phone || undefined)
      success('Registration successful! Welcome to Santript Aahar!')
      router.push('/')
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Registration failed. Please try again.'
      setError(errorMessage)
      showError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
          {error}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-2">Full Name *</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="input"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email *</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="input"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Phone</label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="input"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Password *</label>
        <input
          type="password"
          required
          minLength={6}
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="input"
        />
        <p className="text-xs text-gray-500 mt-1">Minimum 6 characters</p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading ? 'Registering...' : 'Register'}
      </button>

      <p className="text-center text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-primary hover:underline">
          Login here
        </Link>
      </p>
    </form>
  )
}

