import Link from 'next/link'
import { FiMail, FiPhone, FiInstagram, FiLinkedin, FiYoutube, FiFacebook } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="text-white" style={{ backgroundColor: 'var(--dark)' }}>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-primary">SANTRIPT AAHAR</h3>
              <p className="text-primary text-sm font-medium">YOUR TASTE, YOUR HEALTH</p>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Food from Water. Health for Everyone.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              From clean water farms straight to your plate. High in protein, iron, and antioxidants.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-300 hover:text-primary transition-colors font-medium">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/why-spirulina" className="text-gray-300 hover:text-primary transition-colors font-medium">
                  Why Spirulina
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors font-medium">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <FiPhone className="w-5 h-5" />
                <span className="text-gray-300">+91 97372 53896</span>
              </div>
              <div className="flex items-center space-x-2">
                <FiMail className="w-5 h-5" />
                <span className="text-gray-300">santriptaahar0@gmail.com</span>
              </div>
              <div className="text-gray-400 text-sm">
                <p className="font-semibold mb-1">Our Office</p>
                <p>Marwadi University, Rajkot</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-3">Follow Us:</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors p-2 rounded-lg hover:bg-dark-light">
                  <FiInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors p-2 rounded-lg hover:bg-dark-light">
                  <FiLinkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors p-2 rounded-lg hover:bg-dark-light">
                  <FiYoutube className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors p-2 rounded-lg hover:bg-dark-light">
                  <FiFacebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <span className="text-gray-300 hover:text-primary transition-colors cursor-default">FSSAI Certified</span>
            <span className="text-primary">•</span>
            <span className="text-gray-300 hover:text-primary transition-colors cursor-default">100% Natural</span>
            <span className="text-primary">•</span>
            <span className="text-gray-300 hover:text-primary transition-colors cursor-default">Vegan</span>
            <span className="text-primary">•</span>
            <span className="text-gray-300 hover:text-primary transition-colors cursor-default">Gluten-Free</span>
            <span className="text-primary">•</span>
            <span className="text-gray-300 hover:text-primary transition-colors cursor-default">ISO 22000</span>
            <span className="text-primary">•</span>
            <span className="text-gray-300 hover:text-primary transition-colors cursor-default">Sustainable Sourcing</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>&copy; santript, All Right Reserved.</p>
          <p className="mt-2">Made with ❤️ By santript</p>
        </div>
      </div>
    </footer>
  )
}

