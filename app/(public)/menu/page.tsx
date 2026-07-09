export default function MenuPage() {
  const menuItems = [
    { name: "Chicken Biryani", price: 800, desc: "Authentic biryani with spices" },
    { name: "BBQ Platter", price: 1200, desc: "Grilled chicken, beef, and fish" },
    { name: "Vegetable Curry", price: 600, desc: "Fresh vegetables in curry sauce" },
    { name: "Garlic Naan", price: 150, desc: "Fresh baked naan with garlic" },
    { name: "Chicken Karahi", price: 900, desc: "Traditional karahi with chicken" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
        {menuItems.map((item) => (
          <div key={item.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="text-gray-600">{item.desc}</p>
            <p className="text-2xl font-bold text-red-600 mt-2">Rs.{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
