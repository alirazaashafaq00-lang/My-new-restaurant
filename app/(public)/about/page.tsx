export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center">About Us</h1>
      <div className="max-w-3xl mx-auto mt-8">
        <p className="text-gray-600 text-lg leading-relaxed">
          Founded in 2010, Delicious Restaurant has been serving authentic cuisine 
          with a modern twist. Our passion for food and commitment to quality 
          has made us a favorite among food lovers.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-8 text-center">
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-red-600">14+</p>
            <p className="text-sm text-gray-500">Years</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-red-600">50K+</p>
            <p className="text-sm text-gray-500">Customers</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="text-3xl font-bold text-red-600">100+</p>
            <p className="text-sm text-gray-500">Dishes</p>
          </div>
        </div>
      </div>
    </div>
  )
}
