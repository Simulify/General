import React from "react";
import "../Simulation.css";

function Ram(props) {
  return (
    <div className="Ram">
      <div className="ram">{props.case1}</div>
      <div className="ram">{props.case2}</div>
      <div className="ram">{props.case3}</div>
      <div className="ramf">{props.case4}</div>
    </div>
  );
}

export default Ram