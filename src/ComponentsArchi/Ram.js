import React from "react";
import { useState } from "react";
import "../Simulation.css";

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
        <div className="ram">{case1}</div>
        <div className="ram">{case2}</div>
        <div className="ram">{case3}</div>
        <div className="ramf">{case4}</div>
      </div>
      
    </div>
  );
}

export default Ram