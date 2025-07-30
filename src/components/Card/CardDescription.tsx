import React from "react";

interface CardDescriptionProps {
    description: string
}
function CardDescription({description}: CardDescriptionProps) {
  return (
    <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
  );
}

export default CardDescription;
