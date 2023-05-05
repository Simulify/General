import React from "react";
import "../pages/Simulation.css";
import Memoire from "./Memoire";
import Rim from "./Rim";

function MemoireEtRim(props) {
  return (
    <div className="MemoireEtRim">
        <div>Mémoire</div>
        <Memoire/>
        <Rim className={props.case[4]} nom="Rim" case1={props.case[0]} case2={props.case[1]} case3={props.case[2]} case4={props.case[3]}/>
    </div>
  );
}

export default MemoireEtRim