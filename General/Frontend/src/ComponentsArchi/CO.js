import React, { useState } from "react";
import "../pages/Simulation.css";

function CO(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [case1, setCase1] = useState(props.case1);
  const [case2, setCase2] = useState(props.case2);
  const [case3, setCase3] = useState(props.case3);
  const [case4, setCase4] = useState(props.case4);

  const handleClick = () => {
    setIsClicked(!isClicked);
    // Modify the values of the props
    setCase1("New Value 1");
    setCase2("New Value 2");
    setCase3("New Value 3");
    setCase4("New Value 4");
  };

  return (
    <div className="CO">
      <div>CO</div>
      <div className={`Co ${isClicked ? "boxShadowBlue" : ""}`}
      onClick={handleClick}>
        <div className="C1">{case1}</div>
        <div className="C2">{case2}</div>
        <div className="C3">{case3}</div>
        <div className="C4">{case4}</div>
      </div>
    </div>
  );
}

export default CO;
