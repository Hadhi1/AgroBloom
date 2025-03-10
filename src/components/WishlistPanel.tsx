import React from 'react';
import { X, ShoppingCart, Heart } from 'lucide-react';

interface WishlistPanelProps {
  isOpen: boolean;
  onClose: () => void;
  items: any[];
  onRemoveFromWishlist: (id: number) => void;
  onAddToCart: (product: any) => void;
}

const WishlistPanel: React.FC<WishlistPanelProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveFromWishlist,
  onAddToCart
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-6 bg-green-700 text-white">
              <h2 className="text-lg font-medium">Wishlist</h2>
              <button onClick={onClose}>
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-6 px-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <Heart className="w-16 h-16 mb-4" />
                  <p className="text-xl font-medium">Your wishlist is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center">
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                      <div className="ml-4 flex-1">
                        <h3 className="text-sm font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">₹{item.price.toLocaleString('en-IN')}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            className="text-sm text-red-600 hover:text-red-700"
                            onClick={() => onRemoveFromWishlist(item.id)}
                          >
                            Remove
                          </button>
                          <button
                            className="text-sm text-green-700 hover:text-green-800 flex items-center gap-1"
                            onClick={() => onAddToCart(item)}
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <button
                  type="button"
                  className="font-medium text-green-700 hover:text-green-800"
                  onClick={onClose}
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPanel;