function About() {
  return (
    <div className="container mt-20 mx-auto px-4 py-16 max-w-6xl mb-[500px]" id="about">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
        <div className="lg:w-2/3">
          <h1 className="text-5xl font-light text-black mb-6">
            Will Hargrave
            <hr className="border-black my-4 w-1/4" />
            <span className="text-4xl">Full Stack Engineer</span>
          </h1>
          <p className="text-2xl font-light mb-8">
            Born in the UK, living in Tokyo, please take a look at some of the projects I've been working on!
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              className="inline-block cursor-pointer text-base font-semibold rounded-lg px-6 py-3 border border-gray-800 transition-all duration-200 bg-white text-gray-800 hover:border-black hover:bg-gray-100"
              href="https://www.linkedin.com/in/will-r-hargrave/"
            >
              LinkedIn
            </a>
            <a 
              className="inline-block cursor-pointer text-base font-semibold rounded-lg px-6 py-3 border border-gray-800 transition-all duration-200 bg-white text-gray-800 hover:border-black hover:bg-gray-100"
              href="https://github.com/Willhargrave"
            >
              GitHub
            </a>
            <button 
              className="inline-block cursor-pointer text-base font-semibold rounded-lg px-6 py-3 border border-gray-800 transition-all duration-200 bg-white text-gray-800 hover:border-black hover:bg-gray-100"
              onClick={() => window.location.href = 'mailto:willhargrave52@gmail.com'}
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="lg:w-1/3">
          <div className="relative w-[350px] h-[350px]">
            <div className="absolute inset-0 border-[15px] border-solid border-gray-200 border-b-white border-t-gray-300 rounded-sm shadow-[0_0_5px_0_rgba(0,0,0,0.25)_inset,_0_5px_10px_5px_rgba(0,0,0,0.25)]">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={require('./images/profile.jpg')}
                  alt="profile"
                  className="w-full h-full object-cover object-[center_top]"
                />
              </div>
            </div>
            <div className="absolute inset-[-8px] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)_inset]"></div>
            <div className="absolute inset-[-10px] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About
