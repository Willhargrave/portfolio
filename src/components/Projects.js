import React, {useEffect, useState} from 'react';
import ProjectCard from "./common/ProjectCard";
import ProjectItems from "../data/ProjectItems";
import useScrollAnimation from './hooks/useScrollingLoad';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {motion} from 'framer-motion'


const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [projectsRef, isVisible] = useScrollAnimation({threshold: 0.1})
  const [isAnimating, setIsAnimating] = useState(false)

  const nextProject = () => {
    if(!isAnimating) {
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ProjectItems.length);
    }
  };

  const prevProject = () => {
    if(!isAnimating)
    {
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + ProjectItems.length) % ProjectItems.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex])

  
  return (
    <div className="mt-[200px] mb-32">
      <h2 className="text-4xl font-bold text-center mb-4">Projects</h2>
      <hr className="w-1/3 mx-auto my-6 border-gray-300" />
      <p className="text-xl font-semibold text-center mb-12">Personal projects that I've done to develop my skills and trying out new languages</p>
      <motion.div
       ref={projectsRef}
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
       transition={{ duration: 1 }}
      className="relative max-w-[1600px] mx-auto overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {ProjectItems.map((project, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <ProjectCard Project={project} />
              </div>
            </div>
          ))}
        </div>
        <button 
          onClick={prevProject} 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-75 transition-all z-10"
          disabled={isAnimating}
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextProject} 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-3 rounded-full shadow-lg hover:bg-opacity-75 transition-all z-10"
          disabled={isAnimating}
        >
          <ChevronRight size={32} />
        </button>
      </motion.div>
    </div>
  );
};

export default Projects;
