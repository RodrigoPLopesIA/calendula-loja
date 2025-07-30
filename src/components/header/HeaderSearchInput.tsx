import { ElementType } from "react";

interface HeaderSearchInputProps {
    icon: ElementType
    handleSearchChange: (e: string) => void
}

function HeaderSearchInput({icon: Icon, handleSearchChange}: HeaderSearchInputProps) {
  return (
    <div className="hidden md:block md:flex-1 md:max-w-lg md:mx-8 ">
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Pesquisar produtos..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200"
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default HeaderSearchInput;
