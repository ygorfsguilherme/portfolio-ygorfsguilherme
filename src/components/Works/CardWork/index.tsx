import styled from 'styled-components'
import './CardWork.css'

function CardWork(Props : { data: any, position: number, id: number}) {
  const CardWork = styled.div `
    animation: slide 0.${Props.position * 5}s ease-in-out;

    @keyframes slide {
      0% {
        opacity: 0;
        transform: translateX(${Props.position * -320}px);
      }
      100% {
        opacity: 1;
        transform: translateX(0px);
      }
  
  `
    return (
    <CardWork className='card_work' key={Props.id}>
        <h1> <img src={Props.data.imageIcon} alt="logo enterprise" /> {Props.data.enterprise} </h1>
        <h3>{Props.data.positionHeld}</h3>
        <time>{Props.data.dateStart} - {Props.data.dateEnd}</time>
        <p>{Props.data.description}</p>
    </CardWork>
  )
}

export default CardWork