import React from "react";
import { Navbar } from "./";
import "../styles/Header.css";
import heroImg from "../assets/meat-hero.jpg";

const Header = () => {
  return (
    <header className="flex w-full flex-col">
      <Navbar />
      <div className="hero flex">
        <div className="hero-back flex">
        <div className="hero-text-container w-50">
          <div className="hero-head-container">
            <h1 className="hero-head">Little Lemon</h1>
            <h2 className="hero-subhead">Chicago</h2>
          </div>

          <p className="hero-desc">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button type="button" className="cta-button">
            Reserve a Table
          </button>
        </div>
        <div className="hero-img-container w-50">
          <img src={heroImg} alt="delicious meat" className="hero-img" />
        </div>
      </div>
        </div>
    </header>
  );
};

export default Header;
