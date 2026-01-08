import React from "react";
import about from "../about.jpg";
import '../../App.css'

const About = () => {
  return (
    <div className="about-cont">
      <div>
      <img className="about-image" src={about} alt="about" />
      </div>
    <div className=" about-heading">
      <h1>About Us Of <br /> Continent Hotels</h1>
      <p>The Continent Hotels is ideally located in the heart of the city Beautiful.The Hotel understands the finest points of hospitality and luxury. Whether you need accommodation for Business or Pleasure, The Hotel has the perfect solution for you. Professional service with top of the line, Deluxe & Sweet with Contemporary furniture and tasteful decor to add your comfort. Looking for a great night’s sleep in a modern, accessible location? Continent Hotel has been a key landmark in the City. The newly build centre for comfort and hospitality is equipped with state-of-the-art luxuries.</p>
    </div>

    </div>
  );
};

export default About;
