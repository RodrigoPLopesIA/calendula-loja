import React from "react";

interface CardPriceProps {
    price: number
}
function CardPrice({price}: CardPriceProps) {
  return (
    <span className="text-lg font-bold text-gold">
      R$ {price.toFixed(2).replace(".", ",")}
    </span>
  );
}

export default CardPrice;
