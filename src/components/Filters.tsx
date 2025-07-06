import React from 'react';
import { Filter, X } from 'lucide-react';
import { Filters as FiltersType } from '../types';
import { categories, allColors, allSizes } from '../data/products';

interface FiltersProps {
  filters: FiltersType;
  onFiltersChange: (filters: FiltersType) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const Filters: React.FC<FiltersProps> = ({ 
  filters, 
  onFiltersChange, 
  isOpen, 
  onToggle 
}) => {
  const handleColorToggle = (color: string) => {
    const newColors = filters.colors.includes(color)
      ? filters.colors.filter(c => c !== color)
      : [...filters.colors, color];
    onFiltersChange({ ...filters, colors: newColors });
  };

  const handleSizeToggle = (size: string) => {
    const newSizes = filters.sizes.includes(size)
      ? filters.sizes.filter(s => s !== size)
      : [...filters.sizes, size];
    onFiltersChange({ ...filters, sizes: newSizes });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: '',
      minPrice: 0,
      maxPrice: 200,
      colors: [],
      sizes: [],
      category: 'Todas'
    });
  };

  const formatSizeDisplay = (size: string) => {
    if (size.includes('x')) {
      return size + ' cm';
    }
    return size + 'cm';
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <button
        onClick={onToggle}
        className="lg:hidden fixed bottom-4 right-4 bg-gold text-white p-3 rounded-full shadow-lg z-50 hover:bg-gold transition-colors"
      >
        <Filter className="h-6 w-6" />
      </button>

      {/* Filter Panel */}
      <div className={`
        fixed lg:static inset-0 bg-white lg:bg-transparent z-40 lg:z-auto
        transform transition-transform duration-300 lg:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:w-64 lg:flex-shrink-0 overflow-y-auto
      `}>
        <div className="p-6 lg:p-4 space-y-6">
          <div className="flex justify-between items-center lg:hidden">
            <h2 className="text-xl font-bold text-gray-900">Filtros</h2>
            <button onClick={onToggle} className="p-2 rounded-full hover:bg-gray-100">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="hidden lg:block">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Filtros</h2>
          </div>

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Categoria</h3>
            <select
              value={filters.category}
              onChange={(e) => onFiltersChange({ ...filters, category: e.target.value })}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Preço</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-600">De:</label>
                <input
                  type="number"
                  value={filters.minPrice}
                  onChange={(e) => onFiltersChange({ ...filters, minPrice: Number(e.target.value) })}
                  className="flex-1 p-2 w-28 border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                  min="0"
                />
              </div>
              <div className="flex items-center space-x-2">
                <label className="text-sm text-gray-600">Até:</label>
                <input
                  type="number"
                  value={filters.maxPrice}
                  onChange={(e) => onFiltersChange({ ...filters, maxPrice: Number(e.target.value) })}
                  className="flex-1 p-2 w-28  border border-gray-300 rounded-md focus:ring-2 focus:ring-gold focus:border-transparent"
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Colors Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Cores</h3>
            <div className="grid grid-cols-2 gap-2">
              {allColors.map(color => (
                <button
                  key={color}
                  onClick={() => handleColorToggle(color)}
                  className={`
                    text-sm px-3 py-2 rounded-full border transition-all duration-200
                    ${filters.colors.includes(color)
                      ? 'bg-gold text-white border-gold'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gold'
                    }
                  `}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Sizes Filter */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">Tamanhos</h3>
            <div className="grid grid-cols-3 gap-2">
              {allSizes.map(size => (
                <button
                  key={size}
                  onClick={() => handleSizeToggle(size)}
                  className={`
                    text-xs px-2 py-2 rounded-md border transition-all duration-200
                    ${filters.sizes.includes(size)
                      ? 'bg-gold text-white border-gold'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gold'
                    }
                  `}
                >
                  {formatSizeDisplay(size)}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              * Medidas em centímetros
            </p>
          </div>

          {/* Clear Filters */}
          <button
            onClick={clearFilters}
            className="w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Limpar Filtros
          </button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
};