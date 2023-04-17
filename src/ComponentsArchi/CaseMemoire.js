import React from "react";
import "../Simulation.css";

function CaseMemoire(props) {
  return (
    <div className="CaseMemoire">
      <div className="case">{props.case1}</div>
      <div className="case">{props.case2}</div>
      <div className="case">{props.case3}</div>
      <div className="case">{props.case4}</div>
    </div>
  );
}

export default CaseMemoire