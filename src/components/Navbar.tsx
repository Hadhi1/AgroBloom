import React from 'react';
import { Search, ShoppingCart, Heart, User, Menu } from 'lucide-react';

interface NavbarProps {
  cartItemsCount: number;
  wishlistItemsCount: number;
  onCartClick: () => void;
  onWishlistClick: () => void;
  onAccountClick: () => void;
  onLogoClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  cartItemsCount,
  wishlistItemsCount,
  onCartClick,
  onWishlistClick,
  onAccountClick,
  onLogoClick
}) => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <button 
              onClick={onLogoClick}
              className="text-2xl font-bold text-green-700 hover:text-green-800"
            >
              AgroBloom
            </button>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-green-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              className="flex items-center gap-2 hover:text-green-700 relative"
              onClick={onWishlistClick}
            >
              <Heart className="w-5 h-5" />
              <span>Wishlist</span>
              {wishlistItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItemsCount}
                </span>
              )}
            </button>
            <button 
              className="flex items-center gap-2 hover:text-green-700 relative"
              onClick={onCartClick}
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button 
              className="flex items-center gap-2 hover:text-green-700"
              onClick={onAccountClick}
            >
              <User className="w-5 h-5" />
              <span>Account</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;