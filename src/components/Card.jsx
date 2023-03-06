import { useNavigate } from 'react-router-dom';
import '../styles/card.css';

function Card({ props }) {

    const { id, title, cover } = props;
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