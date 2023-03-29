import './CardWork.css'

function CardWork(Props : { data: any }) {
  return (
    <div className='card_work'>
        <h1> <img src={Props.data.imageIcon} alt="logo enterprise" /> {Props.data.enterprise} </h1>
        <h3>{Props.data.positionHeld}</h3>
        <time>{Props.data.dateStart} - {Props.data.dateEnd}</time>
        <p>{Props.data.description}</p>
    </div>
  )
}

export default CardWork