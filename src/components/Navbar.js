import React from "react";
import { HiMenu } from "react-icons/hi"
import menu from "../assets/menu.png"
const Navbar = () => {
  return (
    <div className="flex items-center justify-around pt-6  text-white">
      <div className="Nav lg:text-[3rem] text-[2rem] font-bold">Saad</div>
      <div className="lg:hidden "><HiMenu className="text-[2rem]"/></div>
      <div className="lg:flex hidden lg:justify-evenly lg:gap-10 lg:text-[1.2rem]  Nav1 relative">
        <ul>About</ul>
        <ul>Experience</ul>
        <ul>Projects</ul>
        <ul>Contact</ul>
      </div>
    </div>
  );
};

export default Navbar;
