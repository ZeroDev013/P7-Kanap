import { Link } from 'react-router-dom';
import '../styles/card.css';

function Card({ dataCard }) {

    //récupère seulement les elements à afficher du logement
    const { id, title, cover } = dataCard;

    return (
        
        <div className="card">
            <Link to={"/logements/" + id}>
                
            <div className='card__overlay'></div>
            
            </Link>
            <div className='card__container'>
                <img className="card_cover" src={cover} alt="cover" />
                <h2> {title} </h2>
            </div>
        </div>
    )
}

export default Card;