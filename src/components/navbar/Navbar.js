import React from "react";
import Container from "../Container";
import LowerNavbar from "./LowerNavbar";
import UpperNavbar from "./UpperNavbar";

const Navbar = () => {
  return (
    <div className="relative  z-10">
      <Container>
        <UpperNavbar />
        <LowerNavbar />
      </Container>
    </div>
  );
};

export default Navbar;
