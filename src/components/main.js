import Navbar from "./Navbar"
import Skills from "./Skills"
import About from "./About"
import Project from "./Projects"
import ExperienceList from "./ExperienceList"
function Main() {
    return (
        <div>
            <Navbar />
            <div className="flex justify-between items-start">
            <About />
            <ExperienceList />
            </div>
            <Project />
            <Skills />
            
        </div>
    )
};

export default Main;
