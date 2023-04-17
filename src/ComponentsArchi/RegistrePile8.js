import React from "react";
import "../Simulation.css";

function RegistrePile8(props) {
  return (
    <div className="RegistrePile8">
      <div className="C1">{props.case1}</div>
      <div className="C2">{props.case2}</div>
      <div className="C3">{props.case3}</div>
      <div className="C4">{props.case4}</div>
    </div>
  );
}

export default RegistrePile8