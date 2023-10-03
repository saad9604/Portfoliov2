import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Lottie from "lottie-react";
import computer from "../assets/computer.json";

const Progress = () => {
  return (
    <div className="mt-[50px] mb-[80px] lg:flex-row flex-col flex lg:justify-around mx-auto">
      <div className="">
        <p className="name lg:ml-0 ml-5  text-[2rem] mb-7 font-extrabold text-blue-500">Profiency</p>
        <p className="ml-5 lg:ml-0">Frontend/Design</p>
        <ProgressBar
          completed="90"
          className="lg:w-[400px] w-[350px] mb-5 lg:mx-0 mx-auto"
          height="15px"
          bgColor="#007FFF"
        />
        <p className="ml-5 lg:ml-0">BACKEND</p>
        <ProgressBar
          completed="80"
          className="lg:w-[400px] w-[350px] mb-5 lg:mx-0 mx-auto"
          height="15px"
          bgColor="#007FFF"
        />
        <p className="ml-5 lg:ml-0">PROGRAMMING</p>
        <ProgressBar
          completed="80"
          className="lg:w-[400px] w-[350px] mb-5 lg:mx-0 mx-auto"
          height="15px"
          bgColor="#007FFF"
        />
      </div>
      <div className="lg:w-[400px] lg:pt-0 pt-5 w-[350px] lg:mx-0 mx-auto">
        <Lottie animationData={computer} />
      </div>
    </div>
  );
};

export default Progress;
