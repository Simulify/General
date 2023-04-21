import React from "react";
import "../Simulation.css";
import Flag from "./Flag";
import UalEtEuals from "./UalEtEuals";
import EualsBusDonnees from "./EualsBusDonnees";

function UalETflag() {
    return (
        <div className="UalEtFlag"> 
            <Flag case1="0" case2="0" case3="0" case4="0"/>
            <UalEtEuals/>
            <EualsBusDonnees/>
        </div>
    );
}

export default UalETflag