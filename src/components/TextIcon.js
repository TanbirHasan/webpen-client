import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const TextIcon = () => {
  return (
    <div className="flex gap-2 items-center">
      <div>
        <FiPhoneCall className=" text-red-600" size={18} />
      </div>
      <div>
        <p className="text-xs text-gray-500">Moblie no</p>
        <p className="text-sm font-semibold">01941743121</p>
      </div>
    </div>
  );
};

export default TextIcon;
