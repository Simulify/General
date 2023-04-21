import React from "react";
import "../Simulation.css";

function RegistrePile({case1, case2, case3, case4}) {
  return (
    <div className="RegistrePile">
      <div className="C1">{case1}</div>
      <div className="C2">{case2}</div>
      <div className="C3">{case3}</div>
      <div className="C4">{case4}</div>
    </div>
  );
}

export default RegistrePile