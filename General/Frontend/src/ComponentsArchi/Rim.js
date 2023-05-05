import React from "react";
import { useState } from "react";
import "../pages/Simulation.css";

function Rim({className, nom, case1, case2, case3, case4}) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="Rim">
      <div id="Rim" className={className=`rim ${isClicked ? "boxShadowBlue" : ""}`}
          onClick={handleClick}>
          <div id={`C${case1}`} className="C1">{case1}</div>
          <div id={`C${case2}`} className="C2">{case2}</div>
          <div id={`C${case3}`} className="C3">{case3}</div>
          <div id={`C${case4}`} className="C4">{case4}</div>
      </div>
      <span className="NomRim">{nom}</span>
    </div>
  );
}

export default Rim