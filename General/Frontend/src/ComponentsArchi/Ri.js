import React from "react";
import { useState } from "react";
import "../pages/Simulation.css";

function Ri(props) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`Ri ${isClicked ? "boxShadowBlue" : ""}`}
    onClick={handleClick}>
          <div className="ram">{props.RI[0]}</div>
          <div className="ram">{props.RI[1]}</div>
          <div className="ram">{props.RI[2]}</div>
          <div className="ramf">{props.RI[3]}</div>
    </div>
  );
}

export default Ri