'use client'

import { useEffect } from 'react'
import { FiCheckCircle, FiXCircle, FiInfo, FiAlertCircle, FiX } from 'react-icons/fi'

export type ToastType = 'success' | 'error' | 'info' | 'warning'

interface Toast {
  id: string
  message: string
  type: ToastType
}

interface ToastProps {
  toasts: Toast[]
  removeToast: (id: string) => void
}

export default function Toast({ toasts, removeToast }: ToastProps) {
  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  )
}

function ToastItem({ toast, onClose }: { toast: Toast; onClose: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onClose])

  const icons = {
    success: <FiCheckCircle className="w-5 h-5" />,
    error: <FiXCircle className="w-5 h-5" />,
    info: <FiInfo className="w-5 h-5" />,
    warning: <FiAlertCircle className="w-5 h-5" />,
  }

  const colors = {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    info: 'bg-blue-500 text-white',
    warning: 'bg-yellow-500 text-white',
  }

  return (
    <div
      className={`${colors[toast.type]} px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 min-w-[300px] animate-fade-in-up`}
    >
      {icons[toast.type]}
      <p className="flex-1 font-medium">{toast.message}</p>
      <button onClick={onClose} className="hover:opacity-80 transition-opacity">
        <FiX className="w-4 h-4" />
      </button>
    </div>
  )
}

