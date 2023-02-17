import React from "react";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";
import logements from '../logements.json';
import Host from "../components/Host";
import Stars from "../components/Stars";
import { useParams } from "react-router-dom";
import '../styles/content.css';
import Content from "../components/Content";

function FicheLogement() {

  const logement = logements;
  //récupère l'id de l'url
  const { id } = useParams();
  //recherche et compare 
  const data = logement.find(logement => logement.id === id)

  return (
    <>
      <Slider slides={logements} />
      <div className="container">
        <div className="container__left">
          <Content dataContent={data} />
        </div>
        <div className="container__right">
          <Host dataHost={data} />
          <div className="stars">
            <Stars dataStar={data} />
          </div>
        </div>
      </div>
      <div className="dropdown">
        <Dropdown>
        </Dropdown>
      </div>
    </>
  );

}

export default FicheLogement;