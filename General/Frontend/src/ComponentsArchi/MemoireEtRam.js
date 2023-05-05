import React from "react";
import "../pages/Simulation.css";
import Ram from "./Ram";
import MemoireEtRim from "./MemoireEtRim";

function MemoireEtRam(props) {
  return (
    <div className="MemoireEtRam">
        <Ram className={props.case[4]} case1={props.case[0]} case2={props.case[1]} case3={props.case[2]} case4={props.case[3]}/>
        <MemoireEtRim case={props.case}/>
    </div>
  );
}

export default MemoireEtRam