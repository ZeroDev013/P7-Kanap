import React from "react";
import Slider from "../components/Slider";
import Dropdown from "../components/Dropdown";
import logements from '../logements.json';
import Host from "../components/Host";
import Stars from "../components/Stars";
import Content from "../components/Content";
import { useParams } from "react-router-dom";
import '../styles/content.css';

function FicheLogement() {

  //récupère l'id de l'url
  const { id } = useParams();
  //recherche et compare 
  const data = logements.find(logement => logement.id === id)

  return (
    <>
      <Slider props={data} />
      <div className="hosting">
        <Content props={data} />
        <div className="host">
          <Host props={data} />
          <div className="stars">
            <Stars rating={data.rating} maxScore="5" />
          </div>
        </div>
      </div>
      <div className="dropdown__container">
        <div className="dropdown__left">
          <Dropdown
            key={data.description}
            title={"Description"} >
            {data.description}
          </Dropdown>
        </div>
        <div className="dropdown__right">
          <Dropdown
            key={data.equipements}
            title={"Equipements"}  >
            {data.equipments.map((equipements) =>
              <li key={equipements}>
                {equipements}
              </li>
            )}
          </Dropdown>
        </div>
      </div>
    </>
  );
}

export default FicheLogement;