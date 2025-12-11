'use client'

import { useEffect, useState } from 'react'
import api from '@/lib/api'

interface BlogPost {
  id: number
  title: string
  slug: string
  content: string
  excerpt: string
  featuredImageUrl: string | null
  author: string | null
  tags: string[]
  publishedAt: string
}

interface BlogPostDetailProps {
  slug: string
}

export default function BlogPostDetail({ slug }: BlogPostDetailProps) {
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPost()
  }, [slug])

  const fetchPost = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await api.get(`/blog/${slug}`)
      setPost(response.data.data.post)
    } catch (err: any) {
      console.error('Failed to load blog post:', err)
      setError(err.response?.data?.message || 'Failed to load blog post')
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-2/3 mb-6"></div>
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-4 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--dark)' }}>
            Blog post not found
          </h1>
          <p className="text-gray-600 mb-6">
            The blog post you are looking for may have been removed or is temporarily unavailable.
          </p>
          <a href="/blog" className="btn-primary inline-block">
            Back to Blog
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <article className="max-w-4xl mx-auto">
        <div className="mb-6">
          {post.tags && post.tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ backgroundColor: 'var(--primary)', color: 'white' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--dark)' }}>
            {post.title}
          </h1>
          <div className="text-sm text-gray-500 flex items-center gap-2">
            <span>{post.author || 'Admin'}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          </div>
        </div>

        {post.featuredImageUrl && (
          <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={post.featuredImageUrl}
              alt={post.title}
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
        )}

        <div className="prose max-w-none text-lg leading-relaxed" style={{ color: 'var(--gray-brand)' }}>
          {post.content
            ? post.content.split('\n').map((para, index) => (
                <p key={index} className="mb-4">
                  {para}
                </p>
              ))
            : post.excerpt}
        </div>
      </article>
    </div>
  )
}


