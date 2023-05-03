import React from "react";
import "../pages/Simulation.css";
import Ram from "./Ram";
import MemoireEtRim from "./MemoireEtRim";

function MemoireEtRam(props) {
  return (
    <div className="MemoireEtRam">
        <Ram case1="0" case2="0" case3="0" case4="0"/>
        <MemoireEtRim memoire={props.memoire}/>
    </div>
  );
}

export default MemoireEtRam