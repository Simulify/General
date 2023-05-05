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
import LightCoRam from "./LightCoRam";
import LightRimUc from "./LightRimUc";
import LightCoPile from "./LightCoPile";
import LightCoUal from "./LightCoUal";

import LightPileReg from "./LightPileReg";
import LightRimReg from "./LightRimReg";

import LightPileCo from "./LightPileCo";
import LightUalCo from "./LightUalCo";
import LightRimEual1 from "./LightRimEual1";
import LightEual1Rim from "./LightEual1Rim";
import LightRegRim from "./LightRegRim";
import LightRegUal from "./LightRegUal";
import LightUalReg from "./LightUalReg";
import LightFlagPile from "./LightFlagPile";
import LightPileFlag from "./LightPileFlag";
import LightFlagUal from "./LightFlagUal";


function Container(props) {

    return (
    <div className="Container">
        <Registres/>
        <Pile/>
        <CoEtBus Co={props.Co}/>
        <BusDonnees/>
        <MemoireEtRam memoire={props.memoire} Ram={props.Ram} Rim={props.Rim} />
        <UalEtBus case1={props.case1} case2={props.case2}/>
        <UcEtRi RI={props.RI}/>
        <RimBusDonnees />
        <RimBusDonnees/>
        <RimToRi/>
        <RimBusRi/>
        <Commencer/>
        <Arreter/>
        {/* <LightCoRam time = {0}/> */}
        {/* <LightRimRam time = {0}/ */}
        {/* <LightRimUc time = {0}/> */}
        {/* <LightCoPile time = {0}/>*/}
        {/* <LightCoUal time = {0}/> */}
        {/* <LightPileCo time={0}/>  */}
        {/* <LightUalCo time={0}/>   */}
        {/* <LightRimEual1 time={0}/>*/}
        {/* <LightEual1Rim time={0}/> */}
        {/* <ABCD time={0} reg="#ACC" ></ABCD>  */}
        {/* <LightRegRim time={0}/> */}
        {/* <LightRegUal time={0}/> */}
        {/* <LightUalReg time={0}/> */}
        {/* <LightFlagPile time={0}/> */}
        {/* <LightPileFlag time={0}/> */}
        <LightFlagUal time={0}/>
    </div>
   
  );
}

export default Container