import React from "react";
import "../styles/Specials.css";
import { GiScooter } from "react-icons/gi";
import greekSalad from "../assets/greek-salad.jpg";
import bruschutta from "../assets/bruschetta.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";

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
          <div className="card">
            <img
              src={greekSalad}
              alt="greek salad"
              className="specials-img w-full"
            />
            <div className="about-special">
              <div className="head flex">
                <h2 className="card-heading">Greek salad</h2>
                <p className="price">$12.99</p>
              </div>
              <p className="special-desc">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style fota cheese garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <button type="button" className="semibold delivery-btn">
                Order a delivery &nbsp; <GiScooter size={25} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src={bruschutta}
              alt="bruschutta"
              className="specials-img w-full"
            />
            <div className="about-special">
              <div className="head flex">
                <h2 className="card-heading">Bruschetta</h2>
                <p className="price">$5.99</p>
              </div>
              <p className="special-desc">
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <button type="button" className="semibold delivery-btn">
                Order a delivery &nbsp; <GiScooter size={25} />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              src={lemonDessert}
              alt="lemon dessert"
              className="specials-img w-full"
            />
            <div className="about-special">
              <div className="head flex">
                <h2 className="card-heading">Lemon Dessert</h2>
                <p className="price">$5.00</p>
              </div>
              <p className="special-desc">
                This comes straight from grandma's recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <button type="button" className="semibold delivery-btn">
                Order a delivery &nbsp; <GiScooter size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specials;
