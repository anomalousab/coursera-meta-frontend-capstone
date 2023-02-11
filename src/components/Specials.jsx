import React from "react";
import "../styles/Specials.css";
import { GiScooter } from "react-icons/gi";
import { specials } from "../db/constants";

const Specials = () => {
  return (
    <section className="specials flex-col">
      <div className="specials-container w-full">
        <div className="header">
          <h1 className="heading extra-bold">This weeks specials!</h1>
          <button type="button" className="cta-button">
            Online Menu
          </button>
        </div>
        <div className="cards flex">
          {specials.map((special) => (
            <div className="card" key={special.name}>
              <img
                src={special.img}
                alt={special.name}
                className="specials-img w-full"
              />
              <div className="about-special">
                <div className="head flex">
                  <h2 className="card-heading">{special.name}</h2>
                  <p className="price">$12.99</p>
                </div>
                <p className="special-desc">{special.desc}</p>
                <button type="button" className="semibold delivery-btn">
                  Order a delivery &nbsp; <GiScooter size={25} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;
