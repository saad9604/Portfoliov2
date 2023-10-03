import React from "react";
import Lottie from "lottie-react";
import anime2 from "../assets/anime2.json";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import prisma from "../assets/Prisma.png";
import light from "../assets/light.png";
const Intro = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center mt-10 lg:mb-0 mb-8">
        <p className="mb-5 name font-extrabold text-[40px] text-blue-500 drop-shadow-2xl">What I do</p>
        <p className="font-bold text-blue-500">
          CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK
        </p>
      </div>
      <div className="lg:flex-row flex flex-col lg:justify-between lg:pt-16">
        <div className="lg:w-[400px]">
          <Lottie animationData={anime2} />
        </div>
        <div>
          <p className="text-center lg:mt-0 mt-7 lg:translate-y-0 translate-y-5 font-extrabold lg:text-[32px] text-[25px] text-blue-500">Full Stack Development</p>
          <div className="flex lg:gap-5 gap-3 mx-auto lg:mx-0 lg:h-[50px] h-[40px] mt-10 mb-9 ">
            <img src={html} className="shadow-md shadow-black rounded-full p-1" />
            <img src={css} className="shadow-md shadow-black rounded-full p-1" />
            <img src={javascript} className="shadow-md shadow-black  rounded-full p-1" />
            <img src={react} className="shadow-md shadow-black rounded-full p-1" />
            <img src={mongodb} className="shadow-md shadow-black  rounded-full p-1" />

            <img src={node} className=" shadow-md shadow-black rounded-full p-1" />
            <img src={prisma} className=" shadow-md shadow-black rounded-full p-1" />
          </div>
          <div className="flex flex-col lg:pt-0 pt-5">
            <div className="flex gap-1 font-extrabold mb-2 text-blue-500">
              <img src={light} width={20} />
              <p>Building responsive Single-Page-Apps (SPA) in React.js</p>
            </div>
            <div className="flex gap-1 font-extrabold mb-2 text-blue-500">
              <img src={light} width={20} />
              <p>Building responsive static websites using MERN Stack</p>
            </div>
            <div className="flex gap-1 font-extrabold mb-2 text-blue-500">
              <img src={light} width={20} />
              <p>Building RESTful APIs using Expressjs and Nodejs</p>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
