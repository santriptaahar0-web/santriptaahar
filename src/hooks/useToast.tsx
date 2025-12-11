'use client'

import { useState, useCallback } from 'react'
import Toast, { ToastType } from '@/components/Toast'

let toastId = 0

export function useToast() {
  const [toasts, setToasts] = useState<Array<{ id: string; message: string; type: ToastType }>>([])

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    const id = `toast-${toastId++}`
    setToasts((prev) => [...prev, { id, message, type }])
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const ToastContainer = () => <Toast toasts={toasts} removeToast={removeToast} />

  return {
    showToast,
    ToastContainer,
    success: (message: string) => showToast(message, 'success'),
    error: (message: string) => showToast(message, 'error'),
    info: (message: string) => showToast(message, 'info'),
    warning: (message: string) => showToast(message, 'warning'),
  }
}

