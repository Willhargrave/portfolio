function Navbar() {
  return (
    <div>
      <header className="fixed top-0 w-full h-10 flex justify-end items-center p-3 bg-gradient-to-r from-custom-gray-1 to-custom-gray-2 z-50">
        <nav>
          <a href="#about" className="text-black no-underline mx-1 hover:text-gray-600 transition-colors duration-200">Home</a>
          <a href="#project" className="text-black no-underline mx-1 hover:text-gray-600 transition-colors duration-200">Projects</a>
          <a href="#skill" className="text-black no-underline mx-1 hover:text-gray-600 transition-colors duration-200">Skills</a>
          <a href="#personal" className="text-black no-underline mx-1 hover:text-gray-600 transition-colors duration-200">Personal</a>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;
