import "./style/Project.css"
import ProjectCard from "./ProjectCard";
import ProjectItems from "./ProjectItems";
function Skills() {

  return (
    <div>
      <h2 id="project">Projects</h2>
      <hr></hr>
      <p>Here are some of the projects I've worked on, hover over them for more info</p>
      <div className="project">
        {ProjectItems.map((Project) => <ProjectCard Project={Project} />)}
      </div>
    </div>
  )
}

export default Skills;
