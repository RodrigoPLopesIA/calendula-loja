import React, { ReactNode } from "react";


interface NotificationRootProps {
    children: ReactNode
}
function NotificationRoot({children}: NotificationRootProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            {children}
        </div>
      </div>
    </header>
  );
}

export default NotificationRoot;
