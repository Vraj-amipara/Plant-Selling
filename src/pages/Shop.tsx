import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Search, Info, X, CheckCircle2, Leaf } from 'lucide-react';
import { products, categories, Product } from '../data/products';
import { useCart } from '../store/CartContext';
import { cn } from '../lib/utils';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pb-12">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-green-900 text-white overflow-hidden mb-12">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://i0.wp.com/mrplantgeek.com/wp-content/uploads/2023/05/houseplants-that-like-shade.jpg?fit=1000%2C500&ssl=1" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">Shop Plants</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Discover our collection of beautiful, healthy plants to bring life to your space.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
          {/* Categories */}
          <div className="w-full lg:flex-1 overflow-hidden">
            <div className="flex overflow-x-auto pb-3 gap-3 custom-scrollbar">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200",
                    activeCategory === category
                      ? "bg-[#008a3e] text-white shadow-sm"
                      : "bg-white text-[#334155] hover:border-[#008a3e] border border-[#e2e8f0]"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search plants..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 border border-[#e2e8f0] rounded-full focus:ring-2 focus:ring-[#008a3e] focus:border-transparent outline-none transition-all text-[#334155] placeholder:text-[#94a3b8] shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
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
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-12 h-12 bg-white text-gray-900 rounded-full flex items-center justify-center hover:bg-green-50 hover:text-green-700 transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300"
                    title="View Details"
                  >
                    <Info className="h-5 w-5" />
                  </button>
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
                  <h3 className="font-serif text-xl font-medium text-gray-900 group-hover:text-green-700 transition-colors">{product.name}</h3>
                  <span className="font-medium text-gray-900">${product.price}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span>Care: {product.careLevel}</span>
                  <span>•</span>
                  <span>{product.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No plants found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter.</p>
            <button 
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-6 text-green-600 font-medium hover:text-green-700"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row z-10"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 hover:text-gray-900 hover:bg-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="w-full md:w-1/2 h-64 md:h-auto bg-gray-100">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-10 overflow-y-auto">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-green-700 bg-green-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {selectedProduct.category}
                  </span>
                  <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Care: {selectedProduct.careLevel}
                  </span>
                </div>
                
                <h2 className="text-3xl font-serif font-medium text-gray-900 mb-2">{selectedProduct.name}</h2>
                <p className="text-2xl font-medium text-green-700 mb-6">${selectedProduct.price}</p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">About this plant</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Key Benefits</h3>
                    <ul className="space-y-2">
                      {selectedProduct.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600">
                          <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <button
                    onClick={() => {
                      addToCart(selectedProduct);
                      setSelectedProduct(null);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-4 rounded-full font-medium text-lg transition-colors shadow-sm"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart - ${selectedProduct.price}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
