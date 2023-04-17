import React from "react";
import "../Simulation.css";

function Rim(props) {
  return (
    <div className="Rim">
      <div className="Co">{props.case1}</div>
      <div className="Co">{props.case2}</div>
      <div className="Co">{props.case3}</div>
      <div className="Co4">{props.case4}</div>
    </div>
  );
}

export default Rim