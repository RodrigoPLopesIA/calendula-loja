import { Product, Filters } from '../types';

export const filterProducts = (products: Product[], filters: Filters): Product[] => {
  return products.filter(product => {
    // Search filter
    if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }

    // Category filter
    if (filters.category !== 'Todas' && product.category !== filters.category) {
      return false;
    }

    // Price filter
    if (product.price < filters.minPrice || product.price > filters.maxPrice) {
      return false;
    }

    // Color filter
    if (filters.colors.length > 0) {
      const hasMatchingColor = filters.colors.some(color => 
        product.colors.includes(color)
      );
      if (!hasMatchingColor) {
        return false;
      }
    }

    // Size filter
    if (filters.sizes.length > 0) {
      const productSizes = product.size.split('/');
      const hasMatchingSize = filters.sizes.some(size => 
        productSizes.includes(size)
      );
      if (!hasMatchingSize) {
        return false;
      }
    }

    return true;
  });
};