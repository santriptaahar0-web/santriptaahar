import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BlogPostDetail from '@/components/blog/BlogPostDetail'

interface BlogPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPageProps) {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <Header />
      <BlogPostDetail slug={params.slug} />
      <Footer />
    </main>
  )
}


