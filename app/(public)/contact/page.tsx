"use client";

import { useState } from 'react';
import { CONTACT } from '@/lib/constants';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        {success ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold">Message Sent!</h2>
            <p className="text-gray-600">We'll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Your Name</label>
              <input type="text" className="w-full border rounded-lg px-4 py-2 mt-1" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="w-full border rounded-lg px-4 py-2 mt-1" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea rows={5} className="w-full border rounded-lg px-4 py-2 mt-1" required />
            </div>
            <button 
              type="submit" 
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
        
        <div className="mt-6 pt-6 border-t">
          <p className="text-gray-600">📞 {CONTACT.phone}</p>
          <p className="text-gray-600">✉️ {CONTACT.email}</p>
          <p className="text-gray-600">📍 {CONTACT.address}</p>
        </div>
      </div>
    </div>
  )
}
