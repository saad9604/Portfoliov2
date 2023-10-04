import React, { useEffect } from "react";
import github from "../assets/github.png";
import insta from "../assets/insta.png";
import linkedin from "../assets/linkedin.png";
import pdfFile from "../assets/Saad_cv2.pdf";
import { AiTwotoneFilePdf } from "react-icons/ai";
import Lottie from "lottie-react";
import anime1 from "../assets/anime1.json";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const openPdf = () => {
    window.open(pdfFile, "_blank");
  };

  // Create animations using Framer Motion
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="h-[100vh] lg:flex flex lg:flex-row flex-col-reverse lg:justify-evenly items-center relative bottom-5"
    >
      <div className="flex flex-col gap-5 mt-7 text-left">
        <p className="name text-[2.6rem] text-white font-extrabold lg:text-left text-center">
          Hii all, I am Saad
        </p>
        <p className="text-white name leading-8 text-[1rem] font-bold lg:pl-0 pl-7">
          I'm passionate Full Stack web developer having an experience
          <br /> of web applications with HTM5, CSS3, TailwindCSS, <br />
          React.js, Express.js, MongoDB, Nodejs.
        </p>
        <div className="flex mt-3 gap-3 lg:pl-0 pl-7">
          <a href="https://www.linkedin.com/in/saadsayyed29604/">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/saad9604">
            <img src={github} alt="GitHub" />
          </a>
        </div>
        <div className="lg:pl-0 pl-7">
          <button
            onClick={openPdf}
            className="bg-white text-black text-[0.7rem] px-10 py-2 font-bold rounded"
          >
            Open Resume
          </button>
          <AiTwotoneFilePdf className="relative bottom-[25px] left-5" />
        </div>
      </div>
      <div>
        <div className="relative lg:bottom-9  lg:top-0 top-2 lg:w-[400px] w-[370px]">
          <Lottie animationData={anime1} />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
