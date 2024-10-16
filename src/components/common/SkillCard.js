const SkillCard = (props) => {
  return (
    <div className="flex flex-col items-center w-[200px]">
      <div className="relative bg-white border-[5vmin] border-solid border-gray-200 border-b-white border-t-gray-300 rounded-sm shadow-[0_0_5px_0_rgba(0,0,0,0.25)_inset,_0_5px_10px_5px_rgba(0,0,0,0.25)] inline-block">
        <div className="flex items-center justify-center w-[150px] h-[150px]">
          <img src={props.Skill.img} alt='' className='max-w-full max-h-full object-contain' />
        </div>
        <div className="absolute inset-[-2vmin] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)_inset]"></div>
        <div className="absolute inset-[-2.5vmin] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)]"></div>
      </div>
      <h3 className="mt-4 text-xl font-medium text-center">{props.Skill.name}</h3>
    </div>
  )
}

export default SkillCard;
