import '../styles/card.css';

function Card(propsCard) {
    return (
        <div className = "card">
            <img className= "card_cover" src={propsCard.img} alt="cover" /> 
            <p> {propsCard.title} </p>
        </div>
    )
}
 
export default Card