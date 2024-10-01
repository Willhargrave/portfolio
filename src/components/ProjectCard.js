const ProjectCard = (props) => {
    function handleClick() {
        const popup = document.getElementById(props.Project.id);
        popup.classList.toggle("show");
    }
    return (
        <div className="relative group">
          <div className="bg-[#ddc] border-[5vmin] border-solid border-gray-200 border-b-white border-t-gray-300 rounded-sm shadow-[0_0_5px_0_rgba(0,0,0,0.25)_inset,_0_5px_10px_5px_rgba(0,0,0,0.25)] inline-block m-[5vw_10vh_0_10vw] relative text-center" onClick={handleClick}>
            <img src={props.Project.img} alt='' className='h-[300px] w-[400px] object-cover' />
            <div className="absolute inset-[-2vmin] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)_inset]"></div>
            <div className="absolute inset-[-2.5vmin] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="invisible group-hover:visible bg-white bg-opacity-90 text-gray-700 text-center rounded-md p-4 w-[300px] transition-opacity duration-300 ease-in-out">
                <h2 className="text-xl font-semibold">{props.Project.name}</h2>
                <h3 className="text-lg">{props.Project.info}</h3>
                <h3 className="text-lg">{props.Project.stack}</h3>
              </div>
            </div>
          </div>
        </div>
      )
      
}

export default ProjectCard;
