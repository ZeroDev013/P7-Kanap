import '../styles/stars.css';
import star from "../assets/images/star.svg";
import logements from '../logements.json';

function Stars(dataStar) { 

    /* const { rating } = dataStar; */

    return (
        <>
            {logements.map( () => {
                return <img className='stars' src={star} alt="stars" />
            })}             
        </>
    );
}

export default Stars;