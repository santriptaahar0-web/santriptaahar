import Header from '@/components/Header'
import Footer from '@/components/Footer'
import RegisterForm from '@/components/auth/RegisterForm'

export default function RegisterPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-dark text-center">Register</h1>
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}

