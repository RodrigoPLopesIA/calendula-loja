import React from "react";

interface Props {
    title: string
}
function FooterTitle({title}: Props) {
  return (
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
  );
}

export default FooterTitle;
