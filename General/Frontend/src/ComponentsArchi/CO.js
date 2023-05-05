import React, { useState } from "react";
import "../pages/Simulation.css";

function CO({className, case1, case2, case3, case4}) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="CO">
      <div>CO</div>
      <div id="Co" className={className=`Co ${isClicked ? "boxShadowBlue" : ""}`}
      onClick={handleClick}>
        <div id={`C${case1}`} className="C1">{case1}</div>
        <div id={`C${case2}`} className="C2">{case2}</div>
        <div id={`C${case3}`} className="C3">{case3}</div>
        <div id={`C${case4}`} className="C4">{case4}</div>
      </div>
    </div>

  );
}

export default CO;
