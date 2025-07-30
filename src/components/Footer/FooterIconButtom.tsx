import React, { ElementType } from "react";

interface Props {
  text: string;
  icon: ElementType
}
function Button({ text, icon: Icon }: Props) {
  return (
    <a href="#" className="text-gray-400 hover:text-gray-500">
      <span className="sr-only">{text}</span>
      <Icon className="h-6 w-6"/>
      {/* <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z" />
      </svg> */}
    </a>
  );
}

export default Button;
