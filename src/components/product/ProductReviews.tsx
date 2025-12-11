'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useToast } from '@/context/ToastContext'
import api from '@/lib/api'

interface Review {
  id: number
  rating: number
  comment: string | null
  user: {
    name: string
  }
  createdAt: string
  isVerified: boolean
}

interface ProductReviewsProps {
  productId: number
  averageRating: number
}

export default function ProductReviews({ productId, averageRating }: ProductReviewsProps) {
  const { isAuthenticated } = useAuth()
  const { success, error: showError } = useToast()
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    comment: '',
  })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetchReviews()
  }, [productId])

  const fetchReviews = async () => {
    try {
      const response = await api.get(`/reviews/product/${productId}`)
      setReviews(response.data.data.reviews)
    } catch (err) {
      console.error('Failed to load reviews:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isAuthenticated) {
      showError('Please login to submit a review')
      return
    }

    setSubmitting(true)
    try {
      await api.post('/reviews', {
        productId,
        rating: reviewForm.rating,
        comment: reviewForm.comment || undefined,
      })
      success('Review submitted successfully!')
      setReviewForm({ rating: 5, comment: '' })
      setShowForm(false)
      fetchReviews()
    } catch (err: any) {
      showError(err.response?.data?.message || 'Failed to submit review')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-1" style={{ color: 'var(--dark)' }}>
            Customer Reviews
          </h2>
          <p className="text-sm" style={{ color: 'var(--gray-brand)' }}>
            Real feedback from people who have tried this product
          </p>
        </div>
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            !showForm && (
              <button onClick={() => setShowForm(true)} className="btn-primary">
                Write a Review
              </button>
            )
          ) : (
            <p className="text-xs md:text-sm" style={{ color: 'var(--gray-brand)' }}>
              Please <span className="font-semibold">login</span> to share your experience.
            </p>
          )}
        </div>
      </div>

      {/* Average Rating */}
      <div className="section-card mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-5xl font-bold mb-1" style={{ color: 'var(--primary)' }}>
                {averageRating.toFixed(1)}
              </div>
              <div className="flex items-center justify-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={i < Math.round(averageRating) ? 'text-yellow-400' : 'text-gray-300'}
                  >
                    ⭐
                  </span>
                ))}
              </div>
              <p className="text-xs" style={{ color: 'var(--gray-brand)' }}>
                Based on {reviews.length} review{reviews.length === 1 ? '' : 's'}
              </p>
            </div>
          </div>
          <div className="text-sm space-y-1" style={{ color: 'var(--gray-brand)' }}>
            <p>• Ratings are from verified customers who purchased this product.</p>
            <p>• Your honest feedback helps others choose the right product.</p>
          </div>
        </div>
      </div>

      {/* Review Form */}
      {showForm && (
        <div className="section-card mb-8 animate-fade-in-up">
          <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--dark)' }}>
            Write a Review
          </h3>
          <p className="text-sm mb-4" style={{ color: 'var(--gray-brand)' }}>
            Share how this product helped you. Your review will appear after quick verification.
          </p>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Rating *</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setReviewForm({ ...reviewForm, rating })}
                    className={`text-3xl transition-transform hover:scale-110 ${
                      rating <= reviewForm.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Comment</label>
              <textarea
                value={reviewForm.comment}
                onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
                rows={4}
                className="input"
                placeholder="Share your experience..."
              />
            </div>
            <div className="flex gap-4">
              <button type="submit" disabled={submitting} className="btn-primary">
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowForm(false)
                  setReviewForm({ rating: 5, comment: '' })
                }}
                className="btn-outline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews List */}
      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="card animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      ) : reviews.length === 0 ? (
        <div className="section-card text-center py-12">
          <p className="mb-2" style={{ color: 'var(--gray-brand)' }}>
            No reviews yet. Be the first to review!
          </p>
          {isAuthenticated && !showForm && (
            <button onClick={() => setShowForm(true)} className="btn-primary mt-2">
              Write a Review
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="section-card animate-fade-in-up">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold" style={{ color: 'var(--dark)' }}>
                      {review.user.name}
                    </span>
                    {review.isVerified && (
                      <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}>
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>
              {review.comment && (
                <p className="text-gray-700 leading-relaxed">{review.comment}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

