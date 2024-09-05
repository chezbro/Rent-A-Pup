'use client'

import { useState } from 'react'

export default function ReviewForm({ shamanId, onSubmit }) {
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ rating, comment })
    setRating(5)
    setComment('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Leave a Review</h3>
      <div className="mb-4">
        <label className="block mb-2">Rating:</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full p-2 border rounded"
        >
          {[5, 4, 3, 2, 1].map((value) => (
            <option key={value} value={value}>
              {value} Star{value !== 1 ? 's' : ''}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded"
          rows={4}
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Submit Review
      </button>
    </form>
  )
}