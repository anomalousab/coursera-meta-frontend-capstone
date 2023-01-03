import React from "react";
import logo from "../assets/logo2.png";
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="flex justify-between">
      <div className="footer-container">
      <a href="/" className="flex footer-logo-a">
        <img src={logo} alt="logo" className="footer-logo"/>
      </a>
      <div className="flex links-container">
        <ul>
          <h4>Doormat Links</h4>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order Onlin</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
        <ul>
            <h4>Contact</h4>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
        </ul>
        <ul>
            <h4>Social Media</h4>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>Twitters</li>
        </ul>
      </div>
      </div>
      
    </footer>
  );
};

export default Footer;
