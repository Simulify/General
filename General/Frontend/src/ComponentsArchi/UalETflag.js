import React from "react";
import "../pages/Simulation.css";
import Flag from "./Flag";
import UalEtEuals from "./UalEtEuals";
import EualsBusDonnees from "./EualsBusDonnees";

function UalETflag(props) {
    return (
        <div className="UalEtFlag"> 
            <Flag Con={props.Flags}/>
            <UalEtEuals case1={props.case1} case2={props.case2}/>
            <EualsBusDonnees/>
        </div>
    );
}

export default UalETflag