import React from "react";
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";

function BtnSlider(direction, moveSlide) {
    
    return (

        <button
            onClick={moveSlide}
            className={direction === "next" ? 'btn-slide next' : "btn-slide prev"}>
            <img src={moveSlide === "next" ? arrowRight : arrowLeft} alt="" className="image__arrows"/>
        </button>
        
    );
}

export default BtnSlider;


