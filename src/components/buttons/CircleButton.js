import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";

const CircleButton = ({ name, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 font-semibold text-sm hover:underline"
    >
      <BsFillPlayCircleFill size={36} className="text-red-600" />
      <p>{name}</p>
    </button>
  );
};

export default CircleButton;
