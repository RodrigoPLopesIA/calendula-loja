import React, { ElementType } from "react";
interface HeaderActionProps {
  icon: ElementType;
}
function HeaderAction({ icon: Icon }: HeaderActionProps) {
  return (
    <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
      <Icon className="h-6 w-6 text-gray-600" />
    </button>
  );
}

export default HeaderAction;
