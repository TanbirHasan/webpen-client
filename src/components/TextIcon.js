import React from "react";

const TextIcon = ({ icon, text, des }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-xl text-red-600">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{text}</p>
        <p className="text-sm font-semibold">{des}</p>
      </div>
    </div>
  );
};

export default TextIcon;
