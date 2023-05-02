
import Flags from './Flags.js';
import ACC from './Registres/ACC.js';
import Mot16 from './Mot16.js';
import BX from './Registres/BX.js';
import DX from './Registres/DX.js';
import CX from './Registres/CX.js';
import SI from './Registres/SI.js';
import RI from './Registres/RI.js';
import RIM from './Registres/RIM.js';
import RAM from './Registres/RAM.js';
import CO from './Registres/CO.js';
import bus_adresses from './bus_adresse.js';
import bus_donnees from './bus_donnes.js';
import memoire from './memoire.js';
import Pile from './Pile.js';
import UAL from './UAL.js';
import UniteCommandes from './UNiteCommandes.js';
import mot_mem from './mot_mem.js';
import Machine from './Machine.js';
import { BinToMnem, Compile, Coprnd, Decoup, reg } from './functions.js';
const mot16 = new Mot16("0000000000000000");
const mot = new Mot16("0000001000000111");
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
let arr1=[]
const pile = new Pile(arr1,0)
const ual1 = new Mot16("0000000000000000")
const ual2 = new Mot16("0000000000000000")
const uAl = new UAL(ual1, ual2);
let mem =new Array(65536)
for (let index = 0; index < mem.length; index++) {
    mem[index]=new mot_mem(index,"0000000000000000")
}
let text =`MOV ACC 2
ICI: SUB ACC 1
CMP ACC 0
BCF 6 ICI
STOP`
let phrases = Decoup(text)
console.log(phrases)
 //at the end i'll have phrases which 2D array each element 
//is an array of decomposed words of a phrase
phrases=Compile(phrases)
console.log(phrases)
let bin=phrases.toString()
let adr=0
let arr=[]
for (let index = 0; index < phrases.length; index++) {
    const element = phrases[index]
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        let value = element[i];
        const motmem= new mot_mem(adr,value)
        arr.push(motmem)
        adr=adr+1
    }  
    }
    else{ arr.push(new mot_mem(adr,element))
        adr=adr+1}
    
}

mem.splice(0,arr.length, ...arr)
const Memoire = new memoire(mem)

const machine = new Machine(Acc,ri,si,dx,bx,co,cx,rIM,rAM,busAdr,busData,flags,uAl,Memoire,pile);
const UC = new UniteCommandes(null,null,null,null);
UC.execute(machine);
console.log(machine.ACC,machine.pile,machine.CX,machine.DX,machine.BX)
console.log(machine.memoire.memory[0])
//  let mo=""
//  let mots=[]
//  for (let index = 0; index < bin.length; index++) {
//      const element = bin[index]
//      if (element==",") {
//          mots.push(mo)
//          mo=""
//      } else {
//          mo=mo+element
//      }
//  }
//  mots.push(mo)
 