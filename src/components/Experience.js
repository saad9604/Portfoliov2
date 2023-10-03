import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Import the styles
import experienceData from "../ExperienceData";

const Experience = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-10/12 mx-auto lg:translate-y-0 -translate-y-20 ">
      <p className="name text-4xl text-blue-500 font-extrabold mt-5 mb-4">Experience</p>
      <VerticalTimeline className="w-full max-w-md ">
        {experienceData.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            date={`${experience.startDate} - ${experience.endDate}`}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentStyle={{
              background: "white",
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div>
              <h3 className="name font-bold text-lg">{experience.title}</h3>
              <div className=" flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h4 className="name font-normal text-sm md:text-base">
                  {experience.company}
                </h4>
                <h4 className="name font-normal text-sm md:text-base">
                  {experience.location}
                </h4>
              </div>

              <p className="name text-sm md:text-base">
                {experience.description}
              </p>
          </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
