
"use client";

import { useState } from 'react';

const reviews = [
  { id: 1, name: "Ahmed Khan", rating: 5, date: "2024-12-15", comment: "Best biryani ever! Highly recommended!", verified: true },
  { id: 2, name: "Sara Ali", rating: 5, date: "2024-12-10", comment: "Great atmosphere and delicious food!", verified: true },
  { id: 3, name: "Usman Raza", rating: 4, date: "2024-12-05", comment: "Amazing food but crowded on weekends.", verified: true },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map((star) => (
      <span key={star} className={`text-lg ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
    ))}
  </div>
);

export default function ReviewsPage() {
  const [showForm, setShowForm] = useState(false);
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
        <div className="flex items-center justify-center gap-6">
          <div className="text-center">
            <span className="text-5xl font-bold text-red-600">{avgRating.toFixed(1)}</span>
            <div className="flex justify-center mt-1"><StarRating rating={Math.round(avgRating)} /></div>
            <p className="text-sm text-gray-500">{reviews.length} reviews</p>
          </div>
        </div>
        <button onClick={() => setShowForm(true)} className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700">
          Write a Review
        </button>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-500 text-lg">{review.name[0]}</span>
              </div>
              <div>
                <h3 className="font-bold">{review.name}</h3>
                <div className="flex items-center gap-2">
                  <StarRating rating={review.rating} />
                  <span className="text-xs text-gray-400">{review.date}</span>
                </div>
                <p className="mt-2 text-gray-600">{review.comment}</p>
                {review.verified && (
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full mt-2 inline-block">✅ Verified</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full border rounded-lg px-4 py-2" required />
              <input type="email" placeholder="Your Email" className="w-full border rounded-lg px-4 py-2" required />
              <div>
                <label className="block text-sm font-medium">Rating</label>
                <div className="flex gap-2 text-2xl">⭐⭐⭐⭐⭐</div>
              </div>
              <textarea rows={4} placeholder="Your Review" className="w-full border rounded-lg px-4 py-2" required />
              <div className="flex gap-2">
                <button type="submit" className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700">Submit</button>
                <button type="button" onClick={() => setShowForm(false)} className="flex-1 border border-gray-300 py-2 rounded-lg hover:bg-gray-50">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
