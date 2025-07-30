import React, { ElementType } from "react";

interface ProductCardImageAction {
  icon: ElementType;
  seeDetails: () => void
}

export default function ButtonFloatDescribe({
  icon: Icon,
  seeDetails
}: ProductCardImageAction) {
  return (
    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="w-full bg-gold text-white py-2 px-4 rounded-full hover:bg-gold-hover transition-colors flex items-center justify-center space-x-2" onClick={seeDetails}>
        <Icon className="h-4 w-4" />
        <span>Ver Detalhes</span>
      </button>
    </div>
  );
}
