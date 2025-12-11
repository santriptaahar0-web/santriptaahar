import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/contact/ContactForm'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-dark text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-dark">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2 text-primary">Phone</h3>
                  <p className="text-gray-700">+91 98765 43210</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-primary">Email</h3>
                  <p className="text-gray-700">info@santriptaahar.com</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-primary">Address</h3>
                  <p className="text-gray-700">Ahmedabad, Gujarat, India</p>
                </div>
                <div>
                  <h3 className="font-bold mb-2 text-primary">Working Hours</h3>
                  <p className="text-gray-700">Mon–Sat: 9:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

