import React, { ReactNode } from "react";

interface HeaderActionsProps {
  children: ReactNode
}

function HeaderActionsContent({children}: HeaderActionsProps) {
  return (
    <div className="flex items-center space-x-4">
      {children}
    </div>
  );
}

export default HeaderActionsContent;
