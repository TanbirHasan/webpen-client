import React from "react";

const Title = ({ title, tagLine, paragraph }) => {
  return (
    <div className=" max-w-md">
      <div className="flex text-sm text-red-600 font-bold">
        <p className="">{title}</p>
        <div className="mt-2 ml-2">
          <div className=" mb-[1px] w-16 bg-red-600 h-[2px]"></div>
          <div className=" w-10 bg-red-600 h-[2px]"></div>
        </div>
      </div>
      <p className=" text-2xl font-bold my-1">{tagLine}</p>
      <p className="text-sm text-gray-500">{paragraph}</p>
    </div>
  );
};

export default Title;
