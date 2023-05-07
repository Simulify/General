import React from "react";
import Registre from "./Registre";
import "../pages/Simulation.css";
import RegToBusDonnees from "./RegToBusDonnees";

function Registres(props) {
  return (
    <div className="Registres">
        <div className="NomRegistres">Registres</div>
        <div className="registres">

            <Registre nom="Bx" Con={props.BX}/>
            <Registre nom="Cx" Con={props.CX}/>
            <Registre nom="Dx" Con={props.DI}/>
            <Registre nom="Si" Con={props.SI} />
            <Registre nom="Acc" Con={props.ACC}/>


        </div>
        <RegToBusDonnees/>
    </div>
  );
}

export default Registres