export default function ReviewsPage() {
  const reviews = [
    { name: "Ahmed Khan", rating: 5, comment: "Best biryani ever! Highly recommended!", date: "Dec 15, 2024" },
    { name: "Sara Ali", rating: 5, comment: "Great atmosphere and delicious food!", date: "Dec 10, 2024" },
    { name: "Usman Raza", rating: 4, comment: "Amazing food but crowded on weekends.", date: "Dec 5, 2024" },
  ];

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center">Customer Reviews</h1>
      <div className="text-center mt-4">
        <span className="text-5xl font-bold text-red-600">{avgRating}</span>
        <div className="text-2xl">⭐⭐⭐⭐⭐</div>
        <p className="text-gray-500">{reviews.length} reviews</p>
      </div>
      <div className="max-w-3xl mx-auto mt-8 space-y-6">
        {reviews.map((review) => (
          <div key={review.name} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="font-bold">{review.name}</h3>
            <div className="text-yellow-400">★★★★★</div>
            <p className="text-gray-600 mt-2">{review.comment}</p>
            <p className="text-sm text-gray-400 mt-2">{review.date}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
