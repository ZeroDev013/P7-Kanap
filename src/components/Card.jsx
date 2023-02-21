import '../styles/card.css';
import { Link } from 'react-router-dom';

function Card({ dataCard }) {

    //récupère seulement les elements à afficher du logement
    const { id, title, cover } = dataCard;

    return (
        <div className="card">
            <Link to={"/logements/" + id}>             
                <img className="card_cover" src={cover} alt="cover" />
            </Link>
            <h2> {title} </h2>
        </div>
    )
}

export default Card;