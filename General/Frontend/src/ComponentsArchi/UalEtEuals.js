import React from "react";
import "../pages/Simulation.css";
import UAL from './Ual';
import Euals from "./Euals";
import UalBusDonnees from "./UalBusDonnees";

function UalEtEuals(props) {
    return (
        <div className="UalEtEuals"> 
          <UalBusDonnees/>
          <UAL/>
          <Euals case1={props.case1} case2={props.case2}/>
        </div>
    );
}

export default UalEtEuals