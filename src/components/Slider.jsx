/* import React, { useState } from 'react';
import logements from '../logements.json';
import Arrows from './Arrows';
import '../styles/slider.css'

import BtnSlider from './BtnSlider';

const Slider = ({ slides, dataSlider }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      
      {logements.map((logements, index) => {
        return  (
          
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={logements} alt="logement cover" className="images__logementCover" />      
            )}
            
          </div>
          
        );
      })}
      
    </section>
  );
};

export default Slider; */

/* import React, {usestate} from "react";
import logements from '../logements.json';
import BtnSlider from "./BtnSlider";

function Slider () {

const [slideIndex, setSlideIndex] = usestate (1)

const nexSlide = () => {

}
const prevSlide = () => {

}

  return(
    <div className="container-slider">
      {logements.map((obj, index) => {
        return (
          <div className="slide">
            <img src={logements.cover} alt="logement cover" className="images__logementCover" />
            </div>
        )
      })}
      <BtnSlider moveSlide={nexSlide} direction={"next"}/>
      <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
    </div>
  )
}

export default Slider; */

/* import React, {useState} from 'react' */
/* import { useState } from 'react'
import './Slider.css' */
/* import logements from './logements.json' */

/* export default function Slider(props) {
  const pictures = props.pictures

  const [currentPicture, setCurrentPicture] = useState (0)

  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  }

  return (
    <div className="container-slider">
      {pictures.map((obj) => (
        <img key={obj} src={obj} alt="" className={getClassName(i)} ></img>
             )) }
        </div>
      )
}   */

import '../styles/arrows.css'
import '../styles/slider.css'
import '../styles/btnSlider.css'
import { useState } from 'react'
import arrowLeft from "../assets/images/arrowLeft.svg";
import arrowRight from "../assets/images/arrowRight.svg";

function Slider({ dataSlider }) {

  const { pictures } = dataSlider;
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === pictures.lenght - 1 ? 0 : current + 1)
  };
  const prevSlide = () => {
    setCurrent(current - 1)
  };
console.log(current);
  return (

    <div className="sliders">
      <div className='container__picture'>
        {pictures.map((pictures, index) =>
          <div
            key={index}
            className={
              index === current
                ? "slider slide_picture-active"
                : "slider"
            }
          >
            <img src={pictures} alt="pictures" className="picture" />
          </div>)
        }
        <span className="prev" onClick={prevSlide}>
          <img src={arrowLeft} alt="arrow" className="arrow-left" />
        </span>
        <span className="next" onClick={nextSlide}>
          <img src={arrowRight} alt="arrow" className="arrow-right" />
        </span>
      </div>
    </div>
  )

}

export default Slider;

