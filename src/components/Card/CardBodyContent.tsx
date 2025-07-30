import React, { ReactNode } from "react";
interface CardBodyContentProps {
  children: ReactNode
}
function CardBodyContent({ children }: CardBodyContentProps) {
  
  return (
    <div className="flex flex-col justi items-baseline mb-2">

      {children}
    </div>
  );
}

export default CardBodyContent;
