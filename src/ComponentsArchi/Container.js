import React, { useEffect } from "react";
import "../Simulation.css";
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
import Light from "./Light";
function Container() {
  useEffect(()=>
  {
    var el=document.querySelector('.Container');
    el.addEventListener('click',()=>
    {
      var el2=document.querySelector('.LightMove')
      el2.classList.add('Light');
    })
  })
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
        <Light/>
    </div>
   
  );
}

export default Container