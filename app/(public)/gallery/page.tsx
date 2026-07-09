export default function GalleryPage() {
  const images = [
    { id: 1, title: "Signature Dish", emoji: "🍽️" },
    { id: 2, title: "Restaurant Interior", emoji: "🏛️" },
    { id: 3, title: "Chef Special", emoji: "👨‍🍳" },
    { id: 4, title: "Outdoor Seating", emoji: "🌳" },
    { id: 5, title: "Dessert Platter", emoji: "🍰" },
    { id: 6, title: "Private Dining", emoji: "✨" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center">Our Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
        {images.map((img) => (
          <div key={img.id} className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition">
            <div className="text-6xl mb-4">{img.emoji}</div>
            <h3 className="text-xl font-bold">{img.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
