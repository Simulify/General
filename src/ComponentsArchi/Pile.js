import React from "react";
import RegistrePile from "./RegistrePile";
import { useState } from "react";
import "../Simulation.css";

function Pile() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  const casesData = [];

  // Boucle pour générer les données de chaque case
  for (let i = 0; i < 20; i++) {
    casesData.push({ case1: "0", case2: "0", case3: "0", case4: "0" });
  }

  // Boucle pour générer les composants RegsitrePile avec les données générées
  const registrePile = casesData.map(({ case1, case2, case3, case4 }, index) => (
    <RegistrePile
      key={index}
      case1={case1}
      case2={case2}
      case3={case3}
      case4={case4}
    />
  ));

  return <div className="Pile">
      <div className="NomPile"> Pile </div>
      <div className="pile">
          {registrePile}
      </div>
      <div className="PileBusDonnees">
          <div className="triangleHaut"></div>
          <div className={`rectangle ${isClicked ? "boxShadowBlue" : ""}`}
              onClick={handleClick}></div>
          <div className="triangleBas"></div>
      </div>
  </div>
}

export default Pile;
