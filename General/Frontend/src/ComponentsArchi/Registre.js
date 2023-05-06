import React from "react";
import { useState } from "react";
import "../pages/Simulation.css";

function Registre(props) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className="Registre">
      <span className="NomReg">{props.nom}</span>
      <div className={`registre ${isClicked ? "boxShadowBlue" : ""}`} id={props.nom}
          onClick={handleClick}>
          <div className="C1">{props.Con[0]}</div>
          <div className="C2">{props.Con[1]}</div>
          <div className="C3">{props.Con[2]}</div>
          <div className="C4">{props.Con[3]}</div>
      </div>
    </div>
  );
}

export default Registre