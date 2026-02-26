import { useCart } from '../store/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 py-20 flex flex-col items-center justify-center px-4">
        <div className="bg-white p-10 rounded-3xl shadow-sm text-center max-w-md w-full">
          <h2 className="text-2xl font-serif font-medium text-stone-900 mb-4">Your cart is empty</h2>
          <p className="text-stone-500 mb-8">Looks like you haven't added any plants to your cart yet.</p>
          <Link 
            to="/shop" 
            className="inline-flex items-center justify-center w-full bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-medium text-stone-900 mb-8">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center gap-6">
                <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-stone-100">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-medium text-stone-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-stone-500 mb-4">{item.category}</p>
                  <div className="flex items-center justify-center sm:justify-start gap-4">
                    <div className="flex items-center border border-stone-200 rounded-full">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-stone-500 hover:text-emerald-600 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium text-stone-900">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-stone-500 hover:text-emerald-600 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-stone-400 hover:text-red-500 transition-colors p-2"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="text-xl font-medium text-emerald-700">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white p-8 rounded-3xl shadow-sm sticky top-24">
              <h2 className="text-xl font-medium text-stone-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm text-stone-600 mb-6 border-b border-stone-100 pb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-stone-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-stone-900">Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="font-medium text-stone-900">Calculated at checkout</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-medium text-stone-900">Total</span>
                <span className="text-2xl font-medium text-emerald-700">${totalPrice.toFixed(2)}</span>
              </div>
              
              <Link 
                to="/checkout" 
                className="flex items-center justify-center gap-2 w-full bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-4 rounded-full font-medium transition-colors"
              >
                Proceed to Checkout <ArrowRight className="h-4 w-4" />
              </Link>
              
              <div className="mt-6 text-center">
                <Link to="/shop" className="text-sm font-medium text-emerald-600 hover:text-emerald-700 transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
