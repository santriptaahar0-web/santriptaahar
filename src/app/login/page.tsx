import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoginForm from '@/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-dark text-center">Login</h1>
          <LoginForm />
        </div>
      </div>
      <Footer />
    </main>
  )
}

