import React from "react";
import Button from "../components/buttons/Button";

const ExperienceCard = () => {
  return (
    <div className="relative  py-6 px-3 max-w-sm mx-auto rounded-sm border-b-4 hover:border-red-600">
      <div className=" w-64 h-64 overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://a0.muscache.com/im/pictures/miso/Hosting-742424658135898180/original/ef5464ea-5eb8-426a-a097-a4ed7a395610.jpeg?im_w=960"
          alt="Card"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full backdrop-filter backdrop-blur-[2px]  flex justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100">
          <Button name="Preview" />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
