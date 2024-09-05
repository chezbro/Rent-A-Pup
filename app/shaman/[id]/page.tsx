'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ReviewForm from '../../components/ReviewForm'

const mockShamans = [
    {
      id: '1',
      name: 'John Doe',
      speciality: 'Ayahuasca ceremonies',
      rating: 4.8,
      bio: 'John has been practicing shamanic healing for over 20 years, specializing in Ayahuasca ceremonies.',
      location: 'Peru',
      reviews: [
        { id: '1', userId: 'user1', rating: 5, comment: 'Life-changing experience!', date: '2024-08-15' },
        { id: '2', userId: 'user2', rating: 4, comment: 'Very insightful session.', date: '2024-08-10' },
      ]
    },
    // ... (update other shamans similarly)
  ]


  function ReviewStars({ rating }: { rating: number }) {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <span key={star} className={star <= rating ? "text-yellow-500" : "text-gray-300"}>
            ★
          </span>
        ))}
      </div>
    )
  }
  
  export default function ShamanProfile() {
    const params = useParams()
    const [shaman, setShaman] = useState<any>(null)
  
    useEffect(() => {
      const fetchedShaman = mockShamans.find(s => s.id === params.id)
      setShaman(fetchedShaman)
    }, [params.id])
  
    if (!shaman) {
      return <div>Loading...</div>
    }
  
    const handleReviewSubmit = (review: { rating: number; comment: string }) => {
        // In a real app, you would send this data to your backend
        console.log('New review:', review)
        
        // For now, let's just add it to the shaman's reviews array
        const newReview = {
          id: String(shaman.reviews.length + 1),
          userId: 'currentUser', // In a real app, this would be the logged-in user's ID
          rating: review.rating,
          comment: review.comment,
          date: new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD format
        }
        
        setShaman({
          ...shaman,
          reviews: [...shaman.reviews, newReview],
          rating: ((shaman.rating * shaman.reviews.length + review.rating) / (shaman.reviews.length + 1)).toFixed(1)
        })
      }
    
      if (!shaman) {
        return <div>Loading...</div>
      }
    
      return (
        <main className="flex min-h-screen flex-col items-center p-24">
          <div className="max-w-2xl w-full">
            {/* ... (keep the existing shaman details) */}
    
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              {shaman.reviews.map((review: any) => (
                <div key={review.id} className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center mb-2">
                    <ReviewStars rating={review.rating} />
                    <span className="ml-2 text-sm text-gray-600">{review.date}</span>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
    
            <ReviewForm shamanId={shaman.id} onSubmit={handleReviewSubmit} />
    
            <Link href="/find-shaman" className="text-blue-500 hover:underline">
              Back to Shaman List
            </Link>
          </div>
        </main>
      )
    }