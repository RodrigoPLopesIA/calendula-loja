import React from "react";
interface CardTitleProps {
  title: string;
}
function CardTitle({ title }: CardTitleProps) {
  return <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>;
}

export default CardTitle;
