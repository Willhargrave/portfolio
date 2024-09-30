const SkillCard = (props) => {
  return (
      <div className="Card">
      <div className="Skill-img">
      <img src={props.Skill.img} alt='' className='CardImg'/>
      </div>
      <h3>{props.Skill.name}</h3>
      </div>

  )
}

export default SkillCard;
