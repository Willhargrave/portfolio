import SkillItems from "../data/SkillItems";
import SkillCard from "./common/SkillCard";
function Skills() {
  return (
    <div className="mt-12 mb-24">
      <h2 className="font-cinzel text-6xl font-bold text-center mb-8">Skills</h2>
      <hr className="w-1/2 mx-auto my-4 border-gray-300" />
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10"></div>
        <div className="flex overflow-x-auto pb-6 hide-scrollbar">
          <div className="flex flex-nowrap gap-60 px-8">
            {SkillItems.map((Skill, index) => (
              <div key={index} className="flex-none">
                <SkillCard Skill={Skill} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
