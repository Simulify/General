import React from "react";
import "../pages/Simulation.css";
import BusEuals from "./BusEuals";
import UalETflag from "./UalETflag";

function UalEtBus() {
    return (
        <div className="UalEtBus">
            <UalETflag/>
            <BusEuals/>
           
        </div>
    );
}

export default UalEtBus