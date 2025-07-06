import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onProductClick }) => {
  const formatSize = (size: string) => {
    if (size.includes('x')) {
      return size + ' cm';
    }
    return size.split('/').map(s => s + 'cm').join(' / ');
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
      onClick={() => onProductClick(product)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-rose-50 transition-colors">
            <Heart className="h-5 w-5 text-rose-500" />
          </button>
        </div>
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-full bg-gold text-white py-2 px-4 rounded-full hover:bg-gold-hover transition-colors flex items-center justify-center space-x-2">
            <ShoppingCart className="h-4 w-4" />
            <span>Ver Detalhes</span>
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Tamanho: {formatSize(product.size)}</span>
          <span className="text-lg font-bold text-rose-600">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {product.colors.slice(0, 4).map((color, index) => (
            <span 
              key={color}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {color}
            </span>
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
              +{product.colors.length - 4}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
      </div>
    </div>
  );
};