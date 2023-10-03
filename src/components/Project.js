import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projectData";

const Project = () => {
  return (
    <div>
      <p className="name text-4xl mb-5 font-extrabold text-center text-blue-500 lg:translate-y-0 -translate-y-28">Some of my Best Projects</p>
      <div className="mx-auto mb-[40px] lg:pt-8 lg:translate-y-0 -translate-y-20">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
