import React from "react";

interface ProductCardImageProps {
    name: string, 
    image: string
}
function ProductCardImage({name, image}: ProductCardImageProps) {
  return (
    <img
      src={image}
      alt={name}
      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
    />
  );
}

export default ProductCardImage;
