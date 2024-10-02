import React, {useState} from 'react';
import ProjectCard from "./ProjectCard";
import ProjectItems from "./ProjectItems";
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import icons


const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ProjectItems.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ProjectItems.length) % ProjectItems.length);
  };

  
  return (
    <div className="mt-24 mb-32">
      <h2 id="project" className="text-4xl font-semibold text-center mb-4">Projects</h2>
      <hr className="w-1/3 mx-auto my-6 border-gray-300" />
      <p className="text-xl text-center mb-12">Here are some of the projects I've worked on</p>
      <div className="relative">
        <ProjectCard Project={ProjectItems[currentIndex]} />
        <button onClick={prevProject} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-75 transition-all">
          <ChevronLeft size={32} />
        </button>
        <button onClick={nextProject} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-75 transition-all">
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );

};

export default Projects;
