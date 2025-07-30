import React from "react";
interface CardSizeProps {
  size: string;
}
function CardSize({ size }: CardSizeProps) {
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
    <span className="text-sm text-gray-600">Tamanho: {formatSize(size)}</span>
  );
}

export default CardSize;
