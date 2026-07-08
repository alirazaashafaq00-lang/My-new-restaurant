export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 leading-relaxed mb-4">
          Founded in 2010, Delicious Restaurant has been serving authentic cuisine 
          with a modern twist. Our passion for food and commitment to quality 
          has made us a favorite among food lovers.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-8 text-center">
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-3xl font-bold text-red-600">14+</p>
            <p className="text-sm text-gray-500">Years Experience</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-3xl font-bold text-red-600">50K+</p>
            <p className="text-sm text-gray-500">Happy Customers</p>
          </div>
          <div className="p-4 bg-red-50 rounded-lg">
            <p className="text-3xl font-bold text-red-600">100+</p>
            <p className="text-sm text-gray-500">Signature Dishes</p>
          </div>
        </div>
      </div>
    </div>
  )
}
