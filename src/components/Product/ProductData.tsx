import React from "react";
import { ProductCard } from "./ProductCard";
import { Product as ProductType} from "../../types";
import { Product } from "./Index";

interface ProductGridProps {
  products: ProductType[];
  onProductClick: (product: ProductType) => void;
}

export const ProductContent: React.FC<ProductGridProps> = ({
  products,
  onProductClick,
}) => {
  if (products.length === 0) {
    return (
      <Product.Error>
        <Product.ErrorImage />
        <Product.ErrorTitle title="Desculpe" />
        <Product.ErrorMessage message="Produto não encontrado." />
      </Product.Error>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onProductClick={onProductClick}
        />
      ))}
    </div>
  );
};
