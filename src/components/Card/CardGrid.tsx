import React, { ReactNode } from "react";

interface ProductRootProps {
  children: ReactNode;
}

function ProductGrid({ children }: ProductRootProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {children}
    </div>
  );
}

export default ProductGrid;
