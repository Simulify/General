import React from "react";
import "../pages/Simulation.css";
import Uc from "./UC";
import Ri from "./Ri";
import BusUcToRi from "./BusUcToRi";
import UcBusDonnees from "./UcBusDonnees";

function UcEtRi() {
    return (
        <div className="UcEtRi">
            <UcBusDonnees/>
            <Uc/> 
            <BusUcToRi/>
            <Ri case1="0" case2="0" case3="0" case4="0"/>
        </div>
    );
}

export default UcEtRi