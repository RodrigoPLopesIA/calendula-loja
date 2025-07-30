import React from "react";

interface ErrorMessageProps {
    message: string
}
function ErrorMessage({message}: ErrorMessageProps) {
  return (
    <p className="text-gray-600">
      {message}
    </p>
  );
}

export default ErrorMessage;
