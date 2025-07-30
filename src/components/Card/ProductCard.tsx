import React from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "../../types";

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onProductClick,
}) => {
  const formatSize = (size: string) => {
    if (size.includes("x")) {
      return size + " cm";
    }
    return size
      .split("/")
      .map((s) => s + "cm")
      .join(" / ");
  };

  return (
    <>
      


        
        
        
        
    </>
  );
};
