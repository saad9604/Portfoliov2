import React, { useState } from 'react';
import ProjectCard2 from "./ProjectCard2";
import { motion, useAnimation } from "framer-motion";
import { InView } from 'react-intersection-observer';


const Project2 = () => {
  const controls = useAnimation();
  const [clicked, setClicked] = useState(false);

  const handleInView = (inView) => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  };

  return (
    <InView onChange={handleInView}>
      {({ inView, ref }) => (
        <div className="relative">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            className="w-full flex justify-center"
          >
            <button
              onClick={() => setClicked(!clicked)}
              className="name text-xl bg-blue-500 text-white p-2 px-3 rounded-md lg:mb-[40px] lg:translate-y-0 -translate-y-20 relative z-10"
            >
              View More Projects
            </button>
          </motion.div>
          {clicked && (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}>
              <ProjectCard2 />
            </motion.div>
          )}
        </div>
      )}
    </InView>
  );
};

export default Project2;

