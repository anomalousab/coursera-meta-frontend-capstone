import React from "react";
import {Navbar} from './'

const Header = () => {
  return (
    <header className="flex w-full flex-col">
      <Navbar />
      <div className="">
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button type="button" className="">Reserve a Table</button>
        </div>
        <div>
            Image
        </div>
      </div>
    </header>
  );
};

export default Header;
