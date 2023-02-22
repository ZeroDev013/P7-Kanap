/* import React from "react";
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";
import { useState } from "react";

function BtnSlider(direction, moveSlide) {
    
    const [current, setCurrent] = useState(0);

  const next = () => {
    if (current === pictures.lenght - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1)
    }
  }
  const prevSlide = () => {
    setCurrent(current - 1);
  };
    return (

        <button
            onClick={moveSlide}
            className={direction === "next" ? 'btn-slide next' : "btn-slide prev"}>
            <img src={moveSlide === "next" ? arrowRight : arrowLeft} alt="" className="image__arrows"/>
        </button>
        
    );
}

export default BtnSlider; */


