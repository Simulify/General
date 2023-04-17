import React from "react";
import "../Simulation.css";
import MemoireRim from "./MemoireRim";
import Ram from "./Ram";
import RimToRi from "./RimToRi"

function MemoireRam(props) {
  return (
    <div className="MemoireRam">
        <Ram case1="0" case2="0" case3="0" case4="0" />
        <MemoireRim/>
        <RimToRi/>
    </div>
  );
}

export default MemoireRam