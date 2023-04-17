import React from "react";
import "../Simulation.css";
import Rim from "./Rim";
import Memoire from "./Memoire";

function MemoireRim(props) {
  return (
    <div className="MemoireRim">
        <Memoire/>
        <Rim case1="0" case2="0" case3="0" case4="0" />
    </div>
  );
}

export default MemoireRim