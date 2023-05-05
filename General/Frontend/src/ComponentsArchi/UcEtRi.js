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
            <Ri className={props.case[4]} case1={props.case[0]} case2={props.case[1]} case3={props.case[2]} case4={props.case[3]}/>
        </div>
    );
}

export default UcEtRi