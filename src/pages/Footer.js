import React from "react";

import logo from "../components/images/WEBPEN.png";
import { FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white ">
      <div class="container mx-auto py-8 px-4">
        <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  ">
          <div class="footer-column mx-auto">
            <div className=" w-32 h-12 bg-white mx-auto rounded-lg ">
              <img src={logo} width="120px" height="64px" alt="logo" />
            </div>

            <ul class="list-none mx-auto">
              <p className=" text-sm mt-4 text-center"> We are web developer</p>
              <div className="flex items-center mt-4">
                <p className="mr-2 text-sm">Follow Us:</p>
                <div className="flex space-x-2">
                  <div className=" hover:text-red-500 transition-colors cursor-pointer">
                    <FaFacebook />
                  </div>
                  <div className=" hover:text-red-500 transition-colors cursor-pointer">
                    <FaLinkedin />
                  </div>
                  <div className=" hover:text-red-500 transition-colors cursor-pointer">
                    <FaWhatsapp />
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div class="footer-column mx-auto">
            <h3 class="text-xl font-bold mb-4">Our Services</h3>
            <ul class="list-none flex flex-col gap-3">
              <div className="flex items-center gap-2 group transition-colors cursor-pointer hover:text-red-500">
                <div className="w-3 h-[2px] bg-white rounded-lg group-hover:bg-red-600"></div>
                <p className="text-sm">Web Application</p>
              </div>
              <div className="flex items-center gap-2 group transition-colors cursor-pointer hover:text-red-500">
                <div className="w-3 h-[2px] bg-white rounded-lg group-hover:bg-red-600"></div>
                <p className="text-sm">Social Marketing</p>
              </div>
              <div className="flex items-center gap-2 group transition-colors cursor-pointer hover:text-red-500">
                <div className="w-3 h-[2px] bg-white rounded-lg group-hover:bg-red-600"></div>
                <p className="text-sm">Product Selling</p>
              </div>
              <div className="flex items-center gap-2 group transition-colors cursor-pointer hover:text-red-500">
                <div className="w-3 h-[2px] bg-white rounded-lg group-hover:bg-red-600"></div>
                <p className="text-sm">Product Design</p>
              </div>
            </ul>
          </div>
          <div class="footer-column mx-auto">
            <h3 class="text-xl font-bold mb-4">Company Address</h3>
            <ul class="list-none">
              <p className=" text-sm mt-4"> We are Online now</p>
              <p className=" text-sm mt-4">
                {" "}
                <span className="font-bold">Email : </span> webpen@gmail.com
              </p>
              <p className=" text-sm mt-4">
                {" "}
                <span className="font-bold">Phone : </span> +8801941743121
              </p>
            </ul>
          </div>
          <div class="footer-column mx-auto">
            <h3 class="text-xl font-bold mb-4 text-center">Popular Posts</h3>
            <ul class="list-none">
              <div className="flex gap-2 items-start">
                <img
                  className="rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqaFS1JQE-7jh3j1S8ACLrTH1qcuvD-s_NV2DB9v3sLU4wvtRYyMTvNsfQg_6CEmxTUaE&usqp=CAU"
                  height="32px"
                  width="64px"
                ></img>
                <p className=" text-sm ">
                  We design your product with latest tool
                </p>
              </div>
              <div className="flex gap-2 items-start mt-4">
                <img
                  className="rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqaFS1JQE-7jh3j1S8ACLrTH1qcuvD-s_NV2DB9v3sLU4wvtRYyMTvNsfQg_6CEmxTUaE&usqp=CAU"
                  height="32px"
                  width="64px"
                ></img>
                <p className=" text-sm ">We develop best web application</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
