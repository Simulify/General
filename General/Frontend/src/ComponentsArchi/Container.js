// import React, { useEffect } from "react";
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
import Commencer from "./Commencer";
import Arreter from "./Arreter";
import LightRimRam from "./LightRimRam";
import ABCD from "./ACCtoBD";
import LightCoRam from "./LightCoRam";
import LightRimUc from "./LightRimUc";
import LightRegPile from './LightRegPile';
import LightCoPile from "./LightCoPile";
import LightCoUal from "./LightCoUal";

function Container(props) {

    return (
    <div className="Container">
        <Registres/>
        <Pile/>
        <CoEtBus/>
        <BusDonnees/>
        <MemoireEtRam/>
        <UalEtBus case={props.case}/>
        <LightRegPile  time={0}/>
        <UcEtRi/>
        <RimBusDonnees/>
        <RimToRi/>
        <RimBusRi/>
        <Commencer/>
        <Arreter/>
        <LightRimRam time={0}/>
        <LightCoRam time={0}/>
        <LightRimUc time = {0} />
        <LightCoPile time={0}/>
        <LightCoUal time={0} />

    </div>
   
  );
}

export default Container