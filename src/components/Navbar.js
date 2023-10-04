import React, { useState } from "react";
import { HiMenu } from "react-icons/hi"
import menu from "../assets/menu.png"
const Navbar = () => {

  const [menu, setmenu] = useState(false)
  return (
    <div className="flex items-center justify-around pt-6  text-white">
      <div className="Nav lg:text-[3rem] text-[2rem] font-bold">Saad</div>
      <div className="lg:hidden text-[2rem] "><HiMenu onClick={() => setmenu(!menu)} /></div>
      {
        menu && <div className="flex flex-col justify-around absolute bg-blue-200 text-black rounded-md text-center translate-x-6 translate-y-[115px] z-10 font-extrabold  w-[200px] h-[200px]">
          <ul>About</ul>
          <ul>Experience</ul>
          <ul>Projects</ul>
          <ul>Contact</ul>
        </div>
      }
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
