import React from "react";
import { useState } from "react";
import "./Simulation.css";

function Registre({nom, case1, case2, case3, case4}) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className="Registre">
      <span className="NomReg">{nom}</span>
      <div className={`registre ${isClicked ? "boxShadowBlue" : ""}`}
          onClick={handleClick}>
          <div className="C1">{case1}</div>
          <div className="C2">{case2}</div>
          <div className="C3">{case3}</div>
          <div className="C4">{case4}</div>
      </div>
    </div>
  );
}

export default Registre