import React, { ElementType } from "react";

interface ProductCardImageAction {
    icon: ElementType,
    favorite: () => void
}

export default function ButtonFloatFavorite({icon: Icon, favorite}: ProductCardImageAction) {


  return (
    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" onClick={favorite}>
      <button className="p-2 bg-gold rounded-full shadow-md hover:bg-gold-hover transition-colors">
        <Icon className="h-5 w-5 text-white" />
      </button>
    </div>
  );
}
