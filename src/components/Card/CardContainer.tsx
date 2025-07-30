import React, { ReactNode } from "react";

interface CardContainerProps {
  children: ReactNode;
}
function CardContainer({ children }: CardContainerProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
    >
      {children}
    </div>
  );
}

export default CardContainer;
