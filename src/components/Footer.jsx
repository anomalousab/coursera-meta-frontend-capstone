import React from "react";
import images from "../db/images";
import "../styles/Footer.css";
import { links } from "../db/constants";

const Footer = () => {
  return (
    <footer className="flex justify-between">
      <div className="footer-container">
        <a href="/" className="flex footer-logo-a">
          <img src={images.logo2} alt="logo" className="footer-logo" />
        </a>
        <div className="flex links-container">
          <ul>
            <h4>Doormat Links</h4>
            {links.doormat.map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
          <ul>
            <h4>Contact</h4>
            {links.contact.map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
          <ul>
            <h4>Social Media</h4>
            {links.socialMedia.map((link) => (
              <li key={link}>
                <a href={`/${link.toLowerCase()}`}>{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
