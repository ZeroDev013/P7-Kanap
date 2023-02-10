import React from "react";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";
import logements from '../logements.json';
import star from "../assets/images/star.svg";
import '../styles/content.css';

function FicheLogement() {

  return (
    <>
      <Slider slides={logements} />
      <div className="container">
        <div className="container__left">
          <div className="title">
            <h1 className="title__text"> Cozy loft on the Canal Saint-Martin </h1>
          </div>
          <div className="location">
            <h2 className="location__text">Paris,île de France</h2>
          </div>
          <div className="buttons">
            <button>Cozy</button>
            <button>Canal</button>
            <button>Paris 10</button>
          </div>
        </div>
        <div className="container__right">
          <div className="container__host">
            <div className="host">
              <h2 className="host__name">
                Alexandre Dumas
              </h2>
            </div>
            <div className="photo">
              <div className="photo__host">
              </div>
            </div>
          </div>
          <div className="stars">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
      </div>
      
      <>
        
          <Dropdown></Dropdown>
       
      </>
    </>
  );

}

export default FicheLogement;