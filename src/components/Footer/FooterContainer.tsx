import React, { ReactNode } from "react";

interface FooterProps {
    children: ReactNode
}

function FooterContainer({children}: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </div>
    </footer>
  );
}

export default FooterContainer;
