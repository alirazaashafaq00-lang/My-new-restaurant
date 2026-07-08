"use client";

import { useState } from 'react';

export default function BookingPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Book a Table</h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        {success ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold">Booking Confirmed!</h2>
            <p className="text-gray-600">We'll see you soon!</p>
            <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700" onClick={() => setSuccess(false)}>
              Book Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="w-full border rounded-lg px-4 py-2 mt-1" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="w-full border rounded-lg px-4 py-2 mt-1" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input type="tel" className="w-full border rounded-lg px-4 py-2 mt-1" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Date</label>
                <input type="date" className="w-full border rounded-lg px-4 py-2 mt-1" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Time</label>
                <input type="time" className="w-full border rounded-lg px-4 py-2 mt-1" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Guests</label>
              <input type="number" className="w-full border rounded-lg px-4 py-2 mt-1" defaultValue="2" required />
            </div>
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
              disabled={loading}
            >
              {loading ? 'Booking...' : 'Book Now'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
