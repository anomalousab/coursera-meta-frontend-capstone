import React from "react";
import { Navbar, CTA } from "./";

const Header = () => {
  return (
    <header className="flex w-full flex-col">
      <Navbar />
      <CTA/>
    </header>
  );
};

export default Header;
