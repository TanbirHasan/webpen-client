import React from "react";
import Title from "../components/Title";
import RangeList from "../components/RangeList";
import Button from "../components/buttons/Button";
import photo from "../components/images/skills.png";
import Container from "../components/Container";

const Skill = () => {
  return (
    <div className=" py-12">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="mx-auto max-w-xs ">
            <img src={photo} />
          </div>
          <div className="px-6">
            <Title
              title="Hello! We are Web Developer"
              tagLine="Crafting Digital Experiences, One Line of Code at a Time"
              paragraph="Expert web developers delivering innovative solutions. We create stunning websites with cutting-edge technologies."
            />
            <div className="mt-4">
              <RangeList name="Web Developement" skill={99} />
              <RangeList name="UI / UX Design" skill={95} />
              <RangeList name="SEO" skill={85} />
            </div>
            <Button className="mt-4" name="Read More" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
