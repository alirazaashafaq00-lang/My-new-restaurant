import { CONTACT } from '@/lib/constants'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-red-700 mb-6">
          Delicious Restaurant
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Authentic Flavors, Memorable Experiences
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="/menu" className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition">
            View Menu
          </a>
          <a href="/booking" className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg hover:bg-red-50 transition">
            Book a Table
          </a>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-5xl mb-4">🍽️</div>
            <h3 className="text-xl font-bold mb-2">Fresh Food</h3>
            <p className="text-gray-600">Made with love and fresh ingredients daily</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-5xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-bold mb-2">Expert Chefs</h3>
            <p className="text-gray-600">Our chefs bring years of experience</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="text-5xl mb-4">🏆</div>
            <h3 className="text-xl font-bold mb-2">Award Winning</h3>
            <p className="text-gray-600">Recognized for excellence in cuisine</p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-50 py-12 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600">📞 {CONTACT.phone}</p>
          <p className="text-gray-600">✉️ {CONTACT.email}</p>
          <p className="text-gray-600">📍 {CONTACT.address}</p>
        </div>
      </div>
    </div>
  )
}
