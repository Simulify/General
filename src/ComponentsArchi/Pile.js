import React from "react";
import "../Simulation.css";
import RegistrePile from "./RegistrePile";
import RegistrePile8 from "./RegistrePile8";

function Pile() {
    return(
        <div className="Pile">
        <RegistrePile case1="0" case2="0" case3="0" case4="0"/>
        <RegistrePile case1="0" case2="0" case3="0" case4="0"/>
        <RegistrePile case1="0" case2="0" case3="0" case4="0"/>
        <RegistrePile case1="0" case2="0" case3="0" case4="0"/>
        <RegistrePile case1="0" case2="0" case3="0" case4="0"/>
        <RegistrePile case1="0" case2="0" case3="0" case4="0"/>
        <RegistrePile case1="0" case2="0" case3="0" case4="0"/>
        <RegistrePile8 case1="0" case2="0" case3="0" case4="0"/>
      </div>
    );
}

export default Pile