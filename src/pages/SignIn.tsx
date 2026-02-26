import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function SignIn() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-white pb-12">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-green-900 text-white overflow-hidden mb-12">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://i0.wp.com/mrplantgeek.com/wp-content/uploads/2023/05/houseplants-that-like-shade.jpg?fit=1000%2C500&ssl=1" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-medium mb-6">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            {isLogin ? 'Sign in to access your account and orders.' : 'Join Verdant Vibes to start your plant journey.'}
          </p>
        </div>
      </section>

      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-lg shadow-green-900/5">
          <div className="flex justify-center mb-8">
            <div className="bg-green-50 p-3 rounded-full">
              <Leaf className="h-8 w-8 text-green-600" />
            </div>
          </div>
          
          <h2 className="text-2xl font-serif font-medium text-gray-900 mb-6 text-center">
            {isLogin ? 'Sign in to your account' : 'Sign up for an account'}
          </h2>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input type="email" id="email" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" id="password" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all" placeholder="••••••••" />
            </div>
            
            {isLogin && (
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-green-600 hover:text-green-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
            )}

            <button type="submit" className="w-full bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-medium transition-colors">
              {isLogin ? 'Sign in' : 'Sign up'}
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setIsLogin(!isLogin)} 
                className="font-medium text-green-600 hover:text-green-500 transition-colors"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
