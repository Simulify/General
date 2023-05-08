import React from "react";
import "../pages/Simulation.css";
import Ram from "./Ram";
import MemoireEtRim from "./MemoireEtRim";

function MemoireEtRam(props) {
  return (
    <div className="MemoireEtRam">
        <Ram Ram={props.Ram}/>
        <MemoireEtRim memoire={props.memoire} Rim={props.Rim}  mot={props.mot}/>
    </div>
  );
}

export default MemoireEtRam