import React, { ReactNode } from "react";
import { Product } from "../../types";

interface ProductCardContent {
  children: ReactNode;
  product: Product
}
function ProductCardContent({ children }: ProductCardContent) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
    //   onClick={() => onProductClick(product)}
    >
      {children}
    </div>
  );
}

export default ProductCardContent;
