import React from "react";
import Registres from "./Registres";
import "../pages/Simulation.css";

function RegistreEtNom() {
  return (
    <div className="RegistreEtNom">
       <div className="NomReg">
            <div id="Bx" className="Nom">Bx</div>
            <div id="Cx" className="Nom">Cx</div>
            <div id="Dx"className="Nom">Dx</div>
            <div id="Si"className="Nom">Si</div>
            <div id="Acc" className="Nom">Acc</div>
       </div>
       <Registres/>

    </div>
  );
}

export default RegistreEtNom
