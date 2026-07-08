"use client";

import { useState } from 'react';
import { GALLERY_IMAGES } from '@/lib/constants';

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(GALLERY_IMAGES.map(img => img.category))];

  const filteredImages = filter === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Our Gallery</h1>
      
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredImages.map((image) => (
          <div key={image.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="h-56 bg-gray-200 flex items-center justify-center">
              <span className="text-5xl">📸</span>
            </div>
            <div className="p-4">
              <h3 className="font-bold">{image.title}</h3>
              <p className="text-sm text-gray-500">{image.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
