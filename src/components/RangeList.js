import React from "react";

const RangeList = ({ name, skill }) => {
  return (
    <div className="max-w-md pr-6">
      <div className=" mb-2">
        <div className=" text-md">{name}</div>
        <div className=" bg-gray-300 h-1 rounded-full relative">
          <div
            className="h-full bg-red-600 rounded-full"
            style={{ width: `${skill}%` }}
          ></div>
          <div
            className="absolute right-0 -top-4 h-full flex items-center pr-2 -ml-3"
            style={{ left: `${skill}%` }}
          >
            <span className="text-xs text-gray-500 font-bold">{`${skill}%`}</span>
          </div>
          <div
            style={{ left: `${skill}%` }}
            className="absolute -top-[2px]  w-2 h-2 bg-white ring-1 ring-red-600 rounded-full -ml-2 "
          ></div>
        </div>
      </div>
    </div>
  );
};

export default RangeList;
