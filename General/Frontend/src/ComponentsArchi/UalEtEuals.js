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
          <Euals case={props.case}/>
        </div>
    );
}

export default UalEtEuals