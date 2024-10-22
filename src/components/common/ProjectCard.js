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
      <div className="max-w-xs bg-stone-50 p-6 shadow-md border border-stone-200">
        <h2 className="text-4xl font-cinzel font-bold mb-1">{Project.name}</h2>
        <p className="font-roboto text-sm text-gray-600 mb-3">{Project.stack}</p>
        <p className="text-2xl font-roboto leading-snug">{Project.info}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
