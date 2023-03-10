import star from "../assets/images/star.svg";
import starBlack from "../assets/images/starblack.svg";
import '../styles/stars.css';

function Stars(props) { 

    const { rating, maxScore } = props;
    const stars = [];

    for (let i = 1; i <= maxScore; i++) {
        if (i <= rating)
            stars.push(<img key={i} className='imageStars' src={star} alt="stars" />)
        else
            stars.push(<img key={i} className='imageStars' src={starBlack} alt="stars" />)
    }
    return (
        <>   
            {stars}
        </>
    );
}

export default Stars;