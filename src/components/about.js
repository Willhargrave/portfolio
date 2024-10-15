import Button from './Button';
const About = () => {
  return (
    <div className="flex flex-col items-center lg:items-start">
        <h1 className="text-6xl lg:text-7xl font-light text-black mb-6">
          Will Hargrave
          <hr className="border-black my-4 w-3/4" />
          <span className="text-4xl lg:text-5xl">Full Stack Engineer</span>
        </h1>
        <p className="text-xl lg:text-2xl font-light mb-8">
          Born in the UK, living in Tokyo, please take a look at some of the projects I've been working on!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-[auto,1fr] gap-8 items-start">
    <div className="relative w-[300px] h-[300px] lg:w-[350px] lg:h-[350px]">
      <div className="absolute inset-0 border-[15px] border-solid border-gray-200 border-b-white border-t-gray-300 rounded-sm shadow-[0_0_5px_0_rgba(0,0,0,0.25)_inset,_0_5px_10px_5px_rgba(0,0,0,0.25)]">
        <img
          src={require('./images/profile.jpg')}
          alt="profile"
          className="w-full h-full object-cover object-[center_top]"
        />
      </div>
      <div className="absolute inset-[-8px] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)_inset]"></div>
      <div className="absolute inset-[-10px] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)]"></div>
    </div>
    
    <div className="flex flex-col gap-4 w-full lg:w-48">
    <Button href="https://www.linkedin.com/in/will-r-hargrave/">
            LinkedIn
          </Button>
          <Button href="https://github.com/Willhargrave">
            GitHub
          </Button>
          <Button onClick={() => window.location.href = 'mailto:willhargrave52@gmail.com'}>
            Contact Me
          </Button>
          <Button href="https://docs.google.com/document/d/1cPeCaW2E0kzS40zvOsKr4YIik9IQadbq/edit?usp=sharing&ouid=108260470277181036486&rtpof=true&sd=true">
            Resume
          </Button>
    </div>
  </div>
</div>
  );
}


export default About
