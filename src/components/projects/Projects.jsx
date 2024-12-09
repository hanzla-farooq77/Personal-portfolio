import React from 'react'

import Projectscard from './Projectscard';
const Projects = () => {

  return (
    <div id="projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl font-bold text-white">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
         <Projectscard title={"spotify clone"} main={"This is a clone of Spotify created in HTML,CSS,JS,REACT"}/>
         <Projectscard title={"Youtube clone"} main={"This is a clone of Youtube created in HTML,CSS,JS,REACT"}/>
         <Projectscard title={"Car Website"} main={"This is a Car Website created in HTML,CSS,JS,REACT"}/>
      </div>
    </div>
  );
};

export default Projects
      

