import React from "react";
import arrowLeft from "../assets/images/arrowLeft.svg";

import '../styles/arrows.css';

function Arrows({ prevSlide, nextSlide }) {
    return (
        <div className="arrows">
            <span className="prev" onClick={prevSlide}>
                <img src={arrowLeft} alt="arrow" className="arrow-left" />
            </span>
        </div>
    );
}

export default Arrows;