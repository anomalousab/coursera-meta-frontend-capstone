import React from "react";
import { NavLink } from "react-router-dom";
import images from "../db/images";
import "../styles/Navbar.css";
import { links } from "../db/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container flex justify-between items-center">
      <Link to="/" className="logo flex">
        <img src={images.logo1} className="logo" alt="little lemon logo" />
      </Link>
      <nav className="flex justify-between items-center font-semibold md:mr-10">
        <ul className="flex">
          {links.doormat.map((link) => (
            <li key={link} className="list-item">
              {/* intentionally set all links to reserve a table functionality for the final submission */}
              <NavLink to={`${link === "Home" ? "/" : "/book"}`}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
