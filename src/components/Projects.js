import ProjectCard from "./ProjectCard";
import ProjectItems from "./ProjectItems";
function Projects() {

  return (
    <div className="mt-12">
      <h2 id="project" className="text-3xl font-semibold text-center">Projects</h2>
      <hr className="w-1/4 mx-auto my-4 border-gray-300" />
      <p className="text-lg text-center mb-8">Here are some of the projects I've worked on, hover over them for more info</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {ProjectItems.map((Project, index) => <ProjectCard key={index} Project={Project} />)}
      </div>
    </div>
  )
}

export default Projects;
