import experiences from "../../data/ExperienceItems";
import {motion} from 'framer-motion'
const ExperienceList = ({loaded}) => {
  return (

    <motion.div 
    className="w-full bg-white rounded-lg shadow-md p-6 my-8 lg:my-32"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 20 }}
    transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-cinzel font-semibold mb-6">Work Experience</h2>
      <div className="overflow-y-auto max-h-[calc(100vh-300px)] pr-2">
        {experiences.map((job, index) => (
          <div key={index} className="mb-8 last:mb-0">
            <h3 className="text-xl font-cinzel font-medium">{job.title}</h3>
            <p className="text-lg font-cinzel">{job.company}</p>
            <p className="text-md font-roboto mb-2">{job.date}</p>
            <ul className="list-disc list-inside">
              {job.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-md font-roboto mb-1">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
  };
  
  export default ExperienceList;
  