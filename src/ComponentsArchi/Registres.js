import React from "react";
import Registre from "./Registre";
import "../Simulation.css";
import RegToBusDonnees from "./RegToBusDonnees";

function Registres() {
  return (
    <div className="Registres">
        <div>Registres</div>
        <div className="registres">
            <Registre case1="0" case2="0" case3="0" case4="0"/>
            <Registre case1="0" case2="0" case3="0" case4="0"/>
            <Registre case1="0" case2="0" case3="0" case4="0"/>
            <Registre case1="0" case2="0" case3="0" case4="0"/>
            <Registre case1="0" case2="0" case3="0" case4="0"/>
        </div>
        <RegToBusDonnees/>
    </div>
  );
}

export default Registres
