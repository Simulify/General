import React from "react";
import "../pages/Simulation.css";
import Memoire from "./Memoire";
import Rim from "./Rim";

function MemoireEtRim(props) {
  return (
    <div className="MemoireEtRim">
        <div>Mémoire</div>
        <Memoire memoire={props.memoire}/>
        <Rim Rim={props.Rim} nom="RIM"/>
    </div>
  );
}

export default MemoireEtRim