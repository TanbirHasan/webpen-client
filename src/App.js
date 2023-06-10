import React from "react";
import Button from "./components/buttons/Button";
import Title from "./components/Title";
import CorrectList from "./components/CorrectList";
import RangeList from "./components/RangeList";
import TextIcon from "./components/TextIcon";
import ServiceCard from "./components/ServiceCard";
import CircleButton from "./components/buttons/CircleButton";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Button name={"Login"} />
      <Title
        title={"We are Web Developer"}
        tagLine={"We make your business more profitable"}
        paragraph={
          " We are a leading web development company, specializing in creating innovative and responsive websites that deliver exceptional user experiences. "
        }
      />
      <CorrectList text={"We work breand, business and teams"} />
      <CorrectList text={"We work breand, business and teams"} />
      <CorrectList text={"We work breand, business and teams"} />
      <CorrectList text={"We work breand, business and teams"} />
      <RangeList skill={75} />
      <RangeList skill={85} />
      <RangeList skill={92} />
      <RangeList skill={100} />
      <TextIcon />
      <ServiceCard
        title={"App Developement"}
        paragraph={
          "We provide best solution within your budget and also within your time"
        }
      />
      <CircleButton name={"Watch video"} />
    </div>
  );
};

export default App;
