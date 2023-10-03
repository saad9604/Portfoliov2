// src/components/ProjectCard.js
import React, { useState } from "react";

const ProjectCard = ({ project }) => {



  return (
    <div className="lg:flex-row flex flex-col justify-evenly lg:max-w-[70%] mx-auto lg:gap-8">
      <div className="mb-10 rounded-lg  shadow-blue-500 shadow-xl mx-auto">
        <video autoPlay loop muted playsInline className=" lg:min-w-[400px] w-[350px] lg:max-w-[400px] rounded-md">
          <source src={project.video} type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 mx-auto lg:justify-between items-center">
          <p className="font-extrabold text-[1.5rem] name">{project.title}</p>
          <div className="flex items-center">
            <a target="_blank" href={project.link}>
              <img src={project.live} width={35} height={10} />
            </a>
            <a target="_blank" href={project.gitLink}>
            <img src={project.github} width={35} height={10} />
            </a>
          </div>
          

        </div>
        <p className="text-left text-[1rem] font-extralight lg:p-0 p-5 lg:mb-0 mb-5">{project.description}</p>
      </div>
    </div>

  );
};

export default ProjectCard;
