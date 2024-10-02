function About() {
    return (
        <div className="mt-12 mb-80 flex justify-center items-center" id="about">
          <div className="w-1/2">
            <div className="grid grid-cols-2 justify-between items-center">
              <h1 className="text-6xl font-thin text-black">
                Will Hargrave 
                <hr className="border-black" />
                Full Stack Engineer
              </h1>
              <div className="relative inline-block w-[350px] h-[300px]">
                <div className="absolute inset-0 border-[5vmin] border-solid border-gray-200 border-b-white border-t-gray-300 rounded-sm shadow-[0_0_5px_0_rgba(0,0,0,0.25)_inset,_0_5px_10px_5px_rgba(0,0,0,0.25)]">
                  <div className="absolute inset-[5vmin] overflow-hidden">
                    <img
                      src={require('./images/profile.jpg')}
                      alt="profile"
                      className="w-full h-full object-cover object-[center_top]"
                    />
                  </div>
                </div>
              <div className="absolute inset-[-2vmin] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)_inset]"></div>
              <div className="absolute inset-[-2.5vmin] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)]"></div>
            </div>
            </div>
            <p className="text-3xl font-thin">
              Born in the UK, living in Tokyo, please take a look at some the projects I've been working on!
            </p>
            <div className="flex justify-center items-center mt-24">
              <a 
                className="inline-block cursor-pointer text-base leading-5 font-semibold rounded-lg px-6 py-3 border border-gray-800 transition-all duration-200 bg-white text-gray-800 hover:border-black hover:bg-gray-100 mx-2"
                href="https://www.linkedin.com/in/will-r-hargrave/"
              >
                Linkedin
              </a>
              <a 
                className="inline-block cursor-pointer text-base leading-5 font-semibold rounded-lg px-6 py-3 border border-gray-800 transition-all duration-200 bg-white text-gray-800 hover:border-black hover:bg-gray-100 mx-2"
                href="https://github.com/Willhargrave"
              >
                Github
              </a>
              <button 
                className="inline-block cursor-pointer text-base leading-5 font-semibold rounded-lg px-6 py-3 border border-gray-800 transition-all duration-200 bg-white text-gray-800 hover:border-black hover:bg-gray-100 mx-2"
                onClick={() => window.location.href = 'mailto:willhargrave52@gmail.com'}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )
}


export default About
