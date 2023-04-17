import React from "react";
import "../Simulation.css";

function CO(props) {
  return (
    <div className="CO">
      <div className="Co">{props.case1}</div>
      <div className="Co">{props.case2}</div>
      <div className="Co">{props.case3}</div>
      <div className="Co4">{props.case4}</div>
    </div>
  );
}

export default CO