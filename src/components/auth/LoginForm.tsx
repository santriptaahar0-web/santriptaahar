'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'
import { useToast } from '@/context/ToastContext'

export default function LoginForm() {
  const router = useRouter()
  const { login } = useAuth()
  const { success, error: showError } = useToast()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      await login(formData.email, formData.password)
      success('Login successful!')
      
      // Check for redirect parameter
      const urlParams = new URLSearchParams(window.location.search)
      const redirect = urlParams.get('redirect')
      router.push(redirect || '/')
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || 'Login failed. Please try again.'
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
        <label className="block text-sm font-medium mb-2">Password *</label>
        <input
          type="password"
          required
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="input"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full"
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>

      <p className="text-center text-gray-600">
        Don't have an account?{' '}
        <Link href="/register" className="text-primary hover:underline">
          Register here
        </Link>
      </p>
    </form>
  )
}

