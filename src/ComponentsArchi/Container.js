import React from "react";
import Registres from "./RegistresEtBus.js";
import Pile from "./PileEtBus.js";
import "../Simulation.css";
import COBus from "./COBus.js";
import MemoireRam from "./MemoireRam.js";
import BusDonnees from "./BusDonnees.js";
import Ual from "./Ual.js";
import Euals from "./Euals.js";
import Flags from "./Flags.js";
import UC from "./UC.js";
import RimToUc from "./RimToUc.js";
import UalBusDonnees from "./UalBusDonnees.js";
import UcBusDonnees from "./UcBusDonnees.js";
import BusDonneesEual from "./BusDonneesEual.js";
import BusEual from "./BusEual.js";
import RimBusDonnees from "./RimBusDonnees.js";
import Ri from "./Ri.js";
function Container() {
    return (
      <div className="container">
            <Registres/>
            <Pile/>
            <COBus/>
            <MemoireRam/>
            <BusDonnees/>
            <Ual/>
            <Euals/>
            <Flags case1="0" case2="0" case3="0" case4="0" />
            <UC/>
            <Ri case1="0" case2="0" case3="0" case4="0" />
            <RimToUc/>
            <UalBusDonnees/>
            <UcBusDonnees/>
            <BusDonneesEual/>
            <BusEual/>
            <RimBusDonnees/>
      </div>
    );
}

export default Container;