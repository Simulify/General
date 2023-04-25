import React from "react";
import "../pages/Simulation.css";
import UAL from './Ual';
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