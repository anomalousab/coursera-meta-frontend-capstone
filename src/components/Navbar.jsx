import React from "react";
import logo from "../assets/logo1.png";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <div className="container flex justify-between items-center">
      <a href="/" className="logo flex">
        <img src={logo} className="logo" alt="little lemon logo"/>
      </a>
      <nav className="flex justify-between items-center font-semibold md:mr-10">
        <ul className="flex">
          <li className="list-item">
            <a href="/home">Home</a>
          </li>
          <li className="list-item">
            <a href="/home">About</a>
          </li>
          <li className="list-item">
            <a href="/home">Menu</a>
          </li>
          <li className="list-item">
            <a href="/home">Reservations</a>
          </li>
          <li className="list-item">
            <a href="/home">Order Online</a>
          </li>
          <li className="list-item last-list-item">
            <a href="/home">Login</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
