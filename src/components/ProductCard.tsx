import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  description: string;
  onAddToCart: () => void;
  onAddToWishlist: () => void;
  isWishlisted: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  rating,
  image,
  description,
  onAddToCart,
  onAddToWishlist,
  isWishlisted
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image} alt={name} className="w-full h-48 object-cover" />
        <button 
          className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
          onClick={onAddToWishlist}
        >
          <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex items-center gap-1 mb-3">
          <Star className="w-4 h-4 fill-current text-yellow-400" />
          <span className="text-sm text-gray-600">{rating}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">₹{price.toLocaleString('en-IN')}</span>
          <button 
            className="bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-800 transition-colors"
            onClick={onAddToCart}
          >
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;