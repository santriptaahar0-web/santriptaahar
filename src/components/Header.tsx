'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FiMenu, FiX, FiShoppingCart, FiUser } from 'react-icons/fi'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getItemCount } = useCart()
  const { isAuthenticated, user, logout } = useAuth()

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b" style={{ borderColor: 'var(--border-color)' }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              {/* Logo Icon with Animation */}
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-4xl animate-float">🌿</span>
              </div>
              {/* Green Frame Effect */}
              <div className="absolute -inset-1 bg-primary/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden md:block ml-2">
              <div className="text-xs text-primary font-bold tracking-wider">YOUR TASTE, YOUR HEALTH</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-900 font-medium hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">
              Home
            </Link>
            <Link href="/shop" className="text-dark font-medium hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">
              Shop
            </Link>
            <Link href="/why-spirulina" className="text-dark font-medium hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">
              Why Spirulina
            </Link>
            <Link href="/about" className="text-dark font-medium hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">
              About
            </Link>
            <Link href="/blog" className="text-dark font-medium hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">
              Blog
            </Link>
            <Link href="/contact" className="text-dark font-medium hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative p-3 hover:text-primary transition-colors rounded-lg hover:bg-gray-50" style={{ backgroundColor: 'transparent' }}>
              <FiShoppingCart className="w-6 h-6" />
              {getItemCount() > 0 && (
                <span className="absolute top-1 right-1 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse-slow">
                  {getItemCount()}
                </span>
              )}
            </Link>
            <div className="relative group">
              <Link href={isAuthenticated ? "/my-orders" : "/login"} className="p-3 hover:text-primary transition-colors rounded-lg hover:bg-gray-50">
                <FiUser className="w-6 h-6" />
              </Link>
              {isAuthenticated && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-4 border-b border-gray-100">
                    <p className="font-semibold text-dark">{user?.name}</p>
                    <p className="text-sm text-gray-600">{user?.email}</p>
                  </div>
                  <div className="p-2">
                    <Link href="/my-orders" className="block px-4 py-2 hover:bg-gray-50 rounded-md text-sm">
                      My Orders
                    </Link>
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-50 rounded-md text-sm text-red-600"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t animate-fade-in">
            <div className="flex flex-col space-y-4">
              {[
                { href: '/', label: 'Home' },
                { href: '/shop', label: 'Shop' },
                { href: '/why-spirulina', label: 'Why Spirulina' },
                { href: '/about', label: 'About' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-dark hover:text-primary transition-colors py-2 animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

