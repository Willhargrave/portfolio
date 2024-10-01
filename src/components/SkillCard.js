const SkillCard = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative bg-white ml-4 border-[5vmin] border-solid border-gray-200 border-b-white border-t-gray-300 rounded-sm shadow-[0_0_5px_0_rgba(0,0,0,0.25)_inset,_0_5px_10px_5px_rgba(0,0,0,0.25)] inline-block">
        <img src={props.Skill.img} alt='' className='w-[100px] h-[100px] object-cover' />
        <div className="absolute inset-[-2vmin] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)_inset]"></div>
        <div className="absolute inset-[-2.5vmin] rounded-sm shadow-[0_2px_5px_0_rgba(0,0,0,0.25)]"></div>
      </div>
      <h3 className="mt-2 text-lg font-medium">{props.Skill.name}</h3>
    </div>
  )
}

export default SkillCard;
