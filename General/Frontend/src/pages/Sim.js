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
import LightCoRam from '../ComponentsArchi/LightCoRam';
import LightRimEual1 from '../ComponentsArchi/LightRimEual1';
import LightRimUc from '../ComponentsArchi/LightRimUc';
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
const uc=new UniteCommandes(null, null, null, null)
let mem = new Array(65536)
let [Memoire,setMemoire]=useState(new memoire(mem))

let [machine,setMachine]=useState(new Machine(uc,Acc, ri, si, dx, bx, co, cx, rIM, rAM, busAdr, busData, flags, uAl, Memoire, pile))

//const UC = new UniteCommandes(null, null, null, null);     
for (let index = 0; index < mem.length; index++) {
    mem[index] = new mot_mem(index, "0000000000000000")
}
//*************************************************************************** */
    const [showPageOne, setShowPageOne] = useState(false); // to determine which page to show
    const [comp,setComp]=useState(false) // yo determine if code is compiled or no
    
    const ramm = useRef("0000")
    const rimm=useRef("0000")
    const rii=useRef("0000")
    const ual=useRef("0000")
    const uall=useRef("0000")
    const acc=useRef(Acc.value.hexa)
    const si1=useRef("0000")
    const dx1=useRef("0000")
    const bx1=useRef("0000")
    const cx1=useRef("0000")
    const flags1=useRef("0000")
    const pile1=useRef([])
    const[time,setTime]=useState(1000)
    const timeRef = useRef(0);
    const coo=useRef("0000")
    const table=useRef([])
    const tableR=useRef([])
    const tableR2=useRef([])
    const tableR3=useRef([])
    const tableAc=useRef([])
    const tableUal=useRef([])
    const tableUal2=useRef([])
    const tableSi=useRef([])
    const tableDx=useRef([])
    const tableBx=useRef([])
    const tableCx=useRef([])
    const tableFlags=useRef([])
    const tablePile=useRef([])
    let [fo,setFo]=useState("0000")//poyr co
    let [fo1,setFo1]=useState("0000")//pour ram
    let [fo2,setFo2]=useState("0000")//pour rim
    let [fo3,setFo3]=useState("0000")//pour ual
    let [fo4,setFo4]=useState(Acc.value.hexa)//pour acc
    let [fo5,setFo5]=useState("0000")//pour ual
    let [fo6,setFo6]=useState("0000")//pour uall
    let [fo7,setFo7]=useState("0000")//pour si
    let [fo8,setFo8]=useState("0000")//pour dx
    let [fo9,setFo9]=useState("0000")//pour bx  
    let [fo10,setFo10]=useState("0000")//pour cx
    let [fo11,setFo11]=useState("0000")//pour flags
    let [fo12,setFo12]=useState([])//pour pile
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
         setMachine(new Machine(uc,Acc, ri, si, dx, bx, co, cx, rIM, rAM, busAdr, busData, flags, uAl, Memoire, pile))
        console.log(machine)
        console.log(hexx)
    }
/*********************************************** */
const Traiter=(Machine,time,elements)=>{
    let Co=Machine.CO
    let busAdr=Machine.bus_adresse
    let busData=Machine.bus_donnes
    let Mem=Machine.memoire
   var RI=Machine.RI
   let here
   let som=0
   // treating instructions from ADD to CMP in UAL
   /****************************************** */
   if (parseInt(Machine.UC.Cop,2)<2 || parseInt(Machine.UC.Cop,2)==4 || (parseInt(Machine.UC.Cop,2)>=6 && parseInt(Machine.UC.Cop,2)<=10 )) {
       Machine.UAL.UAL2=Mode[parseInt(Machine.UC.Mod,2)](Machine,Machine.UC.reg,Machine.UC.C,time).value
       Machine.UAL.UAL1=Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]].value
       tableUal.current.push(Machine.UAL.UAL2.hexa)
       tableUal2.current.push(Machine.UAL.UAL1.hexa)
       console.log(time)
      setElements([...elements,<LightRimEual1 time={timeRef.current}></LightRimEual1>])
      timeRef.current += 9000
      setTimeout(()=>{
        here=document.querySelector("#Eual1")
        here.className="Eual boxShadowBlue"
        here=document.querySelector("#Eual2")
        here.className="Eual boxShadowBlue"
        ual.current=Machine.UAL.UAL2.hexa
        uall.current=Machine.UAL.UAL1.hexa
        setFo5(Machine.UAL.UAL2.hexa)
        setFo6(Machine.UAL.UAL1.hexa)
      },timeRef.current)
      timeRef.current += 1000
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
       setTimeout(()=>{
        here.className="Eual"
        here=document.querySelector("#Eual1")
        here.className="Eual"
        here=document.querySelector(".UAL")
        here.className="UAL boxShadowBlue"
       },timeRef.current)
       timeRef.current += 2000
       Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]].value=new Mot16 (Machine.UAL.executer(Machine.UC.Coprnd[parseInt(Machine.UC.Cop,2)],Machine.Flags))
       tableAc.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]].value.hexa)
       setTimeout(()=>{
        acc.current=tableAc.current.shift()
        setFo4(acc.current)
       },timeRef.current)
       timeRef.current += 1000
       
   }
   else if(parseInt(Machine.UC.Cop,2)==2 || parseInt(Machine.UC.Cop,2)==3 || parseInt(Machine.UC.Cop,2)==5){
       
       Machine.UAL.UAL1=Mode[parseInt(Machine.UC.Mod,2)](Machine,Machine.UC.reg,Machine.UC.C).value
       Machine.UAL.UAL2=Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]].value
       
       Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]].value=new Mot16 (Machine.UAL.executer(Machine.UC.Coprnd[parseInt(Machine.UC.Cop,2)],Machine.Flags))
       let mM = new mot_mem(Machine.RAM.value.entier,new Mot16("0000000000000000"))
       if (parseInt(Machine.UC.Mod,2)==1 || parseInt(Machine.UC.Mod,2)==2 || parseInt(Machine.UC.Mod,2)>=4) {
           Instructions.MOV(Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]],mM,Machine)
       }
   }
   else if(parseInt(Machine.UC.Cop,2)==11){
       Machine.UAL.UAL2=Mode[parseInt(Machine.UC.Mod,2)](Machine,Machine.UC.reg,Machine.UC.C).value
       Machine.UAL.UAL1=Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]].value
       Machine.UAL.executer(Machine.UC.Coprnd[parseInt(Machine.UC.Cop,2)],Machine.Flags)
   }
   //***************************************************** */
   //treating RAZ
   else if(parseInt(Machine.UC.Cop,2)==12){
       Instructions.RAZ(Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]].value,Machine.Flags)
   }
   //***************************************************** */
   // treating instructions from SHL to ROR 
   else if (parseInt(Machine.UC.Cop,2)>=13 && parseInt(Machine.UC.Cop,2)<17){
       let i= new Mot16(Machine.UC.C.padStart(16,"0"))
       Machine.UAL.UAL2=i
       Machine.UAL.UAL1=Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]].value
       Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]].value =new Mot16(Machine.UAL.executer(Machine.UC.Coprnd[parseInt(Machine.UC.Cop,2)],Machine.Flags))
   }
   //***************  LOOP UNTIL CX==0 ***************** */
   else if(parseInt(Machine.UC.Cop,2)==17)
   {
       let op=Mode[0](Machine,Machine.UC.reg,Machine.UC.C).value
       if (Machine.CX.value.entier==0) {
           //Co.incCO()
       } else {
           const flags=new Flags(new Mot16("0000000000000000"))
           Co.value= new Mot16(Instructions.DEC(op,flags))
           Machine.CX.DecCX()
       }
   }
   /** BCV */
   else if(parseInt(Machine.UC.Cop,2)==18){
       let op2=Mode[0](Machine,Machine.UC.reg,Machine.UC.C).value
       let op1=parseInt(Machine.UC.C,2)
       if (Instructions.BCV(op1,Machine.Flags)) {
           Co.value= new Mot16(Instructions.DEC(op2,new Flags(new Mot16("0000000000000000"))))
       }
   }
   /**BCF */
   else if (parseInt(Machine.UC.Cop,2)==19){
       let op2=Mode[0](Machine,Machine.UC.reg,Machine.UC.C).value
       let op1=parseInt(Machine.UC.C,2)
       if (Instructions.BCF(op1,Machine.Flags)) {
           Co.value= new Mot16(Instructions.DEC(op2,new Flags(new Mot16("0000000000000000"))))
       }
   }
   else if (parseInt(Machine.UC.Cop,2)==20){
       Machine.ACC=Instructions.ENT(Machine.Flags)
   }
   else if (parseInt(Machine.UC.Cop,2)==21){
       Instructions.SOR(Machine.ACC.value)
   }
   /**MOV */
   else if(parseInt(Machine.UC.Cop,2)==22){
       Instructions.MOV(Mode[parseInt(Machine.UC.Mod,2)](Machine,Machine.Machine.UC.reg,Machine.UC.C),Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]],Machine)
       
   }
   else if(parseInt(Machine.UC.Cop,2)==23){
       Instructions.CHM(Mode[parseInt(Machine.UC.Mod,2)](Machine,Machine.UC.reg,Machine.UC.C).value,Machine)
   }
   else if(parseInt(Machine.UC.Cop,2)==24){
       Instructions.RGM(Mode[parseInt(Machine.UC.Mod,2)](Machine,Machine.UC.reg,Machine.UC.C).value,Machine)
   }
   /**PUSH/POP */
   else if(parseInt(Machine.UC.Cop,2)==25){
       let op=Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]].value
       Instructions.PUSH(Machine.pile,op)
   }
   else if(parseInt(Machine.UC.Cop,2)==26){
       let op=Machine[Machine.UC.reg[parseInt(Machine.UC.R1,2)]]
       Machine.bus_donnes.transferer(Instructions.POP(Machine.pile),op)
   }
   
}
/***********************************888888888888888 */
let Mode=[function Imm(Machine,reg,C,time,elements) {
    var Co=Machine.CO
    var busAdr=Machine.bus_adresse
    var busData=Machine.bus_donnes
    var Mem=Machine.memoire
    var RI=Machine.RI
    let blue
    let som=0
        Co.incCO()//incrementer le compteur ordinal
        table.current.push(Machine.CO.value.hexa)
        console.log(table.current)
        setTimeout(()=>{
            coo.current=table.current.shift()
            setFo(coo.current)
            console.log(table.current,coo.current)
            blue=document.querySelector(".Co")
            blue.className="Co boxShadowBlue"
        },timeRef.current)
        timeRef.current += 1000
        
        busAdr.transferer(Co,Machine.RAM)//transferer l'adresse du compteur ordinal dans le bus d'adresse vers le RAM
        tableR.current.push(Machine.RAM.value.hexa)
        setTimeout(()=>{
            blue.className="Co"
            setElements([...elements,<LightCoRam time={timeRef.current}></LightCoRam>])
        },timeRef.current)
        timeRef.current += 8000
        setTimeout(()=>{
            blue=document.querySelector(".RAM")
            blue.className="RAM boxShadowBlue"
            ramm.current=tableR.current.shift()
            setFo1(ramm.current)
        },timeRef.current)
        timeRef.current += 1000
        setTimeout(()=>{
            blue.className="RAM"
            blue=document.querySelector(".Memoire")
            blue.className="Memoire boxShadowBlue"
        },timeRef.current)
        timeRef.current += 1000
        Mem.lecture(Machine.RAM,Machine.RIM)//lecture de la valeur de l'adresse du compteur ordinal dans le RAM et le mettre dans le RIM
        tableR2.current.push(Machine.RIM.value.hexa)
        setTimeout(()=>{
            blue.className="Memoire"
            blue=document.querySelector(".rim")
            blue.className="rim boxShadowBlue"
            rimm.current=tableR2.current.shift()
            setFo2(rimm.current)
        },timeRef.current)
        timeRef.current += 1000
        return Machine.RIM //retourner la valeur de l'adresse du compteur ordinal
    },function Drct(Machine,reg,C) {
        var Co=Machine.CO
        var busAdr=Machine.bus_adresse
        var busData=Machine.bus_donnes
        var Mem=Machine.memoire
        var RI=Machine.RI
        Co.incCO()
        coo.current=Co.value.hexa
        busAdr.transferer(Co,Machine.RAM)
        //setR(Machine.RAM.hexx)
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
        coo.current=Co.value.hexa
        busAdr.transferer(Co,Machine.RAM)
        setTimeout(()=>{
           // setR([machine.RAM.value.hexa[0],machine.RAM.value.hexa[1],machine.RAM.value.hexa[2],machine.RAM.value.hexa[3]])
        },4000)
        Mem.lecture(Machine.RAM,Machine.RIM)
        busData.transferer(Machine.RIM,busAdr)
        busAdr.transferer( busAdr,Machine.RAM)
        setTimeout(()=>{
           // setR([machine.RAM.value.hexa[0],machine.RAM.value.hexa[1],machine.RAM.value.hexa[2],machine.RAM.value.hexa[3]])
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
           // setR([machine.RAM.value.hexa[0],machine.RAM.value.hexa[1],machine.RAM.value.hexa[2],machine.RAM.value.hexa[3]])
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
    let blue
    let som=0
    const[hexx,setHexx]=useState([])
    const HandleToggle = () => {
        setShowPageOne(true)
        setTimeout(()=>{
            if(comp){
                co.RAZ()//RAZ co=0
                table.current.push(co.value.hexa)
                console.log(table.current)
                setTimeout(()=>{
                    coo.current=table.current.shift()
                    setFo(coo.current)
                    blue=document.querySelector(".Co")
                    console.log(blue)
                    blue.className="Co boxShadowBlue"
                },timeRef.current)
                timeRef.current += 1000
                
                machine.bus_adresse.transferer(machine.CO,machine.RAM)//co->RAM
                tableR.current.push(machine.RAM.value.hexa)
                setTimeout(()=>{
                    blue.className="Co"
                    setElements([...elements,<LightCoRam time={timeRef.current}></LightCoRam>])
                },timeRef.current)
                timeRef.current += 8000

                setTimeout(()=>{
                    blue=document.querySelector(".RAM")
                    blue.className="RAM boxShadowBlue"
                    ramm.current=tableR.current.shift()
            setFo1(ramm.current)
                },timeRef.current)
                timeRef.current += 1000
                setTimeout(()=>{
                    blue.className="RAM"
                    blue=document.querySelector(".Memoire")
                    blue.className="Memoire boxShadowBlue"
                },timeRef.current)
                timeRef.current += 1000
                machine.memoire.lecture(machine.RAM,machine.RIM)//lecture 
                tableR2.current.push(machine.RIM.value.hexa)
                setTimeout(()=>{
                    blue.className="Memoire"
                    blue=document.querySelector(".rim")
                    blue.className="rim boxShadowBlue"
                    rimm.current=tableR2.current.shift()
                    setFo2(rimm.current)
                },timeRef.current)
                timeRef.current += 1000
            
            
                setTimeout(()=>{
                    blue.className="rim"
                    setElements([...elements,<LightRimUc time={time}></LightRimUc>])
                },timeRef.current)
                timeRef.current += 8000
            machine.bus_donnes.transferer(machine.RIM,machine.RI)//rim->ri
            tableR3.current.push(machine.RI.value.hexa)
            setTimeout(()=>{
                rii.current=tableR3.current.shift()
                setFo3(rii.current)
                blue=document.querySelector(".UcEtRi")
                blue.className="UcEtRi boxShadowBlue"
            },timeRef.current)
            timeRef.current += 1000
            let Arr=machine.RI.decode();//decode la donnee de ri
            machine.UC=new UniteCommandes(Arr[0],Arr[1],Arr[2],Arr[3])
            
            setMachine(machine)
            //Co.incCO()
            let here
            console.log(coo.current)
        while (parseInt(machine.UC.Cop,2)!=27) {
            console.log("here",parseInt(machine.UC.Cop,2))
            setTimeout(()=>{
                blue.className="UcEtRi"
            },timeRef.current)
            timeRef.current += 1000
            console.log(timeRef.current)
            Traiter(machine,time,elements)
            setMachine(machine)
            machine.CO.incCO()//inc co
            table.current.push( machine.CO.value.hexa)
            console.log(table.current)
            console.log(coo.current)
            setTimeout(()=>{
                coo.current=table.current.shift()
                setFo(coo.current)
                console.log(table.current)
                blue=document.querySelector(".Co")
                blue.className="Co boxShadowBlue"
            },timeRef.current)
            timeRef.current += 1000
            machine.bus_adresse.transferer(machine.CO,machine.RAM)//co->RAM
            tableR.current.push(machine.RAM.value.hexa)
            setTimeout(()=>{
                blue.className="Co"
                setElements([...elements,<LightCoRam time={timeRef.current}></LightCoRam>])
            },timeRef.current)
            timeRef.current += 8000
            setTimeout(()=>{
                blue=document.querySelector(".RAM")
                blue.className="RAM boxShadowBlue"
                ramm.current=tableR.current.shift()
                setFo1(ramm.current)
            },timeRef.current)
            timeRef.current += 1000
            setTimeout(()=>{
                blue.className="RAM"
                blue=document.querySelector(".Memoire")
                blue.className="Memoire boxShadowBlue"
            },timeRef.current)
            timeRef.current += 1000
            machine.memoire.lecture(machine.RAM,machine.RIM)//lecture
            tableR2.current.push(machine.RIM.value.hexa)
            setTimeout(()=>{
                blue.className="Memoire"
                blue=document.querySelector(".rim")
                blue.className="rim boxShadowBlue"
                rimm.current=tableR2.current.shift()
                setFo2(rimm.current)
            },timeRef.current)
            timeRef.current += 1000
        
        
            setTimeout(()=>{
                blue.className="rim"
                setElements([...elements,<LightRimUc time={timeRef.current}></LightRimUc>])
            },timeRef.current)
            timeRef.current += 8000
        machine.bus_donnes.transferer(machine.RIM,machine.RI)//rim->ri
        tableR3.current.push(machine.RI.value.hexa)
        setTimeout(()=>{
            rii.current=tableR3.current.shift()
                setFo3(rii.current)
            blue=document.querySelector(".UcEtRi")
            blue.className="UcEtRi boxShadowBlue"
        },timeRef.current)
        timeRef.current += 2000
        setTimeout(()=>{
            blue.className="UcEtRi"
        },timeRef.current)
            Arr=machine.RI.decode()//decode la donnee de ri
            machine.UC=new UniteCommandes(Arr[0],Arr[1],Arr[2],Arr[3])
        }
        console.log(machine)}
    },2000)
        
    }
    
    return (
        <>{showPageOne ? <Simulation case1={fo5} case2={fo6} memoire={hexx} Co={fo}
         elements={elements} Ram={fo1} Rim={fo2} RI={fo3} Pile={fo12}
          ACC={fo4} SI={fo7} DI={fo8} BX={fo9} Flags={fo11} CX={fo10}/> : <Code handleToggle={HandleToggle} handleClick={HandleClick} />}
            
        </>
    )
}