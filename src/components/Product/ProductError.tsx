import React, { ReactNode } from "react";
interface ProductErrorProps {
    children: ReactNode
}
function ProductError({children}: ProductErrorProps) {
  return (
    <div className="flex flex-col w-full items-center justify-center py-16 text-center">
        {children}
    </div>
  );
}

export default ProductError;
