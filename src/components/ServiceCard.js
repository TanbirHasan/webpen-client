import React from "react";
import { MdDone } from "react-icons/md";

const ServiceCard = ({ title, paragraph }) => {
  return (
    <div className="bg-green-300 py-6 px-3 max-w-xs rounded-sm border-b-4 hover:border-red-600">
      <div className="flex items-center gap-2 mb-1">
        <MdDone className=" text-red-600" />
        <p className="text-md font-bold">{title}</p>
      </div>
      <p className=" text-sm text-gray-500">{paragraph}</p>
      <div className="flex items-center gap-1 mt-1">
        <div className="bg-red-600 w-4 h-[2px] rounded-full"></div>
        <p className="text-sm font-semibold text-red-600 hover:underline cursor-pointer">
          Read more
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
