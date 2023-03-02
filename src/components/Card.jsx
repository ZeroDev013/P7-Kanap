import { useNavigate } from 'react-router-dom';
import '../styles/card.css';

function Card({ dataCard }) {

    //récupère seulement les elements à afficher du logement
    const { id, title, cover } = dataCard;
    const navigate = useNavigate();

    const navigateToFiche = () => {
        navigate(`/logements/${id}`)
    }

    return (

        <div className="card" onClick={navigateToFiche}>
            <img className="card_cover" src={cover} alt="cover" />
            <h2 className='card_title'> {title} </h2>
        </div>
    )
}

export default Card;