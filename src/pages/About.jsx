import React from "react";
import Json from "../data/about.json";
import { useState } from "react";
const About = () => {
  const [about, setAbout] = useState(Json[0].portfolioData.description);

  return (
    <div className="flex flex-col h-screen w-full  justify-center items-center text-blue-500 font-bold text-4xl text-center">
      <h1>About</h1>
      <p>{about}</p>
    </div>
  );
};

export default About;
