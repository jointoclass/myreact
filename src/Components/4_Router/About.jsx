import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const {id} = useParams();
  return (
    <div>
      <h1>About</h1>
      <p>{id}</p>
    </div>
  );
};

export default About;
