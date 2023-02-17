import '../styles/stars.css';
import star from "../assets/images/star.svg";
import starBlack from "../assets/images/starblack.svg";

function Stars(props) { 
    const { rating, maxScore } = props;
    const stars = [];

    for (let i = 1; i <= maxScore; i++) {
        if (i <= rating)
            stars.push(<img className='stars' src={star} alt="stars" />)
        else
            stars.push(<img className='stars' src={starBlack} alt="stars" />)
    }
    return (
        <>  
            {stars}
        </>
    );
}

export default Stars;