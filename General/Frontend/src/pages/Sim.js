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
let Memoire 
let machine = new Machine(Acc, ri, si, dx, bx, co, cx, rIM, rAM, busAdr, busData, flags, uAl, Memoire, pile);
        const UC = new UniteCommandes(null, null, null, null);
        
for (let index = 0; index < mem.length; index++) {
    mem[index] = new mot_mem(index, "0000000000000000")
}
export function Sim(params) {
    const [showPageOne, setShowPageOne] = useState(false);
    const [comp,setComp]=useState(false)
    const [elements,setElements]=useState([])
    const[hexx,setHexx]=useState([])
    const[coo,setCoo]=useState([0,0,0,0,0])
    const updateElem = (newelement) => {
        setElements([...elements,newelement]);
        console.log(elements)
      };
      
    const[ax,setACC]=useState([0,0,0,0,""])
    const handleToggle = () => {
        setShowPageOne(true)
            if(comp){UC.Execute(machine,document.querySelector('.Container'),updateElem,elements,setACC,ax,coo,setCoo)
        console.log(ax)}
            
        
    }
   
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
         Memoire = new memoire(mem)
         machine = new Machine(Acc, ri, si, dx, bx, co, cx, rIM, rAM, busAdr, busData, flags, uAl, Memoire, pile);
        console.log(machine)
        console.log(hexx)
    }
    return (
        <>{showPageOne ? <Simulation case={ax} memoire={hexx} Co={coo} elements={elements} /> : <Code handleToggle={handleToggle} handleClick={HandleClick} />}
            
        </>
    )
}