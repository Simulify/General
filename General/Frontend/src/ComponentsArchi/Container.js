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
import LightCoPile from "./LightCoPile";
import LightCoUal from "./LightCoUal";
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
  // useEffect(()=>
  // {
  //   var el=document.querySelector('.ButtonExecution');
  //   el.addEventListener('click',()=>
  //   {
  //     var el2=document.querySelector('.LightMove')
  //     el2.classList.add('Light');
  //   })
  // })

    return (
    <div className="Container">
        <Registres case={props.case}/>
        <Pile/>
        <CoEtBus case={props.case}/>
        <BusDonnees/>
        <MemoireEtRam case={props.case}/>
        <UalEtBus case={props.case}/>
        <UcEtRi case={props.case}/>
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