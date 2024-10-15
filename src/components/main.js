import Navbar from "./Navbar"
import Skills from "./Skills"
import About from "./About"
import Project from "./Projects"
import ExperienceList from "./ExperienceList"
function Main() {
    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-16 max-w-7xl">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="lg:w-1/2">
            <About />
            </div>
            <div className="lg:w-1/2 flex items-center lg:h-full">
            <ExperienceList />
            </div>
            </div>
            </div>
            <div className="mt-32">
            <Project />
            <Skills />
            </div>
            
        </div>
    )
};

export default Main;
