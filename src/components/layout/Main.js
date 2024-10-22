import Navbar from "./Navbar"
import Skills from "../Skills"
import About from "../About"
import Project from "../Projects"
import ExperienceList from "../common/ExperienceCard"
import useCascadingLoad from "../hooks/useCascadingLoad"
import AnimatedBackground from "../common/AnimatedBackground"
function Main() {
const loadedComponents = useCascadingLoad(5)
    return (
        <div>
        <AnimatedBackground />
            <Navbar />
        <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
              <div className="mt-8 lg:w-1/2">
            <About 
            nameLoaded={loadedComponents.includes(0)}
            titleLoaded={loadedComponents.includes(1)}
            infoLoaded={loadedComponents.includes(2)}
            imageLoaded={loadedComponents.includes(3)}
          />
            </div>
            <div className="lg:w-1/2 flex items-center lg:h-full">
            <ExperienceList loaded={loadedComponents.includes(4)} />
            </div>
            </div>
          </div>
        </section>
            <section className="py-16">
          <div className="container mx-auto px-4">
            <Project />
          </div>
        </section>
            <Skills />
        </main>
        </div>
        </div> 
    )
};

export default Main;
