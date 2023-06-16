import React from "react";
import TextIcon from "../TextIcon";
import { TbPhoneCalling } from "react-icons/tb";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TfiLocationPin } from "react-icons/tfi";

import logo from "../../components/images/logo.png";
import logotext from "../../components/images/logotextss.png";

const UpperNavbar = () => {
  return (
    <div className=" bg-white py-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={logo} width="32px" height="32px" alt="logo" />
          <p className="ml-1 hidden xs:block">
            <img src={logotext} width="80px" height="32px" alt="logo" />
          </p>
        </div>
        <div className="flex gap-7">
          <TextIcon
            icon={<TbPhoneCalling />}
            text="Requesting a Call"
            des="01941743121"
          />
          <TextIcon
            icon={<AiOutlineClockCircle />}
            text="Opening Hrs"
            des="24/7"
          />
          {/* <TextIcon
            icon={<TfiLocationPin />}
            text="Visit Our office"
            des="Khilgaon,Dhaka"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
