import React from "react";
import hero from "../components/images/hero.png";
import Container from "../components/Container";
import Title from "../components/Title";
import CircleButton from "../components/buttons/CircleButton";
import Button from "../components/buttons/Button";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <Container>
        <div className="flex items-center justify-start h-screen">
          <div>
            <Title
              title="Hello! We are Web Developer"
              tagLine="Crafting Digital Experiences, One Line of Code at a Time"
              paragraph="Expert web developers delivering innovative solutions. We create stunning websites with cutting-edge technologies. Trust us to bring your vision to life and elevate your online presence"
              hero="yes"
            />
            <div className="flex gap-4 mt-4">
              <Button name="Explore Now" />
              <CircleButton name="Watch Video" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
