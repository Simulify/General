import React from "react";
import "../Simulation.css";

function Ram({case1, case2, case3, case4}) {
  return (
    <div className="Ram">
      <div className="NomRam">Ram</div>
      <div className="RAM">
        <div className="ram">{case1}</div>
        <div className="ram">{case2}</div>
        <div className="ram">{case3}</div>
        <div className="ramf">{case4}</div>
      </div>
      
    </div>
  );
}

export default Ram