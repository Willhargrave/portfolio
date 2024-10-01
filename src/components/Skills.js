import SkillItems from "./SkillItems";
import SkillCard from "./SkillCard";
function Skills() {
    return (
        <div className="mt-12 mb-24">
          <h2 id="skill" className="text-3xl font-semibold text-center">Skills</h2>
          <hr className="w-1/2 mx-auto my-4 border-gray-300" />
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {SkillItems.map((Skill, index) => <SkillCard key={index} Skill={Skill} />)}
            </div>
          </div>
        </div>
      )
}

export default Skills;
