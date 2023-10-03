import React, { useState } from 'react'
import ProjectCard2 from "./ProjectCard2";

const Project2 = () => {

  const [clicked, setclicked] = useState(false)



  return (
    <div>
      <div className="w-full flex justify-center">
        <button onClick={() => setclicked(!clicked)} className=" name  text-xl bg-blue-500 text-white p-2 px-3 rounded-md lg:mb-[40px] lg:translate-y-0 -translate-y-20">View More Projects</button>
      </div>
      {clicked &&
        <div>
          <ProjectCard2 />
        </div>}


    </div>
  )
}

export default Project2