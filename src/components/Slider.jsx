/* import React from "react";
import '../styles/slider.css';
import logements from '../logements.json';


function Slider() {

    return (

        <div className="fichesLogements">

            {logements.map((logement) => (

                <div className="imageSlider" key={logement.id}>
                    <div className="images">
                        <img src={logement.cover} alt="logement cover" className="images__logementCover" />
                    </div>
                </div>
            ))}
        </div>
        
    );
}
console.log(logements);
export default Slider; */


import React, { useState } from 'react';
import logements from '../logements.json';
import Arrows from './Arrows';
import '../styles/slider.css'

const Slider = ({ slides }) => {
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
      <Arrows className='left-arrow' onClick={prevSlide} />
      <Arrows className='right-arrow' onClick={nextSlide} />
      {logements.map((logements, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <img src={logements.cover} alt="logement cover" className="images__logementCover" />      
            )}
            
          </div>
          
        );
      })}
    </section>
  );
};

export default Slider;