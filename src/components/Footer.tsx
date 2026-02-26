import { Link } from 'react-router-dom';
import { Leaf, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#023319] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-white">
              <Leaf className="h-6 w-6 text-[#00d084]" />
              <span className="font-serif text-2xl font-medium tracking-tight">Verdant Vibes</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-white/90">
              Grow Green. Live Clean. Bringing nature into your home with carefully curated plants and expert advice.
            </p>
            <div className="flex space-x-5 pt-2">
              <a href="#" className="text-white/90 hover:text-[#00d084] transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-white/90 hover:text-[#00d084] transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-white/90 hover:text-[#00d084] transition-colors"><Facebook className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6 text-lg">Shop</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/shop" className="text-white/90 hover:text-[#00d084] transition-colors">All Plants</Link></li>
              <li><Link to="/shop" className="text-white/90 hover:text-[#00d084] transition-colors">Indoor Plants</Link></li>
              <li><Link to="/shop" className="text-white/90 hover:text-[#00d084] transition-colors">Succulents</Link></li>
              <li><Link to="/shop" className="text-white/90 hover:text-[#00d084] transition-colors">Pots & Planters</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6 text-lg">Help</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/care" className="text-white/90 hover:text-[#00d084] transition-colors">Plant Care Guide</Link></li>
              <li><Link to="/contact" className="text-white/90 hover:text-[#00d084] transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-white/90 hover:text-[#00d084] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-white/90 hover:text-[#00d084] transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-medium mb-6 text-lg">Newsletter</h3>
            <p className="text-sm mb-6 leading-relaxed text-white/90">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-[#0a4a2a] border border-transparent rounded-lg px-4 py-2.5 text-sm flex-1 focus:outline-none focus:border-[#00d084] focus:ring-1 focus:ring-[#00d084] text-white placeholder-white/50"
              />
              <button type="submit" className="bg-[#00d084] hover:bg-[#00b373] text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-[#0a4a2a] mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/80">
          <p>&copy; {new Date().getFullYear()} Verdant Vibes. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#00d084] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#00d084] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
