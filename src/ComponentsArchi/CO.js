import React from "react";
import "../Simulation.css";

function CO({case1, case2, case3, case4}) {
  return (
    <div className="CO">
        <div>CO</div>
        <div className="Co">
            <div className="C1">{case1}</div>
            <div className="C2">{case2}</div>
            <div className="C3">{case3}</div>
            <div className="C4">{case4}</div>
        </div>
      
    </div>
  );
}

export default CO