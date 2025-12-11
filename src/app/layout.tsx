import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/context/AuthContext'
import { CartProvider } from '@/context/CartContext'
import { ToastProvider } from '@/context/ToastContext'

export const metadata: Metadata = {
  title: 'Santript Aahar - From Water to Wellness',
  description: 'Nourishment Redefined with Spirulina. High in protein, iron, and antioxidants.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          <AuthProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  )
}

