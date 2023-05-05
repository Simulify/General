import React from "react";
import "../pages/Simulation.css";
import Flag from "./Flag";
import UalEtEuals from "./UalEtEuals";
import EualsBusDonnees from "./EualsBusDonnees";

function UalETflag(props) {
    return (
        <div className="UalEtFlag"> 
            <Flag className={props.case[4]} case1={props.case[0]} case2={props.case[1]} case3={props.case[2]} case4={props.case[3]}/>
            <UalEtEuals case={props.case}/>
            <EualsBusDonnees />
        </div>
    );
}

export default UalETflag