import styled from "styled-components"
import "./CardSkill.css"

function CardSkill(Props: {img: string}) {
  return (
    <div className='card_skill'>
        <img src={Props.img} alt="" />
    </div>
  )
}

export default CardSkill