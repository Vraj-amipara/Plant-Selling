import { Leaf, ShieldCheck, Sprout } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://i0.wp.com/mrplantgeek.com/wp-content/uploads/2023/05/houseplants-that-like-shade.jpg?fit=1000%2C500&ssl=1" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">About Verdant Vibes</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Bringing nature indoors, one plant at a time. We believe in the transformative power of greenery.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10">
              <img src="https://hips.hearstapps.com/hmg-prod/images/collection-of-beautiful-houseplants-on-wooden-table-royalty-free-image-1712685460.jpg?crop=1xw:0.84415xh;0,0.195xh" alt="Our Store" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-medium text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2024, Verdant Vibes was born out of a simple belief: everyone deserves to experience the joy and tranquility of living with plants. We understand that finding the right plant for your space and lifestyle can be overwhelming, especially for beginners.
                </p>
                <p>
                  That's why we've curated a collection of beautiful, healthy plants and paired them with expert care guides and our innovative AI Plant Assistant. Whether you're a seasoned plant parent or just starting your green journey, we're here to help you succeed.
                </p>
                <p>
                  We are committed to sustainability, sourcing our plants responsibly, and using eco-friendly packaging whenever possible. Join us in our mission to grow green and live clean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium text-gray-900">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-700">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">Eco-friendly packaging and responsible sourcing to protect our planet.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-700">
                <ShieldCheck className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">Every plant is inspected to ensure it arrives happy and healthy at your door.</p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-700">
                <Sprout className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">Education</h3>
              <p className="text-gray-600">Empowering you with the knowledge and tools to help your plants thrive.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
