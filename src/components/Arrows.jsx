import React from "react";
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import '../styles/arrows.css';

function Arrows({ prevSlide, nextSlide }) {
    return (
        <div className="arrows">
            <span className="prev" onClick={prevSlide}>
                <img src={arrowLeft} alt="arrow" className="arrow-left" />
            </span>
            <span className="next" onClick={nextSlide}>
                <img src={arrowRight} alt="arrow" className="arrow-right" />
            </span>
        </div>
    );
}

export default Arrows;