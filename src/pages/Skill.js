import React from "react";
import Title from "../components/Title";
import RangeList from "../components/RangeList";
import Button from "../components/buttons/Button";
import photo from "../components/images/skills.png";
import Container from "../components/Container";

import bg from "../components/images/skillbg.png";

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
        <div
          className="my-12 py-6 bg-lightPink"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="flex justify-between px-4 flex-wrap gap-6">
            <div className=" text-center">
              <p className=" text-2xl font-bold text-red-600">4+</p>
              <h4 className=" font-bold text-sm">Years of Experience</h4>
            </div>
            <div className=" text-center">
              <p className=" text-2xl font-bold text-red-600">8+</p>
              <h4 className=" font-bold text-sm">Total Members</h4>
            </div>
            <div className=" text-center">
              <p className=" text-2xl font-bold text-red-600">132%</p>
              <h4 className=" font-bold text-sm">Fastest Growing </h4>
            </div>
            <div className=" text-center">
              <p className=" text-2xl font-bold text-red-600">28+</p>
              <h4 className=" font-bold text-sm">Complete Projects</h4>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
