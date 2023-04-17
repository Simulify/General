import React from "react";
import "../Simulation.css";
import Pile from "./Pile";
import PileBus from "./PileBus";

function PileEtBus(){
    return(
        <div className="PileEtBus">
            <Pile/>
            <PileBus/>
        </div>
    );
}

export default PileEtBus