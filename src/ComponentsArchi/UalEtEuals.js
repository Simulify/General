import React from "react";
import "../Simulation.css";
import UAL from './UAL';
import Euals from "./Euals";
import UalBusDonnees from "./UalBusDonnees";

function UalEtEuals() {
    return (
        <div className="UalEtEuals"> 
          <UalBusDonnees/>
          <UAL/>
          <Euals/>
        </div>
    );
}

export default UalEtEuals