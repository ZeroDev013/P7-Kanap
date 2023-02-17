import '../styles/stars.css';
import star from "../assets/images/star.svg";

function Stars(dataStar) { 

    return (
        <>  
        <img className='stars' src={star} alt="stars" />            
        </>
    );
}

export default Stars;