import React from "react";
interface CardColorsProps {
  colors: string[];
}
function CardColors({ colors }: CardColorsProps) {
  return (
    <div className="flex flex-wrap gap-1 mb-3">
      {colors.slice(0, 4).map((color) => (
        <span
          key={color}
          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
        >
          {color}
        </span>
      ))}
      {colors.length > 4 && (
        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
          +{colors.length - 4}
        </span>
      )}
    </div>
  );
}

export default CardColors;
