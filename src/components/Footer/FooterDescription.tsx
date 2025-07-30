import React from "react";

interface Props {
    description: string
}
function FooterDescription({description}: Props) {
  return (
    <p className="text-gray-600 mb-4">
      {description}
    </p>
  );
}

export default FooterDescription;
