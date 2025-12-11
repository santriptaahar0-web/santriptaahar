'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import api from '@/lib/api'

interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  featuredImageUrl: string | null
  author: string | null
  tags: string[]
  publishedAt: string
}

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const response = await api.get('/blog')
      setPosts(response.data.data.posts)
    } catch (error) {
      console.error('Failed to load blog posts:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card animate-pulse">
            <div className="bg-gray-200 h-48 rounded-lg mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>
        ))}
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No blog posts available yet</p>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`}>
          <article className="card cursor-pointer group">
            <div className="bg-gray-200 h-48 rounded-lg mb-4 overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              {post.featuredImageUrl ? (
                <img
                  src={post.featuredImageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-6xl">📝</span>
              )}
            </div>
            <div className="mb-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-primary text-white px-2 py-1 rounded mr-2">
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{post.author || 'Admin'}</span>
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
          </article>
        </Link>
      ))}
    </div>
  )
}

