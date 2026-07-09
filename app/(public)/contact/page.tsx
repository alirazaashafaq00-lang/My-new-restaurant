"use client";

import { useState } from 'react';

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
      <h1 className="text-4xl font-bold text-center">Contact Us</h1>
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6 mt-8">
        {success ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-bold text-green-600">✅ Message Sent!</h2>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full border rounded-lg px-4 py-2" required />
            <input type="email" placeholder="Your Email" className="w-full border rounded-lg px-4 py-2" required />
            <textarea rows={4} placeholder="Message" className="w-full border rounded-lg px-4 py-2" required />
            <button type="submit" className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
