import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

const FancyButton = ({ name, onClick, className }) => {
  return (
    <button
      className={`group hover:drop-shadow-lg hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 flex items-center px-4 py-2 text-white bg-gradient-to-r from-red-600 to-red-500 rounded-md shadow-lg   ${className}`}
      onClick={onClick}
    >
      <span className="mr-2 text-sm font-semibold">{name}</span>
      <AiOutlineDoubleRight className="text-xs transition-transform duration-300  group-hover:translate-x-1" />
    </button>
  );
};

export default FancyButton;
