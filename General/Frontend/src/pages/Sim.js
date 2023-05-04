import React, { createElement, useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import Code from './Code';
import { createRoot } from 'react-dom/client';
import Simulation from './Simulation';
import Navbar from '../components/Navbar';
import Button from '../components/Buttonn'
import Side from '../components/side'
import next from '../Images/next.svg'
import { Link } from 'react-router-dom';
import  ReactDOM  from 'react-dom';
import Mot16 from '../Logic/Logic/src/Mot16.js';
import Flags from '../Logic/Logic/src/Flags.js';
import Instructions from '../Logic/Logic/src/Instructions';
import ACC from '../Logic/Logic/src/Registres/ACC.js';
import BX from '../Logic/Logic/src/Registres/BX.js';
import DX from '../Logic/Logic/src/Registres/DX.js';
import CX from '../Logic/Logic/src/Registres/CX.js';
import SI from '../Logic/Logic/src/Registres/SI.js';
import RI from '../Logic/Logic/src/Registres/RI.js';
import RIM from '../Logic/Logic/src/Registres/RIM.js';
import RAM from '../Logic/Logic/src/Registres/RAM.js';
import CO from '../Logic/Logic/src/Registres/CO.js';
import bus_adresses from '../Logic/Logic/src/bus_adresse.js';
import bus_donnees from '../Logic/Logic/src/bus_donnes.js';
import memoire from '../Logic/Logic/src/memoire.js';
import Pile from '../Logic/Logic/src/Pile.js';
import UAL from '../Logic/Logic/src/UAL.js';
import UniteCommandes from '../Logic/Logic/src/UNiteCommandes.js';
import mot_mem from '../Logic/Logic/src/mot_mem.js';
import Machine from '../Logic/Logic/src/Machine.js';
import { BinToMnem, Compile, Coprnd, Decoup, reg } from '../Logic/Logic/src/functions.js';
import ABCD from '../ComponentsArchi/ACCtoBD';
import { render } from 'react-dom';
export function Sim() {
    /// initialisation des instances de classes
const mot16 = new Mot16("0000000000000000");
const mot = new Mot16("0000000000000111");
const flags = new Flags(new Mot16("0000000000000000"));
const Acc = new ACC(mot);
const bx = new BX(new Mot16("0000000000000000"));
const dx = new DX(new Mot16("0000000000000000"));
const cx = new CX(new Mot16("0000000000000000"));
const si = new SI(new Mot16("0000000000000000"));
const ri = new RI(new Mot16("0000000000000000"));
const rIM = new RIM(new Mot16("0000000000000000"));
const rAM = new RAM(new Mot16("0000000000000000"));
const co = new CO(new Mot16("0000000000000000"));
const busAdr = new bus_adresses("0000000000000000");
const busData = new bus_donnees("0000000000000000");
let arr1 = []
const pile = new Pile(arr1, 0)
const ual1 = new Mot16("0000000000000000")
const ual2 = new Mot16("0000000000000000")
const uAl = new UAL(ual1, ual2);
let mem = new Array(65536)
let [Memoire,setMemoire]=useState(new memoire(mem))

let [machine,setMachine]=useState(new Machine(Acc, ri, si, dx, bx, co, cx, rIM, rAM, busAdr, busData, flags, uAl, Memoire, pile))

const UC = new UniteCommandes(null, null, null, null);     
for (let index = 0; index < mem.length; index++) {
    mem[index] = new mot_mem(index, "0000000000000000")
}
//*************************************************************************** */
    const [showPageOne, setShowPageOne] = useState(false); // to determine which page to show
    const [comp,setComp]=useState(false) // yo determine if code is compiled or no
    const[coo,setCoo]=useState("0000")
    const[ramm,setR]=useState("0000")
    const[rimm,setRimm]=useState("0000")
    const[rii,setRii]=useState("0000")
    const HandleClick = (event) => {
        let phrases = Compile(Decoup(document.querySelector('textarea').value))
        setComp(true)
        let adr = 0
        let arr = []
        
        for (let index = 0; index < phrases.length; index++) {
            const element = phrases[index]
            if (Array.isArray(element)) {
                for (let i = 0; i < element.length; i++) {
                    let value = element[i];
                    hexx.push(parseInt(value,2).toString(16).padStart(4,"0"))
                    setHexx(hexx)
                    const motmem = new mot_mem(adr, value)
                    arr.push(motmem)
                    adr = adr + 1
                }
            }
            else {
                arr.push(new mot_mem(adr, element))
                hexx.push(parseInt(element,2).toString(16).padStart(4,"0"))
                setHexx(hexx)
                adr = adr + 1
            }
        }
       for (let index = 0; index < hexx.length; index++) {
        const element = hexx[index];
        hexx[index]=element.split("")
       }
       setHexx(hexx)
        mem.splice(0, arr.length, ...arr)
         let Mem = new memoire(mem)
         setMemoire(Mem)
         setMachine(new Machine(Acc, ri, si, dx, bx, co, cx, rIM, rAM, busAdr, busData, flags, uAl, Memoire, pile))
        console.log(machine)
        console.log(hexx)
    }
/*********************************************** */
const Traiter=(Machine,UC)=>{
    let Co=Machine.CO
    let busAdr=Machine.bus_adresse
    let busData=Machine.bus_donnes
    let Mem=Machine.memoire
   var RI=Machine.RI
   let here=[]
   // treating instructions from ADD to CMP in UAL
   /****************************************** */
   if (parseInt(UC.Cop,2)<2 || parseInt(UC.Cop,2)==4 || (parseInt(UC.Cop,2)>=6 && parseInt(UC.Cop,2)<=10 )) {
       Machine.UAL.UAL2=Mode[parseInt(UC.Mod,2)](Machine,UC.reg,UC.C).value
       // if(parseInt(UC.R1,2)==0){
       //     elements.push(<ABCD></ABCD>)
       //    setElements(elements)
       //    setTimeout(()=>{
       //    here[0]=(Machine[UC.reg[parseInt(UC.R1,2)]].value.hexa[0])
       //    here[1]=(Machine[UC.reg[parseInt(UC.R1,2)]].value.hexa[1])
       //    here[2]=(Machine[UC.reg[parseInt(UC.R1,2)]].value.hexa[2])
       //    here[3]=(Machine[UC.reg[parseInt(UC.R1,2)]].value.hexa[3])
       //    here[4]=("boxShadowBlue")
       //    setACC(here)
          
       // },7000)
       // let here1=[]
       // setTimeout(()=>{
       //     here1[0]=(Machine[UC.reg[parseInt(UC.R1,2)]].value.hexa[0])
       //    here1[1]=(Machine[UC.reg[parseInt(UC.R1,2)]].value.hexa[1])
       //    here1[2]=(Machine[UC.reg[parseInt(UC.R1,2)]].value.hexa[2])
       //    here1[3]=(Machine[UC.reg[parseInt(UC.R1,2)]].value.hexa[3])
       //    here1[4]=("")
       //    console.log(ax,here1)
       //    setACC(here1)
       //    },9000)
       // }
       Machine.UAL.UAL1=Machine[UC.reg[parseInt(UC.R1,2)]].value
       Machine[UC.reg[parseInt(UC.R1,2)]].value=new Mot16 (Machine.UAL.executer(UC.Coprnd[parseInt(UC.Cop,2)],Machine.Flags))
   }
   else if(parseInt(UC.Cop,2)==2 || parseInt(UC.Cop,2)==3 || parseInt(UC.Cop,2)==5){
       
       Machine.UAL.UAL1=Mode[parseInt(UC.Mod,2)](Machine,UC.reg,UC.C).value
       Machine.UAL.UAL2=Machine[UC.reg[parseInt(UC.R1,2)]].value
       
       Machine[UC.reg[parseInt(UC.R1,2)]].value=new Mot16 (Machine.UAL.executer(UC.Coprnd[parseInt(UC.Cop,2)],Machine.Flags))
       let mM = new mot_mem(Machine.RAM.value.entier,new Mot16("0000000000000000"))
       if (parseInt(UC.Mod,2)==1 || parseInt(UC.Mod,2)==2 || parseInt(UC.Mod,2)>=4) {
           Instructions.MOV(Machine[UC.reg[parseInt(UC.R1,2)]],mM,Machine)
       }
   }
   else if(parseInt(UC.Cop,2)==11){
       Machine.UAL.UAL2=Mode[parseInt(UC.Mod,2)](Machine,UC.reg,UC.C).value
       Machine.UAL.UAL1=Machine[UC.reg[parseInt(UC.R1,2)]].value
       Machine.UAL.executer(UC.Coprnd[parseInt(UC.Cop,2)],Machine.Flags)
   }
   //***************************************************** */
   //treating RAZ
   else if(parseInt(UC.Cop,2)==12){
       Instructions.RAZ(Machine[UC.reg[parseInt(UC.R1,2)]].value,Machine.Flags)
   }
   //***************************************************** */
   // treating instructions from SHL to ROR 
   else if (parseInt(UC.Cop,2)>=13 && parseInt(UC.Cop,2)<17){
       let i= new Mot16(UC.C)
       Machine.UAL.UAL2=i
       Machine.UAL.UAL1=Machine[UC.reg[parseInt(UC.R1,2)]].value
       Machine[UC.reg[parseInt(UC.R1,2)]].value =new Mot16(Machine.UAL.executer(UC.Coprnd[parseInt(UC.Cop,2)],Machine.Flags))
   }
   //***************  LOOP UNTIL CX==0 ***************** */
   else if(parseInt(UC.Cop,2)==17)
   {
       let op=Mode[0](Machine,UC.reg,UC.C).value
       if (Machine.CX.value.entier==0) {
           //Co.incCO()
       } else {
           const flags=new Flags(new Mot16("0000000000000000"))
           Co.value= new Mot16(Instructions.DEC(op,flags))
           Machine.CX.DecCX()
       }
   }
   /** BCV */
   else if(parseInt(UC.Cop,2)==18){
       let op2=Mode[0](Machine,UC.reg,UC.C).value
       let op1=parseInt(UC.C,2)
       if (Instructions.BCV(op1,Machine.Flags)) {
           Co.value= new Mot16(Instructions.DEC(op2,new Flags(new Mot16("0000000000000000"))))
       }
   }
   /**BCF */
   else if (parseInt(UC.Cop,2)==19){
       let op2=Mode[0](Machine,UC.reg,UC.C).value
       let op1=parseInt(UC.C,2)
       if (Instructions.BCF(op1,Machine.Flags)) {
           Co.value= new Mot16(Instructions.DEC(op2,new Flags(new Mot16("0000000000000000"))))
       }
   }
   else if (parseInt(UC.Cop,2)==20){
       Machine.ACC=Instructions.ENT(Machine.Flags)
   }
   else if (parseInt(UC.Cop,2)==21){
       Instructions.SOR(Machine.ACC.value)
   }
   /**MOV */
   else if(parseInt(UC.Cop,2)==22){
       Instructions.MOV(Mode[parseInt(UC.Mod,2)](Machine,UC.reg,UC.C),Machine[UC.reg[parseInt(UC.R1,2)]],Machine)
       
   }
   else if(parseInt(UC.Cop,2)==23){
       Instructions.CHM(Mode[parseInt(UC.Mod,2)](Machine,UC.reg,UC.C).value,Machine)
   }
   else if(parseInt(UC.Cop,2)==24){
       Instructions.RGM(Mode[parseInt(UC.Mod,2)](Machine,UC.reg,UC.C).value,Machine)
   }
   /**PUSH/POP */
   else if(parseInt(UC.Cop,2)==25){
       let op=Machine[UC.reg[parseInt(UC.R1,2)]].value
       Instructions.PUSH(Machine.pile,op)
   }
   else if(parseInt(UC.Cop,2)==26){
       let op=Machine[UC.reg[parseInt(UC.R1,2)]]
       Machine.bus_donnes.transferer(Instructions.POP(Machine.pile),op)
   }
   
}
/***********************************888888888888888 */
let Mode=[function Imm(Machine,reg,C) {
    var Co=Machine.CO
    var busAdr=Machine.bus_adresse
    var busData=Machine.bus_donnes
    var Mem=Machine.memoire
    var RI=Machine.RI
        Co.incCO()
        setTimeout(()=>{
            setCoo([machine.CO.value.hexa[0],machine.CO.value.hexa[1],machine.CO.value.hexa[2],machine.CO.value.hexa[3]])
        },6000)
        busAdr.transferer(Co,Machine.RAM)
        setTimeout(()=>{
            setR([machine.RAM.value.hexa[0],machine.RAM.value.hexa[1],machine.RAM.value.hexa[2],machine.RAM.value.hexa[3]])
        },4000)
        Mem.lecture(Machine.RAM,Machine.RIM)
        setTimeout(()=>{
            setRimm([machine.RIM.value.hexa[0],machine.RIM.value.hexa[1],machine.RIM.value.hexa[2],machine.RIM.value.hexa[3]])
        },4000)
        return Machine.RIM
    },function Drct(Machine,reg,C) {
        var Co=Machine.CO
        var busAdr=Machine.bus_adresse
        var busData=Machine.bus_donnes
        var Mem=Machine.memoire
        var RI=Machine.RI
        Co.incCO()
        setCoo([Co.value.hexa[0],Co.value.hexa[1],Co.value.hexa[2],Co.value.hexa[3]])
        busAdr.transferer(Co,Machine.RAM)
        setR(Machine.RAM.hexx)
        Mem.lecture(Machine.RAM,Machine.RIM)
        busData.transferer(Machine.RIM,busAdr)
        busAdr.transferer( busAdr,Machine.RAM)
        //here i'm assuming that transfer operation will return the data it's transferring
        Mem.lecture(Machine.RAM,Machine.RIM)
       
        //busData.transferer(Machine.RIM.envoyer(),Machine.UAL.UAL1.recevoir())
        return Machine.RIM
    },function Indrct(Machine,reg,C) {
        var Co=Machine.CO
        var busAdr=Machine.bus_adresse
        var busData=Machine.bus_donnes
        var Mem=Machine.memoire
        var RI=Machine.RI
        Co.incCO()
        setCoo([Co.value.hexa[0],Co.value.hexa[1],Co.value.hexa[2],Co.value.hexa[3]])
        busAdr.transferer(Co,Machine.RAM)
        setTimeout(()=>{
            setR([machine.RAM.value.hexa[0],machine.RAM.value.hexa[1],machine.RAM.value.hexa[2],machine.RAM.value.hexa[3]])
        },4000)
        Mem.lecture(Machine.RAM,Machine.RIM)
        busData.transferer(Machine.RIM,busAdr)
        busAdr.transferer( busAdr,Machine.RAM)
        setTimeout(()=>{
            setR([machine.RAM.value.hexa[0],machine.RAM.value.hexa[1],machine.RAM.value.hexa[2],machine.RAM.value.hexa[3]])
        },4000)
        //here i'm assuming that transfer operation will return the data it's transferring
        Mem.lecture(Machine.RAM,Machine.RIM)
        busData.transferer(Machine.RIM,busAdr)
        busAdr.transferer( busAdr,Machine.RAM)
        Mem.lecture(Machine.RAM,Machine.RIM)
        //busData.transferer(Machine.RIM.envoyer(),Machine.UAL.UAL1.recevoir())
        return Machine.RIM
    },function Reg(Machine,reg,C) {
        //busData.transferer(Machine[reg[parseInt(UC.C,2)]].envoyer(),Machine.UAL.UAL1.recevoir())
        return Machine[reg[parseInt(C,2)]]
        //here Machine[...] to can access attributes dynamically i'm not sure if it'll work
    },function Base(Machine,reg,C) {
        var Co=Machine.CO
        var busAdr=Machine.bus_adresse
        var busData=Machine.bus_donnes
        var Mem=Machine.memoire
        var RI=Machine.RI
        busData.transferer(Machine.BX,busAdr)
        busAdr.transferer( busAdr,Machine.RAM)
        setTimeout(()=>{
            setR([machine.RAM.value.hexa[0],machine.RAM.value.hexa[1],machine.RAM.value.hexa[2],machine.RAM.value.hexa[3]])
        },4000)
        Mem.lecture(Machine.RAM,Machine.RIM)
        //busData.transferer(Machine.RIM.envoyer(),Machine.UAL.UAL1.recevoir())
        return Machine.RIM
    },function Indexe(Machine,reg,C) {
        var Co=Machine.CO
        var busAdr=Machine.bus_adresse
        var busData=Machine.bus_donnes
        var Mem=Machine.memoire
        var RI=Machine.RI
        busData.transferer(Machine.SI,busAdr)
        busAdr.transferer( busAdr,Machine.RAM)
        //busData.transferer(Machine.RIM.envoyer(),Machine.UAL.UAL1.recevoir())
        Mem.lecture(Machine.RAM,Machine.RIM)
        return Machine.RIM
    },function Bindexe(Machine,reg,C) {
        var Co=Machine.CO
        var busAdr=Machine.bus_adresse
        var busData=Machine.bus_donnes
        var Mem=Machine.memoire
        var RI=Machine.RI
        var Res= (Machine.SI.value.entier+Machine.BX.value.entier).toString(2).padStart(16,"0")
        busAdr.transferer(new Mot16(Res),Machine.RAM)
        Mem.lecture(Machine.RAM,Machine.RIM)
        
        return Machine.RIM
    },function Relatif(Machine,reg,C) {
        var Co=Machine.CO
        var busAdr=Machine.bus_adresse
        var busData=Machine.bus_donnes
        var Mem=Machine.memoire
        var RI=Machine.RI
        busData.transferer(Machine[reg[parseInt(C,2)]],busAdr)
        busAdr.transferer( busAdr,Machine.RAM)
        Mem.lecture(Machine.RAM,Machine.RIM)
        return Machine.RIM
    }]
    /**************************************************************************** */
    const [elements,setElements]=useState([])
    const[hexx,setHexx]=useState([])
      
    const[ual,setUAL]=useState("0000")
    const[uall,setUALL]=useState("0000")
    const HandleToggle = () => {
        setShowPageOne(true)
            if(comp){
                co.RAZ()
                console.log(machine)
            machine.bus_adresse.transferer(co,machine.RAM)
            setTimeout(()=>{
                setR([machine.RAM.value.hexa[0],machine.RAM.value.hexa[1],machine.RAM.value.hexa[2],machine.RAM.value.hexa[3]])
            },4000)
            machine.memoire.lecture(machine.RAM,machine.RIM)
            setTimeout(()=>{
                setRimm([machine.RIM.value.hexa[0],machine.RIM.value.hexa[1],machine.RIM.value.hexa[2],machine.RIM.value.hexa[3]])
            },4000)
            machine.bus_donnes.transferer(machine.RIM,machine.RI)
            setTimeout(()=>{
                setRii([machine.RI.value.hexa[0],machine.RI.value.hexa[1],machine.RI.value.hexa[2],machine.RI.value.hexa[3]])
            },6000)
            let Arr=machine.RI.decode();
            UC.Cop=Arr[0];UC.Mod=Arr[1];UC.R1=Arr[2];UC.C=Arr[3]
            //Co.incCO()
            let here
        while (parseInt(UC.Cop,2)!=27) {
            //console.log("here",parseInt(UC.Cop,2))
            Traiter(machine,UC)
            machine.CO.incCO()
            setTimeout(()=>{
                setCoo([machine.CO.value.hexa[0],machine.CO.value.hexa[1],machine.CO.value.hexa[2],machine.CO.value.hexa[3]])
            },6000)
            
            machine.bus_adresse.transferer(machine.CO,machine.RAM)
            setTimeout(()=>{
                setR([machine.RAM.value.hexa[0],machine.RAM.value.hexa[1],machine.RAM.value.hexa[2],machine.RAM.value.hexa[3]])
            },4000)
            machine.memoire.lecture(machine.RAM,machine.RIM)
            setTimeout(()=>{
                setRimm([machine.RIM.value.hexa[0],machine.RIM.value.hexa[1],machine.RIM.value.hexa[2],machine.RIM.value.hexa[3]])
            },4000)
            machine.bus_donnes.transferer(machine.RIM,machine.RI)
            setTimeout(()=>{
                setRii([machine.RI.value.hexa[0],machine.RI.value.hexa[1],machine.RI.value.hexa[2],machine.RI.value.hexa[3]])
            },6000)
            Arr=machine.RI.decode()
            UC.Cop=Arr[0];UC.Mod=Arr[1];UC.R1=Arr[2];UC.C=Arr[3]
        }
        console.log(machine)}
            
        
    }
   
   
    return (
        <>{showPageOne ? <Simulation case1={ual} case2={uall} memoire={hexx} Co={coo} elements={elements} Ram={ramm} Rim={rimm} RI={rii}/> : <Code handleToggle={HandleToggle} handleClick={HandleClick} />}
            
        </>
    )
}