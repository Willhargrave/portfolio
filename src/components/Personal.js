import PersonalCard from "./PersonalCard";
import TravelCard from "./PersonalCardOther";
import japanex from './images/japanex.png'
function Personal() {

  return (
    <div id="personal" className="mt-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Personal</h2>
        <hr className="my-4 border-gray-300" />
        <p className="text-lg">
          Thanks for checking out my growing portfolio, here's some of my other interests outside of coding
        </p>
      </div>
      <div className="flex justify-evenly items-stretch flex-wrap gap-8 mx-12">
        <PersonalCard />
        <img 
          src={japanex} 
          alt="personal" 
          className="w-[300px] h-[300px] rounded-2xl shadow-[0_0_5px_0_rgba(0,0,0,0.25)_inset,_0_5px_10px_5px_rgba(0,0,0,0.25)]"
        />
        <TravelCard />
      </div>
    </div>
  )
  }

  export default Personal;
