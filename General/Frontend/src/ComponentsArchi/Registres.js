import React from "react";
import Registre from "./Registre";
import "../pages/Simulation.css";
import RegToBusDonnees from "./RegToBusDonnees";

function Registres() {
  return (
    <div className="Registres">
        <div className="NomRegistres">Registres</div>
        <div className="registres">
            <Registre className="Bx" nom="BX" case1="0" case2="0" case3="0" case4="0"/>
            <Registre className="Cx" nom="CX" case1="0" case2="0" case3="0" case4="0"/>
            <Registre className="Dx" nom="DX" case1="0" case2="0" case3="0" case4="0"/>
            <Registre className="Si"nom="SI" case1="0" case2="0" case3="0" case4="0"/>
            <Registre className="Acc" nom="ACC" case1="0" case2="0" case3="0" case4="0"/>
        </div>
        <RegToBusDonnees/>
    </div>
  );
}

export default Registres