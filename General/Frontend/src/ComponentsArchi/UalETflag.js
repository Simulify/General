import React from "react";
import "../pages/Simulation.css";
import Flag from "./Flag";
import UalEtEuals from "./UalEtEuals";
import EualsBusDonnees from "./EualsBusDonnees";

function UalETflag(props) {
    return (
        <div className="UalEtFlag"> 
            <Flag case1="0" case2="0" case3="0" case4="0"/>
            <UalEtEuals case1={props.case1} case2={props.case2}/>
            <EualsBusDonnees/>
        </div>
    );
}

export default UalETflag