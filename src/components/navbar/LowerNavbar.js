import React, { useState, useEffect } from "react";
import { TbPhoneCalling } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

const LowerNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 765) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="top">
      <div className=" flex border-2 border-gray-200 ">
        <div className="bg-red-600 md:w-3/4  flex items-center justify-between py-2 px-4">
          <nav className=" gap-6 hidden md:flex">
            <div className=" hover:border-b-2 border-b-2 text-gray-100 hover:text-white border-red-600 hover:border-white py-1 cursor-pointer">
              <Link to="/">Home</Link>
            </div>
            <div className=" hover:border-b-2 border-b-2 text-gray-100 hover:text-white border-red-600 hover:border-white py-1 cursor-pointer">
              <Link to="/company">Company</Link>
            </div>
            <div className=" hover:border-b-2 border-b-2 text-gray-100 hover:text-white border-red-600 hover:border-white py-1 cursor-pointer">
              <Link to="/services">Services</Link>
            </div>
            <div className=" hover:border-b-2 border-b-2 text-gray-100 hover:text-white border-red-600 hover:border-white py-1 cursor-pointer">
              <Link to="/it-solution">IT Solution</Link>
            </div>
            <div className=" hover:border-b-2 border-b-2 text-gray-100 hover:text-white border-red-600 hover:border-white py-1 cursor-pointer">
              <Link to="/blog">Blog</Link>
            </div>
            <div className=" hover:border-b-2 border-b-2 text-gray-100 hover:text-white border-red-600 hover:border-white py-1 cursor-pointer">
              <Link to="/contact">Contact</Link>
            </div>
          </nav>
          <p className="text-white hidden md:block">
            <AiOutlineSearch />
          </p>
          <p
            className="text-white md:hidden cursor-pointer  p-1 rounded-md hover:drop-shadow-md border-2"
            onClick={toggleNavbar}
          >
            {open ? <CgClose /> : <HiMenu />}
          </p>
        </div>
        <div className="md:w-1/4 flex items-center bg-white justify-center gap-2 mx-auto">
          <div className="text-xl text-red-600">
            <TbPhoneCalling />
          </div>
          <p className="text-md font-semibold">+8801941743121</p>
        </div>
      </div>
      {open && (
        <div className=" shadow-md max-w-md">
          <div
            onClick={() => setOpen(false)}
            className=" hover:bg-red-600 hover:text-white py-2 px-4 cursor-pointer"
          >
            <Link to="/">Home</Link>
          </div>
          <div
            onClick={() => setOpen(false)}
            className=" hover:bg-red-600 hover:text-white py-2 px-4 cursor-pointer"
          >
            <Link to="/company">Company</Link>
          </div>
          <div
            onClick={() => setOpen(false)}
            className=" hover:bg-red-600 hover:text-white py-2 px-4 cursor-pointer"
          >
            <Link to="/services">Services</Link>
          </div>
          <div
            onClick={() => setOpen(false)}
            className=" hover:bg-red-600 hover:text-white py-2 px-4 cursor-pointer"
          >
            <Link to="/it-solution">IT Solution</Link>
          </div>
          <div
            onClick={() => setOpen(false)}
            className=" hover:bg-red-600 hover:text-white py-2 px-4 cursor-pointer"
          >
            <Link to="/blog">Blog</Link>
          </div>
          <div
            onClick={() => setOpen(false)}
            className=" hover:bg-red-600 hover:text-white py-2 px-4 cursor-pointer"
          >
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LowerNavbar;
