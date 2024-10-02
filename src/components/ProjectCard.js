const ProjectCard = ({ Project }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12 max-w-7xl mx-auto px-4">
      <div className="relative w-full lg:w-3/5">
        <div className="bg-[#ddc] border-[5vmin] border-solid border-gray-200 border-b-white border-t-gray-300 rounded-sm shadow-[0_0_5px_0_rgba(0,0,0,0.25)_inset,_0_5px_10px_5px_rgba(0,0,0,0.25)] inline-block relative w-full">
          <img src={Project.img} alt={Project.name} className='w-full h-[400px] lg:h-[500px] object-cover' />
          <div className="absolute inset-[-2vmin] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)_inset]"></div>
          <div className="absolute inset-[-2.5vmin] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)]"></div>
        </div>
      </div>
      <div className="lg:w-2/5 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-6">{Project.name}</h2>
        <p className="text-xl text-gray-600 mb-6">{Project.info}</p>
        <h3 className="text-2xl font-semibold mb-4">Tech Stack:</h3>
        <p className="text-lg text-gray-600">{Project.stack}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
