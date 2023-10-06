import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { motion, useAnimation } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Use a different name for the state variable

  // const controls = useAnimation();

  // const handleInView = (inView) => {
   
  //     controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    
  // };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{opacity:1 , y:0, transition:{duration:1}}}
      className="flex items-center justify-around pt-6 text-white">
      <div className="Nav lg:text-[3rem] text-[2rem] font-bold">Saad</div>
      <div className="lg:hidden text-[2rem]">
        <HiMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{opacity:0.4}}
          animate={{opacity:1, transition:{duration:0.3}}}
          className="flex lg:hidden flex-col justify-around absolute bg-blue-200 text-black rounded-md text-center translate-x-6 translate-y-[115px] z-10 font-extrabold w-[200px] h-[200px]">
          <ul>
            <a href="#about">About</a>
          </ul>
          <ul>
            <a href="#experience">Experience</a>
          </ul>
          <ul>
            <a href="#project">Projects</a>
          </ul>
          <ul>
            <a href="#contact">Contact</a>
          </ul>
        </motion.div>
      )}
      <div className="lg:flex hidden lg:justify-evenly lg:gap-10 lg:text-[1.2rem] z-10  Nav1 relative">
        <ul>
          <a href="#about">About</a>
        </ul>
        <ul>
          <a href="#experience">Experience</a>
        </ul>
        <ul>
          <a href="#project">Projects</a>
        </ul>
        <ul>
          <a href="#contact">Contact</a>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
