import React from "react";
import Registre from "./Registre";
import "../Simulation.css";
import RegToBusDonnees from "./RegToBusDonnees";

function Registres() {
  return (
    <div className="Registres">
        <div className="NomRegistres">Registres</div>
        <div className="registres">
            <Registre nom="Bx" case1="0" case2="0" case3="0" case4="0"/>
            <Registre nom="Cx" case1="0" case2="0" case3="0" case4="0"/>
            <Registre nom="Dx" case1="0" case2="0" case3="0" case4="0"/>
            <Registre nom="Si" case1="0" case2="0" case3="0" case4="0"/>
            <Registre nom="Acc" case1="0" case2="0" case3="0" case4="0"/>
        </div>
        <RegToBusDonnees/>
    </div>
  );
}

export default Registres
