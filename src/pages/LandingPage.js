import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Services from "./Services";
import Skill from "./Skill";
import Experience from "./Experience";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="relative">
      <div className="absolute z-1 -top-6 w-full">
        <HeroSection />
        <About />
        <Services />
        <Skill />
        <Experience />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
