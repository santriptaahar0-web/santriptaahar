'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useAuth } from './AuthContext'

interface CartItem {
  id: number
  productId: number
  name: string
  price: number
  quantity: number
  image: string
  slug: string
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: any, quantity?: number) => void
  removeItem: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const { isAuthenticated } = useAuth()

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error('Failed to load cart:', error)
      }
    }
  }, [])

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    if (items.length > 0) {
      localStorage.setItem('cart', JSON.stringify(items))
    } else {
      localStorage.removeItem('cart')
    }
  }, [items])

  const addItem = (product: any, quantity: number = 1) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.productId === product.id)

      if (existingItem) {
        return prevItems.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [
        ...prevItems,
        {
          id: Date.now(),
          productId: product.id,
          name: product.name,
          price: Number(product.price),
          quantity,
          image: product.images?.[0]?.imageUrl || '',
          slug: product.slug,
        },
      ]
    })
  }

  const removeItem = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.productId !== productId))
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }

    setItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
    localStorage.removeItem('cart')
  }

  const getTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

