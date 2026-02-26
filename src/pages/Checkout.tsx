import { useState } from 'react';
import { useCart } from '../store/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export default function Checkout() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-stone-50 py-20 flex flex-col items-center justify-center px-4">
        <div className="bg-white p-10 rounded-3xl shadow-sm text-center max-w-md w-full">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-16 w-16 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-serif font-medium text-stone-900 mb-4">Order Confirmed!</h2>
          <p className="text-stone-600 mb-8">Thank you for your purchase. Your new green friends will be on their way soon.</p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center w-full bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 py-20 flex flex-col items-center justify-center px-4">
        <div className="bg-white p-10 rounded-3xl shadow-sm text-center max-w-md w-full">
          <h2 className="text-2xl font-serif font-medium text-stone-900 mb-4">Your cart is empty</h2>
          <p className="text-stone-500 mb-8">Please add items to your cart before checking out.</p>
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
        <div className="mb-8">
          <Link to="/cart" className="inline-flex items-center gap-2 text-stone-500 hover:text-emerald-700 transition-colors font-medium">
            <ArrowLeft className="h-4 w-4" /> Back to Cart
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Checkout Form */}
          <div className="flex-1">
            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-serif font-medium text-stone-900 mb-8">Checkout</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Info */}
                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email address</label>
                      <input type="email" id="email" required className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                </div>

                {/* Shipping Info */}
                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-4">Shipping Address</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-1">First name</label>
                      <input type="text" id="firstName" required className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-1">Last name</label>
                      <input type="text" id="lastName" required className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-stone-700 mb-1">Address</label>
                      <input type="text" id="address" required className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-stone-700 mb-1">City</label>
                      <input type="text" id="city" required className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-stone-700 mb-1">ZIP / Postal code</label>
                      <input type="text" id="zip" required className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div>
                  <h3 className="text-lg font-medium text-stone-900 mb-4">Payment Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardName" className="block text-sm font-medium text-stone-700 mb-1">Name on card</label>
                      <input type="text" id="cardName" required className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-stone-700 mb-1">Card number</label>
                      <input type="text" id="cardNumber" required placeholder="0000 0000 0000 0000" className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expDate" className="block text-sm font-medium text-stone-700 mb-1">Expiration date</label>
                        <input type="text" id="expDate" required placeholder="MM/YY" className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label htmlFor="cvc" className="block text-sm font-medium text-stone-700 mb-1">CVC</label>
                        <input type="text" id="cvc" required placeholder="123" className="w-full px-4 py-2 border border-stone-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" />
                      </div>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-4 rounded-full font-medium text-lg transition-colors shadow-sm"
                >
                  Pay ${(totalPrice + 10).toFixed(2)}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white p-8 rounded-3xl shadow-sm sticky top-24">
              <h2 className="text-xl font-medium text-stone-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6 border-b border-stone-100 pb-6">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 shrink-0 rounded-lg overflow-hidden bg-stone-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-stone-900 line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-stone-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-medium text-stone-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4 text-sm text-stone-600 mb-6 border-b border-stone-100 pb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-stone-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-stone-900">$10.00</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-stone-900">Total</span>
                <span className="text-2xl font-medium text-emerald-700">${(totalPrice + 10).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
