import React from "react";
import { useState } from "react";
import "../pages/Simulation.css";

function Ram({className, case1, case2, case3, case4}) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className="Ram">
      <div className="NomRam">Ram</div>
      <div id="Ram" className={className=`RAM ${isClicked ? "boxShadowBlue" : ""}`}
    onClick={handleClick}>
        <div id={`ram${case1}`} className="ram1">{case1}</div>
        <div id={`ram${case2}`} className="ram2">{case2}</div>
        <div id={`ram${case3}`} className="ram3">{case3}</div>
        <div id={`ram${case4}`} className="ram4">{case4}</div>
      </div>
      
    </div>
  );
}

export default Ram