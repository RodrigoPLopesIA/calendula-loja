import React from "react";

interface ErrorTitleProps {
  title: string;
}
function ErrorTitle({ title }: ErrorTitleProps) {
  return <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>;
}

export default ErrorTitle;
