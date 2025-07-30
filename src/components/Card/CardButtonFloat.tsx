import React, { ElementType } from "react";

interface ProductCardImageAction {
    icon: ElementType
}

export default function ButtonFloatAction({icon: Icon}: ProductCardImageAction) {
  return (
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <button className="p-2 bg-gold rounded-full shadow-md hover:bg-gold-hover transition-colors">
        <Icon className="h-5 w-5 text-white" />
      </button>
    </div>
  );
}
