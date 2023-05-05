import React from "react";
import "../pages/Simulation.css";
import Uc from "./UC";
import Ri from "./Ri";
import BusUcToRi from "./BusUcToRi";
import UcBusDonnees from "./UcBusDonnees";

function UcEtRi(props) {
    return (
        <div className="UcEtRi">
            <UcBusDonnees/>
            <Uc/> 
            <BusUcToRi/>
            <Ri RI={props.RI}/>
        </div>
    );
}

export default UcEtRi