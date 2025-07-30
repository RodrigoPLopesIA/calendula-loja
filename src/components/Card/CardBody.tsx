import React, { ReactNode } from "react";

interface CardBodyProps {
  children: ReactNode;
}
function CardBody({ children }: CardBodyProps) {
  return <div className="p-4">{children}</div>;
}

export default CardBody;
