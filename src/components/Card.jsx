import '../styles/card.css';
import { Link } from 'react-router-dom';

function Card({data}) {

    //récupère seulement les elements à affiché du logement
    const {id, title, cover} = data;

    return (
        <div className="card">
            <Link to={id}>
                <img className="card_cover" src={cover} alt="cover" />
            </Link>
            <h2> {title} </h2>
        </div>
    )
}

export default Card;