import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projectData";
import { motion, useAnimation } from "framer-motion";
import { InView } from 'react-intersection-observer';


const Project = () => {
  const controls = useAnimation();

  const handleInView = (inView) => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  };

  return (
    <InView onChange={handleInView}>
      {({ inView, ref }) => (
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <p id="project"  className="name text-4xl mb-5 font-extrabold text-center text-blue-500 lg:translate-y-0 -translate-y-28">Some of my Best Projects</p>
          <div className="mx-auto mb-[40px] lg:pt-8 lg:translate-y-0 -translate-y-20">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default Project;
