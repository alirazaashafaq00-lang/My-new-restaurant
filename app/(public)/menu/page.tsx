"use client";

import { useState } from 'react';

const menuItems = [
  { id: 1, name: "Chicken Biryani", price: 800, category: "Main Course", veg: false },
  { id: 2, name: "BBQ Platter", price: 1200, category: "BBQ", veg: false },
  { id: 3, name: "Vegetable Curry", price: 600, category: "Main Course", veg: true },
  { id: 4, name: "Garlic Naan", price: 150, category: "Bread", veg: true },
  { id: 5, name: "Chicken Karahi", price: 900, category: "Main Course", veg: false },
];

export default function MenuPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(menuItems.map(item => item.category))];

  const filteredItems = filter === "All" ? menuItems : menuItems.filter(item => item.category === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
      
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              filter === cat ? "bg-red-600 text-white" : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  item.veg ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                }`}>
                  {item.veg ? "Veg" : "Non-Veg"}
                </span>
              </div>
              <p className="text-xl font-bold text-red-600">Rs.{item.price}</p>
            </div>
            <button className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
