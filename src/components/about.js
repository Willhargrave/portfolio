import Button from './common/Button';
import {motion} from 'framer-motion'
import { FaLinkedin, FaGithubSquare, FaMailBulk, FaFileAlt } from "react-icons/fa";

const About = ({nameLoaded, titleLoaded, infoLoaded, imageLoaded}) => {

  const buttonVariants = {
    hidden: {opacity: 0, x: -20},
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3, 
      },
    },
  };
  return (
    <div className="flex flex-col items-center lg:items-start">
        <motion.h1 
        className="font-cinzel text-6xl lg:text-7xl font-light text-black mb-6"
        initial={{opacity: 0, y: 20}}
        animate={{opacity: nameLoaded ? 1 : 0, y: nameLoaded ? 0: 20}}
        transtion={{duration: 0.5}}
        >
          Will Hargrave
          </motion.h1>
          <hr className="border-black my-4 w-3/4" />
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: titleLoaded ? 1 : 0, y: titleLoaded ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          >
          <span className="font-roboto text-4xl lg:text-5xl">Full Stack Engineer</span>
          </motion.div>
      <motion.p 
        className="mt-2 font-roboto text-xl lg:text-2xl font-light mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: infoLoaded ? 1 : 0, y: infoLoaded ? 0 : 20 }}
        transition={{ duration: 0.5 }}
      >
        Born in the UK, living in Tokyo, please take a look at some of the projects I've been working on!
      </motion.p>
        <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-8 items-start">
          
        <motion.div 
        className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[350px]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: imageLoaded ? 1 : 0, scale: imageLoaded ? 1 : 0.9 }}
        transition={{ duration: 0.5 }}
      >
      <div className="absolute inset-0 border-[15px] border-solid border-gray-200 border-b-white border-t-gray-300 rounded-sm shadow-[0_0_5px_0_rgba(0,0,0,0.25)_inset,_0_5px_10px_5px_rgba(0,0,0,0.25)]">
        <img
          src={require('./images/profile-picture.jpg')}
          alt="profile"
          className="w-full h-full object-cover object-[center_top]"
        />
      </div>
      <div className="absolute inset-[-8px] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)_inset]"></div>
      <div className="absolute inset-[-10px] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)]"></div>
    </motion.div>
    <motion.div 
    className="flex flex-col gap-8 mt-6 lg:mt-0 lg:ml-4"
    variants={containerVariants}
    initial="hidden"
    animate={imageLoaded ? "visible" : "hidden"}
    >
     <motion.div variants={buttonVariants} custom={0}>
          <Button href="https://www.linkedin.com/in/will-r-hargrave/">
          <FaLinkedin size={20}/>
           <span>LinkedIn</span> 
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} custom={1}>
          <Button href="https://github.com/Willhargrave">
          <FaGithubSquare size={20} />
          <span>Github</span> 
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} custom={2}>
          <Button onClick={() => window.location.href = 'mailto:willhargrave52@gmail.com'}>
          <FaMailBulk size={20}/>
          <span>Contact Me</span> 
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants} custom={3}>
          <Button href="https://docs.google.com/document/d/1cPeCaW2E0kzS40zvOsKr4YIik9IQadbq/edit?usp=sharing&ouid=108260470277181036486&rtpof=true&sd=true">
          <FaFileAlt size={20}/>
          <span>Resume</span> 
          </Button>
        </motion.div>
    </motion.div>
  </div>
</div>
  );
}


export default About
