import React from "react";
import { MdDone } from "react-icons/md";

const CorrectList = ({ text }) => {
  return (
    <div className=" mb-2">
      <div className="flex gap-2 items-center">
        <div className=" p-1 rounded-full bg-red-600">
          <MdDone className="text-white " size={12} />
        </div>
        <p className="font-semibold text-md">{text}</p>
      </div>
    </div>
  );
};

export default CorrectList;
