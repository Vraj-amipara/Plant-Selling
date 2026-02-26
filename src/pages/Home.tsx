import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Droplets, Sun, ShoppingCart, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { products, categories } from '../data/products';
import { useCart } from '../store/CartContext';
import { cn } from '../lib/utils';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { addToCart } = useCart();

  const displayProducts = products
    .filter(p => activeCategory === 'All' || p.category === activeCategory)
    .slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-start overflow-hidden bg-green-950 opacity-90">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://img.freepik.com/free-photo/green-houseplant-background-plant-lovers_53876-128849.jpg?semt=ais_hybrid&w=740&q=80" 
            alt="Lush green plants" 
            className="w-full h-full object-cover opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-950/50 to-transparent"></div>
        </div>
        
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full mt-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-900/40 border border-green-500/30 backdrop-blur-md mb-8"
            >
              <span className="text-[11px] font-bold tracking-[0.2em] text-green-300 uppercase">Welcome to Verdant Vibes</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-6xl md:text-8xl font-serif font-medium text-white tracking-tight mb-6 leading-[1.1]"
            >
              Grow Green. <br />
              Live Clean.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-green-50/90 mb-10 max-w-xl font-light leading-relaxed"
            >
              Transform your space with nature's finest. Curated plants for modern living that bring life to every corner.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/shop" 
                className="inline-flex items-center justify-center gap-2 bg-[#4CAF50] hover:bg-[#45a049] text-white px-8 py-4 rounded-full font-medium text-lg transition-colors shadow-lg"
              >
                Shop Plants <ArrowRight className="h-5 w-5" />
              </Link>
              <Link 
                to="/care" 
                className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 border border-white/50 text-white px-8 py-4 rounded-full font-medium text-lg transition-colors backdrop-blur-sm"
              >
                Care Guide <Info className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Scroll</span>
          <div className="w-5 h-8 border border-white/50 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-1 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Categories & Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-medium text-gray-900 mb-6">Our Collection</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeCategory === category
                      ? "bg-green-700 text-white shadow-md shadow-green-900/20"
                      : "bg-white text-gray-600 hover:bg-green-50 border border-gray-200 hover:border-green-200"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gray-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Actions on Hover */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <Link
                      to="/shop"
                      className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-green-50 hover:text-green-700 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300"
                      title="View Details"
                    >
                      <Info className="h-5 w-5" />
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="w-12 h-12 bg-green-700 text-white rounded-full flex items-center justify-center hover:bg-green-800 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                      title="Add to Cart"
                    >
                      <ShoppingCart className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.benefits.slice(0, 1).map(benefit => (
                      <span key={benefit} className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1.5 rounded-full text-gray-900 shadow-sm">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 px-1">
                  <div className="flex justify-between items-start mb-1">
                    <Link to={`/shop`} className="font-serif text-xl font-medium text-gray-900 hover:text-green-700 transition-colors">
                      {product.name}
                    </Link>
                    <span className="font-medium text-gray-900">${product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>Care: {product.careLevel}</span>
                    <span>•</span>
                    <span>{product.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/shop" className="inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-800 transition-colors text-lg">
              View All Plants <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#f2fcf5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-10 rounded-3xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100/50">
              <div className="bg-[#dcfce7] p-5 rounded-full mb-6 text-[#166534]">
                <ShieldCheck className="h-8 w-8" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-medium text-[#0f172a] mb-4">Guaranteed Healthy</h3>
              <p className="text-[#64748b] leading-relaxed">Every plant is carefully inspected and guaranteed to arrive happy and healthy.</p>
            </div>
            <div className="flex flex-col items-center p-10 rounded-3xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100/50">
              <div className="bg-[#dcfce7] p-5 rounded-full mb-6 text-[#166534]">
                <Droplets className="h-8 w-8" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-medium text-[#0f172a] mb-4">Expert Care Guides</h3>
              <p className="text-[#64748b] leading-relaxed">Get detailed instructions and tips to help your new green friends thrive.</p>
            </div>
            <div className="flex flex-col items-center p-10 rounded-3xl bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_12px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 border border-gray-100/50">
              <div className="bg-[#dcfce7] p-5 rounded-full mb-6 text-[#166534]">
                <Sun className="h-8 w-8" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-medium text-[#0f172a] mb-4">Perfect Match</h3>
              <p className="text-[#64748b] leading-relaxed">Find the right plant for your space based on lighting and experience level.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
