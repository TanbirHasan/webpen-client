import React from "react";
import Container from "../components/Container";
import Title from "../components/Title";
import Button from "../components/buttons/Button";
import ServiceCard from "../components/ServiceCard";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <div className="py-16 bg-lightPink">
      <Container>
        <div className="flex justify-between items-center">
          <Title
            title="Hello! We are Web Developer"
            tagLine="Crafting Digital Experiences, One Line of Code at a Time"
            paragraph="Expert web developers delivering innovative solutions. We create stunning websites with cutting-edge technologies."
          />
          <Button name="All Services" />
        </div>
        <div
          className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 "
          style={{ gap: "1rem" }}
        >
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </Container>
    </div>
  );
};

export default Experience;
