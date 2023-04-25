import React from "react";
import Registres from "./Registres";
import "../pages/Simulation.css";

function RegistreEtNom() {
  return (
    <div className="RegistreEtNom">
       <div className="NomReg">
            <div  className="Nom">Bx</div>
            <div  className="Nom">Cx</div>
            <div  className="Nom">Dx</div>
            <div  className="Nom">Si</div>
            <div  className="Nom">Acc</div>
       </div>
       <Registres/>

    </div>
  );
}

export default RegistreEtNom
