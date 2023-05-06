import React from "react";
import "../pages/Simulation.css";
import BusEuals from "./BusEuals";
import UalETflag from "./UalETflag";

function UalEtBus(props) {
    return (
        <div className="UalEtBus">
            <UalETflag case1={props.case1} case2={props.case2} Flags={props.Flags}/>
            <BusEuals/>
           
        </div>
    );
}

export default UalEtBus