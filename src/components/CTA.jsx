import React from "react";
import "../styles/CTA.css";
import images from "../db/images";
import { Link } from "react-router-dom";
const CTA = () => {
  return (
    <>
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
            <Link to="/book">
              <button type="button" className="cta-button">
                Reserve a Table
              </button>
            </Link>
          </div>
          <div className="hero-img-container w-50">
            <img
              src={images.heroImg}
              alt="delicious meat"
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
