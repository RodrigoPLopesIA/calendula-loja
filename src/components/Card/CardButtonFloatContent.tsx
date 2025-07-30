import React, { ReactNode } from "react";

interface ProductImageActionsProps {
  children: ReactNode;
}
function ProductImageActions({ children }: ProductImageActionsProps) {
  return <div className="relative overflow-hidden group">{children}</div>;
}

export default ProductImageActions;
