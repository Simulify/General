import React from "react";
import { useState } from "react";
import "../pages/Simulation.css";

function Ram({case1, case2, case3, case4}) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className="Ram">
      <div className="NomRam">Ram</div>
      <div className={`RAM ${isClicked ? "boxShadowBlue" : ""}`}
    onClick={handleClick}>
        <div className="ram1">{case1}</div>
        <div className="ram2">{case2}</div>
        <div className="ram3">{case3}</div>
        <div className="ram4">{case4}</div>
      </div>
      
    </div>
  );
}

export default Ram