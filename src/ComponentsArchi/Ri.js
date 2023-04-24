import React from "react";
import { useState } from "react";
import "../Simulation.css";

function Ri({case1, case2, case3, case4}) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={`Ri ${isClicked ? "boxShadowBlue" : ""}`}
    onClick={handleClick}>
          <div className="ram">{case1}</div>
          <div className="ram">{case2}</div>
          <div className="ram">{case3}</div>
          <div className="ramf">{case4}</div>
    </div>
  );
}

export default Ri