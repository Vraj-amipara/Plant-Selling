import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pb-12">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-green-900 text-white overflow-hidden mb-12">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://i0.wp.com/mrplantgeek.com/wp-content/uploads/2023/05/houseplants-that-like-shade.jpg?fit=1000%2C500&ssl=1" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">Contact Us</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with our team.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-lg shadow-green-900/5">
            <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" id="firstName" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" id="lastName" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-green-50 rounded-3xl p-8 flex items-start gap-4">
              <div className="bg-white p-3 rounded-full text-green-600 shrink-0 shadow-sm">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600 mb-2">Our friendly team is here to help.</p>
                <a href="mailto:vrajamipara9@gmail.com" className="text-green-700 font-medium hover:text-green-800">vrajamipara9@gmail.com</a>
              </div>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 flex items-start gap-4">
              <div className="bg-white p-3 rounded-full text-green-600 shrink-0 shadow-sm">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">Office</h3>
                <p className="text-gray-600 mb-2">Come say hello at our headquarters.</p>
                <p className="text-gray-900 font-medium">E - 404 meera heights ring rode , Surat</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-3xl p-8 flex items-start gap-4">
              <div className="bg-white p-3 rounded-full text-green-600 shrink-0 shadow-sm">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-600 mb-2">Mon-Fri from 8am to 5pm.</p>
                <a href="tel:+919909652766" className="text-green-700 font-medium hover:text-green-800">+91 99096 52766</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
