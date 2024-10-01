import "./style/personal.css"
import PersonalCard from "./PersonalCard";
import TravelCard from "./PersonalCardOther";
import japanex from './images/japanex.png'
function Personal() {

    return (
      <div id="personal">
        <div className="personal-title">
        <h2>Personal</h2>
        <hr></hr>
        <p>Thanks for checking out my growing portfolio, here's some of my other interests outside of coding</p>
        </div>
        <div className="personal">
            <PersonalCard />
            <img src={japanex} alt="personal"className="personal-img"/>
            <TravelCard />
        </div>
      </div>
    )
  }

  export default Personal;
