import React from "react";
import Title from "../components/Title";
import CorrectList from "../components/CorrectList";
import Button from "../components/buttons/Button";
import photo from "../components/images/about.png";
import Container from "../components/Container";

const About = () => {
  return (
    <div className=" py-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className=" max-w-xs mx-auto">
            <img src={photo} />
          </div>
          <div className="px-6">
            <Title
              title="Hello! We are Web Developer"
              tagLine="Crafting Digital Experiences, One Line of Code at a Time"
              paragraph="Expert web developers delivering innovative solutions. We create stunning websites with cutting-edge technologies."
            />
            <div className="mt-4">
              <CorrectList text="We provide best web solution" />
              <CorrectList text="We provide best web solution" />
              <CorrectList text="We provide best web solution" />
              <CorrectList text="We provide best web solution" />
              <CorrectList text="We provide best web solution" />
            </div>
            <Button className="mt-4" name="About Us" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
