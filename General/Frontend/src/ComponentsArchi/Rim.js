import React from "react";
import { useState } from "react";
import "../pages/Simulation.css";

function Rim(props) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="Rim">
      <div id="Rim" className={className=`rim ${isClicked ? "boxShadowBlue" : ""}`}
          onClick={handleClick}>
          <div className="C1">{props.Rim[0]}</div>
          <div className="C2">{props.Rim[1]}</div>
          <div className="C3">{props.Rim[2]}</div>
          <div className="C4">{props.Rim[3]}</div>
      </div>
      <span className="NomRim">{props.nom}</span>
    </div>
  );
}

export default Rim