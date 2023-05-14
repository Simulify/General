import React, { useState } from "react";
import "../pages/Simulation.css";
import Pile from "./Pile";
import Registres from "./Registres";
import MemoireEtRam from "./MemoireEtRam";
import CoEtBus from "./CoEtBus";
import BusDonnees from "./BusDonnees";
import UalEtBus from "./UalEtBus";
import UcEtRi from "./UcEtRi";
import RimBusDonnees from "./RimBusDonnees";
import RimToRi from "./RimToRi";
import RimBusRi from "./RimBusRi";
import Arreter from "./Arreter";

import FinSimulation from "./FinSimulation";


function Container(props) {

  const [showPopup, setShowPopup] = useState(false);

  const handleStop = () => {
    setShowPopup(true);
  }

    return (
      
    <div className="Container">
        <Registres ACC={props.ACC} SI={props.SI} DI={props.DI} BX={props.BX} CX={props.CX}/>
        <Pile Pile={props.Pile}/>
        <CoEtBus Co={props.Co}/>
        <BusDonnees/>
        <MemoireEtRam memoire={props.memoire} Ram={props.Ram} Rim={props.Rim}  mot={props.mot}/>
        <UalEtBus case1={props.case1} case2={props.case2} Flags={props.Flags}/>
        <UcEtRi RI={props.RI}/>
        <RimBusDonnees />
        <RimBusDonnees/>
        <RimToRi/>
        <RimBusRi/>
        {/* Lorsqu'on clique sur le button arreter la page devient floue et l'élément FinSimulation sera affiché*/}
        <Arreter onClick={handleStop} />
        {showPopup && (
        <div className="overlay">
              <FinSimulation/>
        </div>
        )}
    </div>
  );
}

export default Container