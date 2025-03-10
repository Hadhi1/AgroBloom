import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, Package2, HeadphonesIcon, Sprout, Leaf, Droplets, PenTool as Tool, Star, ChevronRight } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import CategoryCard from './components/CategoryCard';
import Cart from './components/Cart';
import WishlistPanel from './components/WishlistPanel';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'learn' | 'account'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const featuredProducts = [
    {
      id: 1,
      name: "Organic Plant Growth Booster",
      price: 2499,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1615477081663-8e8b1d588052?auto=format&fit=crop&q=80&w=400",
      description: "100% organic fertilizer for enhanced plant growth"
    },
    {
      id: 2,
      name: "Premium NPK Fertilizer",
      price: 3999,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1628944681206-2ee8d63b0a6b?auto=format&fit=crop&q=80&w=400",
      description: "Balanced nutrition for all crops"
    },
    {
      id: 3,
      name: "Bio-Enzyme Soil Enhancer",
      price: 2999,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=400",
      description: "Natural soil enhancement solution"
    }
  ];

  const allProducts = [
    ...featuredProducts,
    {
      id: 4,
      name: "Organic Pest Control Solution",
      price: 1999,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1592978562538-8c64c1ad4499?auto=format&fit=crop&q=80&w=400",
      description: "Natural pest control for healthy crops"
    },
    {
      id: 5,
      name: "Micronutrient Mix",
      price: 3499,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=400",
      description: "Complete micronutrient solution"
    }
  ];

  const categories = [
    { name: "Organic", icon: <Leaf className="w-6 h-6" />, count: 150 },
    { name: "Chemical", icon: <Droplets className="w-6 h-6" />, count: 200 },
    { name: "Bio-fertilizers", icon: <Sprout className="w-6 h-6" />, count: 80 },
    { name: "Tools", icon: <Tool className="w-6 h-6" />, count: 120 }
  ];

  const handleAddToCart = (product: any) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleAddToWishlist = (product: any) => {
    setWishlistItems(prev => {
      if (prev.find(item => item.id === product.id)) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setCurrentView('shop');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'shop':
        return (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">
              {selectedCategory ? `${selectedCategory} Products` : 'All Products'}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                  onAddToCart={() => handleAddToCart(product)}
                  onAddToWishlist={() => handleAddToWishlist(product)}
                  isWishlisted={wishlistItems.some(item => item.id === product.id)}
                />
              ))}
            </div>
          </div>
        );
      
      case 'learn':
        return (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Learning Resources</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Farming Guides</h2>
                <p className="text-gray-600 mb-4">Access comprehensive guides on modern farming techniques.</p>
                <button className="text-green-700 font-medium">Read More →</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Video Tutorials</h2>
                <p className="text-gray-600 mb-4">Watch expert demonstrations and tutorials.</p>
                <button className="text-green-700 font-medium">Watch Now →</button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Expert Consultation</h2>
                <p className="text-gray-600 mb-4">Connect with agricultural experts for personalized advice.</p>
                <button className="text-green-700 font-medium">Book Session →</button>
              </div>
            </div>
          </div>
        );

      case 'account':
        return (
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
              <h1 className="text-3xl font-bold mb-8">My Account</h1>
              <div className="space-y-6">
                <div className="border-b pb-4">
                  <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
                  <p className="text-gray-600">Please sign in to view your profile information.</p>
                  <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-800">
                    Sign In
                  </button>
                </div>
                <div className="border-b pb-4">
                  <h2 className="text-xl font-semibold mb-4">Order History</h2>
                  <p className="text-gray-600">Sign in to view your order history.</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-4">Saved Addresses</h2>
                  <p className="text-gray-600">Sign in to manage your delivery addresses.</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <>
            {/* Hero Section */}
            <div className="relative bg-green-700 text-white">
              <div className="container mx-auto px-4 py-16">
                <div className="max-w-2xl">
                  <h1 className="text-5xl font-bold mb-4">Growing Agriculture, Naturally!</h1>
                  <p className="text-xl mb-8">Discover premium fertilizers and agricultural supplies for your farming needs.</p>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setCurrentView('shop')}
                      className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
                    >
                      Shop Now
                    </button>
                    <button 
                      onClick={() => setCurrentView('learn')}
                      className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1628444285746-7696fb3c6614?auto=format&fit=crop&q=80"
                  alt="Farming"
                  className="object-cover h-full w-full rounded-tl-[100px]"
                />
              </div>
            </div>

            {/* Categories Section */}
            <section className="container mx-auto px-4 py-12">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Popular Categories</h2>
                <button 
                  onClick={() => setCurrentView('shop')}
                  className="text-green-700 flex items-center gap-1 hover:text-green-800"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                  <div key={index} onClick={() => handleCategoryClick(category.name)}>
                    <CategoryCard {...category} />
                  </div>
                ))}
              </div>
            </section>

            {/* Featured Products */}
            <section className="container mx-auto px-4 py-12">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Featured Products</h2>
                <button 
                  onClick={() => setCurrentView('shop')}
                  className="text-green-700 flex items-center gap-1 hover:text-green-800"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    {...product} 
                    onAddToCart={() => handleAddToCart(product)}
                    onAddToWishlist={() => handleAddToWishlist(product)}
                    isWishlisted={wishlistItems.some(item => item.id === product.id)}
                  />
                ))}
              </div>
            </section>

            {/* Features Section */}
            <section className="bg-white py-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Package2 className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Free Delivery</h3>
                      <p className="text-gray-600">On orders above ₹9,999</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Star className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Quality Products</h3>
                      <p className="text-gray-600">100% guaranteed</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <HeadphonesIcon className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">24/7 Support</h3>
                      <p className="text-gray-600">Expert assistance</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Sprout className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Eco-Friendly</h3>
                      <p className="text-gray-600">Sustainable products</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        cartItemsCount={cartItems.length}
        wishlistItemsCount={wishlistItems.length}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onAccountClick={() => setCurrentView('account')}
        onLogoClick={() => setCurrentView('home')}
      />
      
      {renderContent()}

      {/* Cart Sidebar */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={(id, quantity) => {
          setCartItems(prev => prev.map(item =>
            item.id === id ? { ...item, quantity } : item
          ).filter(item => item.quantity > 0));
        }}
      />

      {/* Wishlist Sidebar */}
      <WishlistPanel
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistItems}
        onRemoveFromWishlist={(id) => {
          setWishlistItems(prev => prev.filter(item => item.id !== id));
        }}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}

export default App;