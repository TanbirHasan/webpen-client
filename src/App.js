import React from "react";
import Button from "./components/buttons/Button";
import Title from "./components/Title";
import CorrectList from "./components/CorrectList";
import RangeList from "./components/RangeList";
import TextIcon from "./components/TextIcon";
import ServiceCard from "./components/ServiceCard";
import CircleButton from "./components/buttons/CircleButton";
import Navbar from "./components/navbar/Navbar";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
