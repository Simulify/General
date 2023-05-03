import React from "react";
import "../pages/Simulation.css";
import Memoire from "./Memoire";
import Rim from "./Rim";

function MemoireEtRim(props) {
  return (
    <div className="MemoireEtRim">
        <div>Mémoire</div>
        <Memoire memoire={props.memoire}/>
        <Rim nom="Rim" case1="0" case2="0" case3="0" case4="0"/>
    </div>
  );
}

export default MemoireEtRim