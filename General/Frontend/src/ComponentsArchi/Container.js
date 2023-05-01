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
// import LightRiUc from "./LightRiUc";
import LightRimRam from "./LightRimRam";
import AcctoBD from "./ACCtoBD";
import LightCoRam from "./LightCoRam";
import LightRimUc from "./LightRimUc";

function Container() {
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
        <Registres/>
        <Pile/>
        <CoEtBus/>
        <BusDonnees/>
        <MemoireEtRam/>
        <UalEtBus/>
        <UcEtRi/>
        <RimBusDonnees/>
        <RimToRi/>
        <RimBusRi/>
        {/* <LightCo destination=".CoToRam .rectangle" destination2=".Ram .ram2"/> */}
        <Commencer/>
        <Arreter/>
        <LightRimRam/> 
        <AcctoBD/>
        <LightCoRam/>
        <LightRimUc/>
    </div>
   
  );
}

export default Container