import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogList from '@/components/blog/BlogList'

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-dark">Blog & Recipes</h1>
        <BlogList />
      </div>
      <Footer />
    </main>
  )
}

