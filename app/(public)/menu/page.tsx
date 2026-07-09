export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold">Chicken Biryani</h3>
          <p className="text-gray-600">Rs. 800</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold">BBQ Platter</h3>
          <p className="text-gray-600">Rs. 1200</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-bold">Vegetable Curry</h3>
          <p className="text-gray-600">Rs. 600</p>
        </div>
      </div>
    </div>
  )
}
