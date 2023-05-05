import React, { useState } from "react";
import "../pages/Simulation.css";

function CO(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="CO">
      <div>CO</div>
      <div id="Co" className={className=`Co ${isClicked ? "boxShadowBlue" : ""}`}
      onClick={handleClick}>
        <div className="C1">{props.Co[0]}</div>
        <div className="C2">{props.Co[1]}</div>
        <div className="C3">{props.Co[2]}</div>
        <div className="C4">{props.Co[3]}</div>
      </div>
    </div>

  );
}

export default CO;
