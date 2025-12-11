'use client'

import { useState } from 'react'
import api from '@/lib/api'
import { useToast } from '@/context/ToastContext'

export default function ContactForm() {
  const { success, error: showError } = useToast()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      await api.post('/contact', formData)
      success('Thank you for contacting us! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    } catch (err: any) {
      showError(err.response?.data?.message || 'Failed to send message. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Name *</label>
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
        <label className="block text-sm font-medium mb-2">Subject *</label>
        <input
          type="text"
          required
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="input"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Message *</label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="input"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="btn-primary w-full"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}

