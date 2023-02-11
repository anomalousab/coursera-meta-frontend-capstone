import React from "react";
import images from "../db/images";
import "../styles/About.css";
const About = () => {
  //the component that describes the Little Lemon Chicago restaurant and gives a short backstory for it
  return (
    <>
      <section className="flex about" id="about">
        <div className="flex about-text-container">
          <div className="about-head-container">
            <h1 className="about-head">Little Lemon</h1>
            <h2 className="about-subhead">Chicago</h2>
          </div>

          <p className="about-desc">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
        </div>
        <div className="about-img-container">
          <img src={images.chef1} alt="chef 1" className="about-img1" />
          <img src={images.chef2} alt="chef 2" className="about-img2" />
        </div>
      </section>
    </>
  );
};

export default About;
