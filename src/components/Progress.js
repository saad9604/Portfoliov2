import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Lottie from "lottie-react";
import computer from "../assets/computer.json";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Progress = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <InView>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={animationVariants}
          className="mt-[50px] mb-[80px] lg:flex-row flex-col flex lg:justify-center lg:gap-20 mx-auto"
        >
          <div className="">
            <p className="name lg:ml-0 ml-5  text-[2rem] mb-7 font-extrabold text-blue-500">
              Proficiency
            </p>
            <p className="ml-5 lg:ml-0">Frontend/Design</p>
            <ProgressBar
              completed={inView ? "90" : "0"}
              className="lg:w-[400px] w-[350px] mb-5 lg:mx-0 mx-auto"
              height="15px"
              bgColor="#007FFF"
            />
            <p className="ml-5 lg:ml-0">BACKEND</p>
            <ProgressBar
              completed={inView ? "80" : "0"}
              className="lg:w-[400px] w-[350px] mb-5 lg:mx-0 mx-auto"
              height="15px"
              bgColor="#007FFF"
            />
            <p className="ml-5 lg:ml-0">PROGRAMMING</p>
            <ProgressBar
              completed={inView ? "80" : "0"}
              className="lg:w-[400px] w-[350px] mb-5 lg:mx-0 mx-auto"
              height="15px"
              bgColor="#007FFF"
            />
          </div>
          <div className="lg:w-[400px] lg:pt-0 pt-5 w-[350px] lg:mx-0 mx-auto">
            <Lottie animationData={computer} />
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default Progress;
