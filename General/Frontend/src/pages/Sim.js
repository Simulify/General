import React from 'react';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Code from './Code';
import Simulation from './Simulation';
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
import "../ComponentsArchi/Light.css"
import { Compile, Decoup, ErreurSyntax } from '../Logic/Logic/src/functions.js';
import FinSimulation from '../ComponentsArchi/FinSimulation';
export function Sim() {
    useEffect(() => {
        const state = localStorage.getItem('isAuthenticated');
        if (state) {
            localStorage.removeItem('isAuthenticated');
            localStorage.setItem('removedAuthenticated', 'true');
        }
    },);
    function isBinary(value) {
        return /^[01]+$/.test(value);
    }
    function isHexadecimal(value) {
        return /^[0-9A-F]+$/i.test(value);
    }
    function isDecimal(value) {
        return !isNaN(value);
    }

    /// initialisation des instances de classes
    const mot = new Mot16("0000000000010011");
    const flags = new Flags(new Mot16("0000000000000000"));
    const Acc = new ACC(mot);
    const bx = new BX(new Mot16("0000000000000010"));
    const dx = new DX(new Mot16("0000000000000111"));
    const cx = new CX(new Mot16("0000000000011111"));
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
    const uc = new UniteCommandes(null, null, null, null)
    let mem = new Array(65536)
    let [Memoire, setMemoire] = useState(new memoire(mem))
    let [machine, setMachine] = useState(new Machine(uc, Acc, ri, si, dx, bx, co, cx, rIM, rAM, busAdr, busData, flags, uAl, Memoire, pile))

    for (let index = 0; index < mem.length; index++) {
        mem[index] = new mot_mem(index, "0000000000000000")
    }

    //******************************************************************************************/
    const [showPageOne, setShowPageOne] = useState(false); // to determine which page to show
    const [comp, setComp] = useState(false) // yo determine if code is compiled or no
    let temp = useRef([])
    const ramm = useRef("0000")
    const rimm = useRef("0000")
    const rii = useRef("0000")
    const ual = useRef("0000")
    const uall = useRef("0000")
    const acc = useRef(Acc.value.hexa)
    const si1 = useRef(si.value.hexa)
    const dx1 = useRef(dx.value.hexa)
    const bx1 = useRef(bx.value.hexa)
    const cx1 = useRef(cx.value.hexa)
    const flags1 = useRef("0000")
    const timeRef = useRef(0);
    const coo = useRef("0000")
    const table = useRef([])
    const tableR = useRef([])
    const tableR2 = useRef([])
    const tableR3 = useRef([])
    const tableAc = useRef([])
    const tableUal = useRef([])
    const tableUal2 = useRef([])
    const tableSi = useRef([])
    const tableDx = useRef([])
    const tableBx = useRef([])
    const tableCx = useRef([])
    const tableFlags = useRef([])
    let [fo, setFo] = useState("0000")//poyr co
    let [fo1, setFo1] = useState("0000")//pour ram
    let [fo2, setFo2] = useState("0000")//pour rim
    let [fo3, setFo3] = useState("0000")//pour ual
    let [fo4, setFo4] = useState(Acc.value.hexa)//pour acc
    let [fo5, setFo5] = useState("0000")//pour ual
    let [fo6, setFo6] = useState("0000")//pour uall
    let [fo7, setFo7] = useState(si.value.hexa)//pour si
    let [fo8, setFo8] = useState(dx.value.hexa)//pour dx
    let [fo9, setFo9] = useState(bx.value.hexa)//pour bx  
    let [fo10, setFo10] = useState(cx.value.hexa)//pour cx
    let [fo11, setFo11] = useState("0000")//pour flags
    let [fo12, setFo12] = useState([])//pour pile
    let [fo13, setFo13] = useState([])//pour mem
    const [dyna, setdyna] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const myRef = useRef(null);
    const myRef1 = useRef(null);
    const pos = useRef({ x: 0, y: 0 })
    const tabPos = useRef([])
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const pos1 = useRef({ x: 0, y: 0 })
    const tabPos1 = useRef([])
    const [position1, setPosition1] = useState({ x: 0, y: 0 })

    /*On découpe le texte en phrases*/
    const HandleClick = (event) => {
        try {
            let phrases = []
            console.log(document.querySelectorAll('textarea')[0].value)
            phrases = Compile(Decoup(document.querySelectorAll('textarea')[0].value))
            console.log(phrases[phrases.length - 1])
            if (phrases[phrases.length - 1] !== "0110110000000000") {
                throw new ErreurSyntax("!Erreur Syntaxique : Le programme doit se terminer par l'instruction STOP")
            }
            setComp(true)
            let adr = 0
            let arr = []
            for (let index = 0; index < phrases.length; index++) {
                const element = phrases[index]
                if (Array.isArray(element)) {
                    for (let i = 0; i < element.length; i++) {
                        let value = element[i];
                        hexx.push(parseInt(value, 2).toString(16).padStart(4, "0"))
                        temp.current.push(parseInt(value, 2).toString(16).padStart(4, "0"))
                        setHexx(hexx)
                        const motmem = new mot_mem(adr, value)
                        arr.push(motmem)
                        adr = adr + 1
                    }
                    console.log(hexx)
                }
                else {
                    arr.push(new mot_mem(adr, element))
                    hexx.push(parseInt(element, 2).toString(16).padStart(4, "0"))
                    temp.current.push(parseInt(element, 2).toString(16).padStart(4, "0"))
                    setHexx(hexx)
                    adr = adr + 1
                }
            }
            for (let index = 0; index < hexx.length; index++) {
                const element = hexx[index];
                hexx[index] = element.split("")
                setFo13((prevFo13) => [...prevFo13, element.split("")])
                temp.current[index] = temp.current[index].split("")
            }
            setHexx(hexx)
            mem.splice(0, arr.length, ...arr)
            let Mem = new memoire(mem)
            setMemoire(Mem)
            setMachine(new Machine(uc, Acc, ri, si, dx, bx, co, cx, rIM, rAM, busAdr, busData, flags, uAl, Memoire, pile))
            console.log(machine, hexx[hexx.length - 1])
            console.log(hexx)
            document.querySelector('.erreur').innerHTML = '';
        } catch (error) {
            const msg = error.message;
            if (msg !== "element.split is not a function") {
                document.querySelector('.erreur').innerHTML = msg;

            }
            console.log(msg);
            setComp(false);
        }
    }

    /******************************************************************************************************/
    const Traiter = (Machine) => {
        let here

        // treating instructions from ADD to CMP in UAL
        /****************************************************************************************************/
        if (parseInt(Machine.UC.Cop, 2) < 2 || parseInt(Machine.UC.Cop, 2) === 4 || (parseInt(Machine.UC.Cop, 2) >= 6 && parseInt(Machine.UC.Cop, 2) <= 10)) {
            Machine.UAL.UAL2 = Mode[parseInt(Machine.UC.Mod, 2)](Machine, Machine.UC.reg, Machine.UC.C).value
            tableUal2.current.push(Machine.UAL.UAL2.hexa)
            Machine.UAL.UAL1 = Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value
            let code = Machine.UC.Coprnd[parseInt(Machine.UC.Cop, 2)]
            let ual1, ual2

            /*Si le mode registre*/
            if (parseInt(Machine.UC.Mod, 2) === 3) {
                ual2= Machine.UC.reg[parseInt(Machine.UC.R1, 2)]
                ual1= Machine.UC.reg[parseInt(Machine.UC.C, 2)]
                let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
                let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
                let x22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
                let y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("EUAL2 <-- " + ual2)
                    myRef1.current.style.opacity = '100%'
                }, timeRef.current);
                timeRef.current += 800
                y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL2 <-- " + ual2)
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800
                x22 = document.querySelector('.EualsBusDonnees .triangleHaut').getBoundingClientRect().left;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL2 <-- " + ual2)
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000
                y22 = document.querySelector('.BusEuals').getBoundingClientRect().top;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL2 <-- " + ual2)
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800
                x22 = document.querySelector('#Eual2 #eual2').getBoundingClientRect().left;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL2 <-- " + ual2)
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000
                setTimeout(() => {
                    setdyna("EUAL2 <-- " + ual2)
                    document.querySelector('.Eual2').classList.add('boxShadowBlue');
                    uall.current = tableUal2.current.shift()
                    setFo6(uall.current)
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("EUAL2 <-- " + ual2)
                    document.querySelector('.Eual2').classList.remove('boxShadowBlue');
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("EUAL2 <-- " + ual2)
                    myRef1.current.style.opacity = '0%'
                }, timeRef.current);
                timeRef.current += 500
            } else {
                ual1= Machine.UC.reg[parseInt(Machine.UC.R1, 2)]
                let x1 = myRef.current.getBoundingClientRect().left;//x1 we get actual position of the element
                let y1 = myRef.current.getBoundingClientRect().top;//y1 we get actual position of the element
                let x2 = document.querySelector('.RimToRi .rectangle').getBoundingClientRect().left;
                let y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element    
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    myRef.current.style.opacity = '100%'
                }, timeRef.current);
                timeRef.current += 500
                y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element    
                }, timeRef.current);
                timeRef.current += 800
                x2 = document.querySelector('.EualsBusDonnees .rectangle').getBoundingClientRect().left;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element    
                }, timeRef.current);
                timeRef.current += 800
                y2 = document.querySelector('.BusEuals .rectangle').getBoundingClientRect().top;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element    
                }, timeRef.current);
                timeRef.current += 800
                x2 = document.querySelector('#Eual2 #eual2').getBoundingClientRect().left
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element  
                }, timeRef.current);
                timeRef.current += 1000
                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    document.querySelector('.Eual2').classList.add('boxShadowBlue');
                    uall.current = tableUal2.current.shift()
                    setFo6(uall.current)
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    document.querySelector('.Eual2').classList.remove('boxShadowBlue');
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    myRef.current.style.opacity = '0%'
                }, timeRef.current);
                timeRef.current += 1000
            }
            tableUal.current.push(Machine.UAL.UAL1.hexa)
            let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
            let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
            let x22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
            let y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL1 <-- " + ual1)
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            setTimeout(() => {
                setdyna("EUAL1 <-- " + ual1)
                myRef1.current.style.opacity = '100%'
            }, timeRef.current);
            timeRef.current += 500
            y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL1 <-- " + ual1)
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            x22 = document.querySelector('.EualsBusDonnees .triangleHaut').getBoundingClientRect().left;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL1 <-- " + ual1)
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000
            y22 = document.querySelector('.BusEuals').getBoundingClientRect().top;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL1 <-- " + ual1)
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            x22 = document.querySelector('#Eual1 #eual2').getBoundingClientRect().left;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL1 <-- " + ual1)
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000
            setTimeout(() => {
                setdyna("EUAL1 <-- " + ual1)
                document.querySelector('.Eual1').classList.add('boxShadowBlue');
                ual.current = tableUal.current.shift()
                setFo5(ual.current)
            }, timeRef.current);
            timeRef.current += 1000
            setTimeout(() => {
                setdyna("EUAL1 <-- " + ual1)
                document.querySelector('.Eual1').classList.remove('boxShadowBlue');
            }, timeRef.current);
            timeRef.current += 800
            setTimeout(() => {
                setdyna("EUAL1 <-- " + ual1)
                myRef1.current.style.opacity = '0%'
            }, timeRef.current);
            timeRef.current += 1000
            let val = Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value = new Mot16(Machine.UAL.executer(Machine.UC.Coprnd[parseInt(Machine.UC.Cop, 2)], Machine.Flags))
            setTimeout(() => {
                setdyna(code)
                here = document.querySelector(".UAL")
                here.className = "UAL boxShadowBlue"
            }, timeRef.current)
            timeRef.current += 1000
            setTimeout(() => {
                setdyna("EUAL1 <-- " + ual1)
                here.className = "UAL"
            }, timeRef.current)
            tableFlags.current.push(Machine.Flags.flags.hexa)
            setTimeout(() => {
                setdyna("MAJ FLAGS")
                document.querySelector('.FLAG').classList.add("boxShadowBlue")
                flags1.current = tableFlags.current.shift()
                setFo11(flags1.current)
            }, timeRef.current)
            timeRef.current += 800
            setTimeout(() => {
                setdyna("MAJ FLAGS")
                document.querySelector('.FLAG').classList.remove("boxShadowBlue")
            }, timeRef.current)
            x22 = document.querySelector('.UalBusDonnees .rectangle').getBoundingClientRect().left;
            y22 = document.querySelector('.UalBusDonnees .rectangle').getBoundingClientRect().top;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("MAJ FLAGS")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            setTimeout(() => {
                setdyna(ual2 + " <-- resultat")
                myRef1.current.style.opacity = '100%'
            }, timeRef.current);
            timeRef.current += 500
            y22 = document.querySelector('.BusDonnees').getBoundingClientRect().top;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna(ual2 + " <-- resultat")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            x22 = document.querySelector('.RegToBusDonnees .triangleBas').getBoundingClientRect().left;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna(ual2 + " <-- resultat")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna(ual2 + " <-- resultat")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            setTimeout(() => {
                setdyna(ual2 + " <-- resultat")
                myRef1.current.style.opacity = '0%'
            }, timeRef.current);
            timeRef.current += 500

            /*Rangement de resultat dans le registre correspondant*/
            switch (parseInt(Machine.UC.R1, 2)) {
                case 0:
                    tableAc.current.push(val.hexa)
                    setTimeout(() => {
                        document.querySelector('#Acc').classList.add("boxShadowBlue")
                        acc.current = tableAc.current.shift()
                        setFo4(acc.current)
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Acc').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                case 1:
                    tableBx.current.push(val.hexa)
                    setTimeout(() => {
                        document.querySelector('#Bx').classList.add("boxShadowBlue")
                        bx1.current = tableBx.current.shift()
                        setFo9(bx1.current)
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Bx').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                case 2:
                    tableCx.current.push(val.hexa)
                    setTimeout(() => {
                        document.querySelector('#Cx').classList.add("boxShadowBlue")
                        cx1.current = tableCx.current.shift()
                        setFo10(bx1.current)
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Cx').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                case 3:
                    tableDx.current.push(val.hexa)
                    setTimeout(() => {
                        document.querySelector('#Dx').classList.add("boxShadowBlue")
                        dx1.current = tableDx.current.shift()
                        setFo8(dx1.current)
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Dx').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                case 4:
                    tableSi.current.push(val.hexa)
                    setTimeout(() => {
                        document.querySelector('#Si').classList.add("boxShadowBlue")
                        si1.current = tableSi.current.shift()
                        setFo7(si1.current)
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Si').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                case 5:
                    table.current.push(val.hexa)
                    setTimeout(() => {
                        document.querySelector('.Co').classList.add("boxShadowBlue")
                        coo.current = table.current.shift()
                        setFo(coo.current)
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('.Co').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                default:
                    break;
            }
            timeRef.current += 1000
        }
       
    /************************************** INC, DEC, NOT ************************************************/
        
    else if (parseInt(Machine.UC.Cop, 2) === 2 || parseInt(Machine.UC.Cop, 2) === 3 || parseInt(Machine.UC.Cop, 2) === 5) {
        Machine.UAL.UAL1 = Mode[parseInt(Machine.UC.Mod, 2)](Machine, Machine.UC.reg, Machine.UC.C).value
        tableUal.current.push(Machine.UAL.UAL1.hexa)
        console.log(tableR2.current)
        tableR2.current.push(Machine.RIM.value.hexa)
        let mM = new mot_mem(Machine.RAM.value.entier, new Mot16("0000000000000000"))
        let CODE = Machine.UC.Coprnd[parseInt(Machine.UC.Cop, 2)]
        
        if (parseInt(Machine.UC.Mod, 2) === 3) {
            let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
            let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
            let x22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
            let y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions

                setTimeout(() => {
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("EUAL1 <-- Registre")
                    myRef1.current.style.opacity = '100%'
                }, timeRef.current);
                timeRef.current += 500
                y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions

                setTimeout(() => {
                    setdyna("EUAL1 <-- Registre")
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800

                x22 = document.querySelector('.EualsBusDonnees .triangleHaut').getBoundingClientRect().left;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL1 <-- Registre")
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000

                y22 = document.querySelector('.BusEuals').getBoundingClientRect().top;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL1 <-- Registre")
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800

                x22 = document.querySelector('#Eual1 #eual2').getBoundingClientRect().left;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL1 <-- Registre")
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000

                setTimeout(() => {
                    setdyna("")
                    document.querySelector('.Eual1').classList.remove('boxShadowBlue');
                    ual.current = tableUal.current.shift()
                    setFo5(ual.current)
                }, timeRef.current);
                timeRef.current += 800

                setTimeout(() => {
                    myRef1.current.style.opacity = '0%'
                }, timeRef.current);
                timeRef.current += 500

            } else {
                let x1 = myRef.current.getBoundingClientRect().left;//x1 we get actual position of the element
                let y1 = myRef.current.getBoundingClientRect().top;//y1 we get actual position of the element
                let x2 = document.querySelector('.RimToRi .rectangle').getBoundingClientRect().left;
                let y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })

                setTimeout(() => {
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800

                setTimeout(() => {
                    setdyna("EUAL1 <-- RIM")
                    myRef.current.style.opacity = '100%'
                }, timeRef.current);
                timeRef.current += 500

                y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL1 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800

                x2 = document.querySelector('.EualsBusDonnees .rectangle').getBoundingClientRect().left;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL1 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800

                y2 = document.querySelector('.BusEuals .rectangle').getBoundingClientRect().top;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL1 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800

                x2 = document.querySelector('#Eual1 #eual2').getBoundingClientRect().left
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL1 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000

                setTimeout(() => {
                    setdyna("EUAL1 <-- RIM")
                    document.querySelector('.Eual1').classList.add('boxShadowBlue');
                    ual.current = tableUal.current.shift()
                    setFo5(ual.current)
                }, timeRef.current);
                timeRef.current += 800

                setTimeout(() => {
                    setdyna("EUAL1 <-- RIM")
                    document.querySelector('.Eual1').classList.remove('boxShadowBlue');
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("")
                    myRef.current.style.opacity = '0%'
                }, timeRef.current);
                timeRef.current += 1000
            }

            setTimeout(() => {
                setdyna(CODE)
                here = document.querySelector(".UAL")
                here.className = "UAL boxShadowBlue"
            }, timeRef.current)
            timeRef.current += 1000
            setTimeout(() => {
                setdyna(CODE)
                here.className = "UAL"
            }, timeRef.current)
            timeRef.current += 1000

            if (parseInt(Machine.UC.Mod, 2) === 3) {
                let val = Machine[Machine.UC.reg[parseInt(Machine.UC.C, 2)]].value = new Mot16(Instructions[Machine.UC.Coprnd[parseInt(Machine.UC.Cop, 2)]](Machine[Machine.UC.reg[parseInt(Machine.UC.C, 2)]].value, Machine.Flags))
                tableFlags.current.push(Machine.Flags.flags.hexa)
                setTimeout(() => {
                    document.querySelector('.FLAG').classList.add("boxShadowBlue")
                    flags1.current = tableFlags.current.shift()
                    setFo11(flags1.current)
                }, timeRef.current)
                timeRef.current += 800

                setTimeout(() => {
                    document.querySelector('.FLAG').classList.remove("boxShadowBlue")
                }, timeRef.current)
                timeRef.current += 1000

                switch (parseInt(Machine.UC.C, 2)) {
                    case 0:
                        tableAc.current.push(val.hexa)
                        setTimeout(() => {
                            acc.current = tableAc.current.shift()
                            setFo4(acc.current)
                        }, timeRef.current)
                        break;
                    case 1:
                        tableBx.current.push(val.hexa)
                        setTimeout(() => {
                            bx1.current = tableBx.current.shift()
                            setFo9(bx1.current)
                        }, timeRef.current)
                        break;
                    case 2:
                        tableCx.current.push(val.hexa)
                        setTimeout(() => {
                            cx1.current = tableCx.current.shift()
                            setFo10(bx1.current)
                        }, timeRef.current)
                        break;
                    case 3:
                        tableDx.current.push(val.hexa)
                        setTimeout(() => {
                            dx1.current = tableDx.current.shift()
                            setFo8(dx1.current)
                        }, timeRef.current)
                        break;
                    case 4:
                        tableSi.current.push(val.hexa)
                        setTimeout(() => {
                            si1.current = tableSi.current.shift()
                            setFo7(si1.current)
                        }, timeRef.current)
                        break;
                    case 5:
                        table.current.push(val.hexa)
                        setTimeout(() => {
                            coo.current = table.current.shift()
                            setFo(coo.current)
                        }, timeRef.current)
                        break;
                    default:
                        break;
                }

                setTimeout(() => {
                    rimm.current = tableR2.current.shift()
                    setFo2(rimm.current)
                }, timeRef.current)
                console.log(Machine.memoire)
            }

            else {
                let val = new Mot16(Instructions[Machine.UC.Coprnd[parseInt(Machine.UC.Cop, 2)]](Machine.RIM.value, Machine.Flags))
                Instructions.MOV(val, mM, Machine)
                tableR2.current.push(val.hexa)
                let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
                let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
                let x22 = document.querySelector('.UalBusDonnees .rectangle').getBoundingClientRect().left;
                let y22 = document.querySelector('.UalBusDonnees .rectangle').getBoundingClientRect().top;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions

                setTimeout(() => {
                    setdyna("RIM <-- EUAL1")
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800

                setTimeout(() => {
                    myRef1.current.style.opacity = '100%'
                }, timeRef.current);
                timeRef.current += 500

                y22 = document.querySelector('.BusDonnees ').getBoundingClientRect().top;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("RIM <-- EUAL1")
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800

                x22 = document.querySelector('.RimToRi ').getBoundingClientRect().left;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("RIM <-- EUAL1")
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800

                y22 = document.querySelector('.RimToRi .triangleHaut ').getBoundingClientRect().top;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("RIM <-- EUAL1")
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800

                setTimeout(() => {
                    setdyna("RIM <-- EUAL1")
                    document.querySelector('.rim').classList.add('boxShadowBlue')
                    console.log("rimm", tableR2.current)
                    tableR2.current.shift()
                    rimm.current = tableR2.current.shift()
                    setFo2(rimm.current)
                    myRef1.current.style.opacity = '0%'
                }, timeRef.current);
                timeRef.current += 800

                setTimeout(() => {
                    setdyna("ECRITURE")
                    document.querySelector('.rim').classList.remove('boxShadowBlue')
                    document.querySelector('.Memoire').classList.add('boxShadowBlue')
                    if (mM.adresse >= fo13.length) {
                        const length = mM.adresse - fo13.length;
                        const defaultValue = "0000";
                        const array = new Array(length).fill(defaultValue);
                        setFo13((prevArray) => [...prevArray, ...array, val.hexa]);
                    } else {
                        setFo13((prevArray) => [
                            ...prevArray.slice(0, mM.adresse),
                            val.hexa,
                            ...prevArray.slice(mM.adresse + 1)
                        ]);
                    }

                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("")
                    document.querySelector('.Memoire').classList.remove('boxShadowBlue')
                }, timeRef.current);
            }
        }

        /******************************************** CMP *************************************************/

        else if (parseInt(Machine.UC.Cop, 2) === 11) {
            Machine.UAL.UAL2 = Mode[parseInt(Machine.UC.Mod, 2)](Machine, Machine.UC.reg, Machine.UC.C).value
            tableUal2.current.push(Machine.UAL.UAL2.hexa)
            Machine.UAL.UAL1 = Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value
            let code = Machine.UC.reg[parseInt(Machine.UC.R1, 2)]


            if (parseInt(Machine.UC.Mod, 2) === 3) {
                let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
                let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
                let x22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
                let y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("EUAL2 <-- Registre")
                    myRef1.current.style.opacity = '100%'
                }, timeRef.current);
                timeRef.current += 1000
                y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;

                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL2 <-- Registre")
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000
                x22 = document.querySelector('.EualsBusDonnees .triangleHaut').getBoundingClientRect().left;

                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL2 <-- Registre")
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000

                y22 = document.querySelector('.BusEuals').getBoundingClientRect().top;
                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL2 <-- Registre")
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000
                x22 = document.querySelector('#Eual2 #eual2').getBoundingClientRect().left;

                tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("EUAL2 <-- Registre")
                    pos1.current = tabPos1.current.shift()//we get the first element of the array
                    setPosition1(pos1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000

                setTimeout(() => {
                    setdyna("EUAL2 <-- Registre")
                    document.querySelector('.Eual2').classList.add('boxShadowBlue');
                    uall.current = tableUal2.current.shift()
                    setFo6(uall.current)
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("")
                    document.querySelector('.Eual2').classList.remove('boxShadowBlue');
                }, timeRef.current);
                timeRef.current += 800

                setTimeout(() => {
                    myRef1.current.style.opacity = '0%'
                }, timeRef.current);

                timeRef.current += 500

            } else {
                let x1 = myRef.current.getBoundingClientRect().left;//x1 we get actual position of the element
                let y1 = myRef.current.getBoundingClientRect().top;//y1 we get actual position of the element
                let x2 = document.querySelector('.RimToRi .rectangle').getBoundingClientRect().left;
                let y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;

                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })

                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    myRef.current.style.opacity = '100%'

                }, timeRef.current);
                timeRef.current += 1000

                y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;

                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions

                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element

                }, timeRef.current);
                timeRef.current += 1000
                x2 = document.querySelector('.EualsBusDonnees .rectangle').getBoundingClientRect().left;

                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions

                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000
                y2 = document.querySelector('.BusEuals .rectangle').getBoundingClientRect().top;

                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions

                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000

                x2 = document.querySelector('#Eual2 #eual2').getBoundingClientRect().left
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions

                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000

                setTimeout(() => {
                    setdyna("EUAL2 <-- RIM")
                    document.querySelector('.Eual2').classList.add('boxShadowBlue');
                    uall.current = tableUal2.current.shift()
                    setFo6(uall.current)
                }, timeRef.current);
                timeRef.current += 800

                setTimeout(() => {
                    setdyna("")
                    document.querySelector('.Eual2').classList.remove('boxShadowBlue');
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    myRef.current.style.opacity = '0%'
                }, timeRef.current);

                timeRef.current += 500
            }
            tableUal.current.push(Machine.UAL.UAL1.hexa)
            let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
            let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
            let x22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
            let y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions

            setTimeout(() => {
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            setTimeout(() => {
                myRef1.current.style.opacity = '100%'
            }, timeRef.current);
            timeRef.current += 500


            y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL2 <-- Registre")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800

            x22 = document.querySelector('.EualsBusDonnees .triangleHaut').getBoundingClientRect().left;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL2 <-- Registre")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000

            y22 = document.querySelector('.BusEuals').getBoundingClientRect().top;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL1 <-- Registre")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            x22 = document.querySelector('#Eual1 #eual2').getBoundingClientRect().left;


            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL1 <-- Registre")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000

            setTimeout(() => {
                setdyna("EUAL1 <-- Registre")
                document.querySelector('.Eual1').classList.add('boxShadowBlue');
                ual.current = tableUal.current.shift()
                setFo5(ual.current)
            }, timeRef.current);
            timeRef.current += 800
            setTimeout(() => {
                document.querySelector('.Eual1').classList.remove('boxShadowBlue');
            }, timeRef.current);
            timeRef.current += 800

            setTimeout(() => {
                myRef1.current.style.opacity = '0%'
            }, timeRef.current);

            timeRef.current += 1000

            setTimeout(() => {
                setdyna(code)
                here = document.querySelector(".UAL")
                here.className = "UAL boxShadowBlue"
            }, timeRef.current)
            timeRef.current += 1000

            setTimeout(() => {
                setdyna("")
                here.className = "UAL"
            }, timeRef.current)
            timeRef.current += 500
            Machine.UAL.executer(Machine.UC.Coprnd[parseInt(Machine.UC.Cop, 2)], Machine.Flags)
            tableFlags.current.push(Machine.Flags.flags.hexa)
            setTimeout(() => {
                document.querySelector('.FLAG').classList.add("boxShadowBlue")
                flags1.current = tableFlags.current.shift()
                setFo11(flags1.current)
            }, timeRef.current)
            timeRef.current += 800
            setTimeout(() => {
                document.querySelector('.FLAG').classList.remove("boxShadowBlue")
            }, timeRef.current)
        }

        //******************************************** RAZ **************************************************/

        else if (parseInt(Machine.UC.Cop, 2) === 12) {
            Instructions.RAZ(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value, Machine.Flags)
            let val = Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value

            switch (parseInt(Machine.UC.C, 2)) {
                case 0:
                    tableAc.current.push(val.hexa)
                    setTimeout(() => {
                        setdyna("RAZ ACC")
                        acc.current = tableAc.current.shift()
                        setFo4(acc.current)
                    }, timeRef.current)
                    break;
                case 1:
                    tableBx.current.push(val.hexa)
                    setTimeout(() => {
                        setdyna("RAZ BX")
                        bx1.current = tableBx.current.shift()
                        setFo9(bx1.current)
                    }, timeRef.current)
                    break;
                case 2:
                    tableCx.current.push(val.hexa)
                    setTimeout(() => {
                        setdyna("RAZ CX")
                        cx1.current = tableCx.current.shift()
                        setFo10(cx1.current)
                    }, timeRef.current)
                    break;
                case 3:
                    tableDx.current.push(val.hexa)
                    setTimeout(() => {
                        setdyna("RAZ DX")
                        dx1.current = tableDx.current.shift()
                        setFo8(dx1.current)
                    }, timeRef.current)
                    break;
                case 4:
                    tableSi.current.push(val.hexa)
                    setTimeout(() => {
                        setdyna("RAZ SI")
                        si1.current = tableSi.current.shift()
                        setFo7(si1.current)
                    }, timeRef.current)
                    break;
                case 5:
                    table.current.push(val.hexa)
                    setTimeout(() => {
                        setdyna("RAZ CO")
                        coo.current = table.current.shift()
                        setFo(coo.current)
                    }, timeRef.current)
                    break;
                default:
                    break;
            }

        }

        //*******************************************************************************************************/

        // treating instructions from SHL to ROR 

        else if (parseInt(Machine.UC.Cop, 2) >= 13 && parseInt(Machine.UC.Cop, 2) < 17) {

            let i = new Mot16(Machine.UC.C.padStart(16, "0"))
            Machine.UAL.UAL2 = i
            Machine.UAL.UAL1 = Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value
            Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value = new Mot16(Machine.UAL.executer(Machine.UC.Coprnd[parseInt(Machine.UC.Cop, 2)], Machine.Flags))
            let val = Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value
            let valeur = Machine.UC.Coprnd[parseInt(Machine.UC.Cop, 2)]

            tableUal.current.push(Machine.UAL.UAL1.hexa)
            tableUal2.current.push(Machine.UAL.UAL2.hexa)

            let x12 = myRef1.current.getBoundingClientRect().left;
            let y12 = myRef1.current.getBoundingClientRect().top;
            let x22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
            let y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800

            setTimeout(() => {
                myRef1.current.style.opacity = '100%'
            }, timeRef.current);
            timeRef.current += 500

            y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL1 <-- REGISTRE")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800

            x22 = document.querySelector('.EualsBusDonnees .triangleHaut').getBoundingClientRect().left;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL1 <-- REGISTRE")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000

            y22 = document.querySelector('.BusEuals').getBoundingClientRect().top;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL1 <-- REGISTRE")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800

            x22 = document.querySelector('#Eual1 #eual2').getBoundingClientRect().left;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL1 <-- REGISTRE")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000

            setTimeout(() => {
                setdyna("EUAL1 <-- REGISTRE")
                document.querySelector('.Eual1').classList.add('boxShadowBlue');
                ual.current = tableUal.current.shift()
                setFo5(ual.current)
            }, timeRef.current);
            timeRef.current += 800

            setTimeout(() => {
                setdyna("")
                document.querySelector('.Eual1').classList.remove('boxShadowBlue');
            }, timeRef.current);
            timeRef.current += 800

            setTimeout(() => {
                myRef1.current.style.opacity = '0%'
            }, timeRef.current);
            timeRef.current += 1000


            let x1 = myRef.current.getBoundingClientRect().left;
            let y1 = myRef.current.getBoundingClientRect().top;
            let y2 = document.querySelector('.UcBusDonnees').getBoundingClientRect().top;
            let x2 = document.querySelector('.UcBusDonnees').getBoundingClientRect().left;

            tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
            setTimeout(() => {
                pos.current = tabPos.current.shift()//we get the first element of the array
                setPosition(pos.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 500

            setTimeout(() => {
                myRef.current.style.opacity = '100%'
            }, timeRef.current);
            timeRef.current += 800

            y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
            tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL2 <-- UC.C")
                pos.current = tabPos.current.shift()//we get the first element of the array
                setPosition(pos.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000

            x2 = document.querySelector('.EualsBusDonnees .triangleHaut').getBoundingClientRect().left;
            tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL2 <-- UC.C")
                pos.current = tabPos.current.shift()//we get the first element of the array
                setPosition(pos.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000

            y2 = document.querySelector('.BusEuals').getBoundingClientRect().top;
            tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL2 <-- UC.C")
                pos.current = tabPos.current.shift()//we get the first element of the array
                setPosition(pos.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800

            x2 = document.querySelector('#Eual2 #eual2').getBoundingClientRect().left;

            tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("EUAL2 <-- UC.C")
                pos.current = tabPos.current.shift()//we get the first element of the array
                setPosition(pos.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000

            setTimeout(() => {
                setdyna("EUAL2 <-- UC.C")
                document.querySelector('.Eual2').classList.add('boxShadowBlue');
                uall.current = tableUal2.current.shift()
                setFo6(uall.current)
            }, timeRef.current);
            timeRef.current += 800

            setTimeout(() => {
                setdyna("")
                document.querySelector('.Eual2').classList.remove('boxShadowBlue');
            }, timeRef.current);
            timeRef.current += 800

            setTimeout(() => {
                myRef.current.style.opacity = '0%'
            }, timeRef.current);
            timeRef.current += 1000

            setTimeout(() => {
                setdyna(valeur)
                document.querySelector('.UAL').classList.add('boxShadowBlue');
            }, timeRef.current);
            timeRef.current += 1000

            setTimeout(() => {
                setdyna("")
                document.querySelector('.UAL').classList.remove('boxShadowBlue');
            }, timeRef.current);
            timeRef.current += 1000

            tableFlags.current.push(Machine.Flags.flags.hexa)

            setTimeout(() => {
                document.querySelector('.FLAG').classList.add('boxShadowBlue')
                flags1.current = tableFlags.current.shift()
                setFo11(flags1.current)
            }, timeRef.current)
            timeRef.current += 1000

            setTimeout(() => {
                document.querySelector('.FLAG').classList.remove('boxShadowBlue')
            }, timeRef.current)
            timeRef.current += 1000

            switch (parseInt(Machine.UC.R1, 2)) {
                case 0:
                    tableAc.current.push(val.hexa)
                    setTimeout(() => {
                        acc.current = tableAc.current.shift()
                        setdyna("ACC <-- EUAL2")
                        setFo4(acc.current)
                    }, timeRef.current)
                    break;
                case 1:
                    tableBx.current.push(val.hexa)
                    setTimeout(() => {
                        bx1.current = tableBx.current.shift()
                        setdyna("BX <-- EUAL2")
                        setFo9(bx1.current)
                    }, timeRef.current)
                    break;

                case 2:
                    tableCx.current.push(val.hexa)
                    setTimeout(() => {
                        cx1.current = tableCx.current.shift()
                        setdyna("CX <-- EUAL2")
                        setFo10(cx1.current)
                    }, timeRef.current)
                    break;
                case 3:
                    tableDx.current.push(val.hexa)
                    setTimeout(() => {
                        dx1.current = tableDx.current.shift()
                        setdyna("DX <-- EUAL2")
                        setFo8(dx1.current)
                    }, timeRef.current)
                    break;

                case 4:
                    tableSi.current.push(val.hexa)
                    setTimeout(() => {
                        si1.current = tableSi.current.shift()
                        setdyna("SI <-- EUAL2")
                        setFo7(si1.current)
                    }, timeRef.current)
                    break;

                case 5:
                    table.current.push(val.hexa)
                    setTimeout(() => {
                        coo.current = table.current.shift()
                        setdyna("CO <-- EUAL2")
                        setFo(coo.current)
                    }, timeRef.current)
                    break;
                default:
                    break;
            }
        }

        /*************************************  LOOP UNTIL CX==0 **************************************/

        else if (parseInt(Machine.UC.Cop, 2) === 17) {
            if (Machine.CX.value.entier === 0) {
                machine.CO.incCO()
                machine.CO.incCO()

            } else {
                let op = Mode[0](Machine, Machine.UC.reg, Machine.UC.C).value
                Machine.CO.value = op

                Machine.CX.DecCX()
                tableCx.current.push(machine.CX.value.hexa)// we push the difference between the two positions
                setTimeout(() => {
                    document.querySelector('#Cx').classList.add('boxShadowBlue')
                    setdyna("DEC CX")
                    cx1.current = tableCx.current.shift()//we get the first element of the array
                    setFo10(cx1.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 1000

                setTimeout(() => {
                    document.querySelector('#Cx').classList.remove('boxShadowBlue')
                    setdyna("")
                }, timeRef.current);
                timeRef.current += 1000
            }
        }

        /****************************************** BCV *********************************************/

        else if (parseInt(Machine.UC.Cop, 2) === 18) {

            let op1 = parseInt(Machine.UC.C, 2)

            /*Si la condition est vérifiée*/
            if (Instructions.BCV(op1, Machine.Flags)) {

                let op2 = Mode[0](Machine, Machine.UC.reg, Machine.UC.C).value
                console.log(op2)
                Machine.CO.value = new Mot16(op2.mot)

            }
            /*Si la consition n'est pas vérifiée*/
            else {
                Machine.CO.incCO();
                Machine.CO.incCO();
            }
            tableFlags.current.push(Machine.Flags.flags.hexa)
            setTimeout(() => {
                document.querySelector('.FLAG').classList.add('boxShadowBlue')
                setdyna("BCV")
                flags1.current = tableFlags.current.shift()
                setFo11(flags1.current)
            }, timeRef.current)
            timeRef.current += 1000
            setTimeout(() => {
                document.querySelector('.FLAG').classList.remove('boxShadowBlue')
                setdyna("")
            }, timeRef.current)
            timeRef.current += 1000

        }

        /******************************************* BCF ********************************************/

        else if (parseInt(Machine.UC.Cop, 2) === 19) {
            let op1 = parseInt(Machine.UC.C, 2)
            /*Si la condition n'est pas vérifiée*/
            if (Instructions.BCF(op1, Machine.Flags)) {
                let op2 = Mode[0](Machine, Machine.UC.reg, Machine.UC.C).value
                console.log(op2)
                Machine.CO.value = new Mot16(op2.mot)
            }
            /*Si la condition est vérifiée*/
            else {
                Machine.CO.incCO();
                Machine.CO.incCO();
            }
            tableFlags.current.push(Machine.Flags.flags.hexa)
            setTimeout(() => {
                document.querySelector('.FLAG').classList.add('boxShadowBlue')
                setdyna("BCF")
                flags1.current = tableFlags.current.shift()
                setFo11(flags1.current)
            }, timeRef.current)
            timeRef.current += 1000
            setTimeout(() => {
                document.querySelector('.FLAG').classList.remove('boxShadowBlue')
                setdyna("")
            }, timeRef.current)
            timeRef.current += 1000
        }

        /******************************************** ENT *********************************************/

        else if (parseInt(Machine.UC.Cop, 2) === 20) {

            let here = prompt("Entrez une valeur");
            while (!(isBinary(here)) && !(isDecimal(here)) && !(isHexadecimal(here))) {
                here = prompt("Entrez une autre valeur");
            }
            if (isBinary(here)) {
                here = parseInt(here, 2).toString(16).padStart(4, "0")
            }
            else if (isDecimal(here)) {
                here = parseInt(here, 10).toString(16).padStart(4, "0")
            }
            else if (isHexadecimal(here)) {
                here = parseInt(here, 16).toString(16).padStart(4, "0")
            }

            Machine.ACC.value = new Mot16(parseInt(here, 16).toString(2).padStart(16, "0"))
            tableAc.current.push(here)
            setTimeout(() => {
                acc.current = tableAc.current.shift()
                setFo4(acc.current)
                document.querySelector('#Acc').classList.add("boxShadowBlue")
                setdyna("ENT")
            }, timeRef.current)
            timeRef.current += 800
            setTimeout(() => {
                document.querySelector('#Acc').classList.remove("boxShadowBlue")
                setdyna("")
            }, timeRef.current)

        }

        /********************************************* Sort *******************************************/

        else if (parseInt(Machine.UC.Cop, 2) === 21) {
            setTimeout(() => {
                alert("La valeur de l'accumulateur est : " + Machine.ACC.value.entier)
            }, timeRef.current)
            timeRef.current += 800
        }

        /******************************************* Mov ************************************************/


        else if (parseInt(Machine.UC.Cop, 2) === 22) {

            let val = Mode[parseInt(Machine.UC.Mod, 2)](Machine, Machine.UC.reg, Machine.UC.C).value
            Instructions.MOV(val, Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]], Machine)
            if (parseInt(Machine.UC.Mod, 2) === 3) {
                switch (parseInt(Machine.UC.C, 2)) {
                    case 0:
                        setTimeout(() => {

                            document.querySelector('#Acc').classList.add("boxShadowBlue")
                        }, timeRef.current)
                        timeRef.current += 800
                        setTimeout(() => {
                            document.querySelector('#Acc').classList.remove("boxShadowBlue")
                        }, timeRef.current)
                        break;
                    case 1:

                        setTimeout(() => {

                            document.querySelector('#Bx').classList.add("boxShadowBlue")
                        }, timeRef.current)
                        timeRef.current += 800
                        setTimeout(() => {
                            document.querySelector('#Bx').classList.remove("boxShadowBlue")
                        }, timeRef.current)
                        break;
                    case 2:

                        setTimeout(() => {

                            document.querySelector('#Cx').classList.add("boxShadowBlue")
                        }, timeRef.current)
                        timeRef.current += 800
                        setTimeout(() => {
                            document.querySelector('#Cx').classList.remove("boxShadowBlue")
                        }, timeRef.current)
                        break;
                    case 3:
                        tableDx.current.push(val.hexa)
                        setTimeout(() => {

                            document.querySelector('#Dx').classList.add("boxShadowBlue")
                        }, timeRef.current)
                        timeRef.current += 800
                        setTimeout(() => {
                            document.querySelector('#Dx').classList.remove("boxShadowBlue")
                        }, timeRef.current)
                        break;
                    case 4:

                        setTimeout(() => {

                            document.querySelector('#Si').classList.add("boxShadowBlue")
                        }, timeRef.current)
                        timeRef.current += 800
                        setTimeout(() => {
                            document.querySelector('#Si').classList.remove("boxShadowBlue")
                        }, timeRef.current)
                        break;
                    case 5:

                        setTimeout(() => {

                            document.querySelector('.Co').classList.add("boxShadowBlue")
                        }, timeRef.current)
                        timeRef.current += 800
                        setTimeout(() => {
                            document.querySelector('.Co').classList.remove("boxShadowBlue")
                        }, timeRef.current)
                        break;
                    default:
                        break;
                }
            }
            else {
                let x1 = myRef.current.getBoundingClientRect().left;//x1 we get actual position of the element
                let y1 = myRef.current.getBoundingClientRect().top;//y1 we get actual position of the element
                let x2 = document.querySelector('.RimToRi .rectangle').getBoundingClientRect().left;
                let y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;

                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })

                setTimeout(() => {
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element

                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    myRef.current.style.opacity = '100%'

                }, timeRef.current);
                timeRef.current += 500

                y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;

                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions

                setTimeout(() => {
                    setdyna("Registre <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element

                }, timeRef.current);
                timeRef.current += 800
                x2 = document.querySelector('.RegToBusDonnees .rectangle').getBoundingClientRect().left;

                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions

                setTimeout(() => {
                    setdyna("Registre <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element

                }, timeRef.current);
                timeRef.current += 800
                y2 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;

                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions

                setTimeout(() => {
                    setdyna("Registre <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element

                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("")
                    myRef.current.style.opacity = '0%'

                }, timeRef.current);
            }

            switch (parseInt(Machine.UC.R1, 2)) {
                case 0:
                    tableAc.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa)
                    setTimeout(() => {
                        acc.current = tableAc.current.shift()
                        setFo4(acc.current)
                        document.querySelector('#Acc').classList.add("boxShadowBlue")
                        setdyna("ACC <-- RIM")
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Acc').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                case 1:
                    tableBx.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa)
                    setTimeout(() => {
                        setdyna("")
                        bx1.current = tableBx.current.shift()
                        setFo9(bx1.current)
                        document.querySelector('#Bx').classList.add("boxShadowBlue")
                        setdyna("BX <-- RIM")
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("")
                        document.querySelector('#Bx').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                case 2:
                    tableCx.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa)
                    setTimeout(() => {
                        cx1.current = tableCx.current.shift()
                        setFo10(cx1.current)
                        document.querySelector('#Cx').classList.add("boxShadowBlue")
                        setdyna("CX <-- RIM")
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("")
                        document.querySelector('#Cx').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                case 3:
                    tableDx.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa)
                    setTimeout(() => {
                        dx1.current = tableDx.current.shift()
                        setFo8(dx1.current)
                        document.querySelector('#Dx').classList.add("boxShadowBlue")
                        setdyna("DX <-- RIM")
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("")
                        document.querySelector('#Dx').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                case 4:
                    tableSi.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa)
                    setTimeout(() => {
                        si1.current = tableSi.current.shift()
                        setFo7(si1.current)
                        document.querySelector('#Si').classList.add("boxShadowBlue")
                        setdyna("SI <-- RIM")
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("")
                        document.querySelector('#Si').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                case 5:
                    table.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa)
                    setTimeout(() => {
                        coo.current = table.current.shift()
                        setFo(coo.current)
                        document.querySelector('.Co').classList.add("boxShadowBlue")
                        setdyna("CO <-- RIM")
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("")
                        document.querySelector('.Co').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                default:
                    break;
            }
        }

        /******************************************** CHM ************************************************/

        else if (parseInt(Machine.UC.Cop, 2) === 23) {
            let val = Mode[parseInt(Machine.UC.Mod, 2)](Machine, Machine.UC.reg, Machine.UC.C).value
            Instructions.CHM(val, Machine)

            if (parseInt(Machine.UC.Mod, 2)) {
                switch (parseInt(Machine.UC.C, 2)) {
                    case 0:
                        setTimeout(() => {
                            document.querySelector('#Acc').classList.add("boxShadowBlue")
                        }, timeRef.current)
                        timeRef.current += 800
                        setTimeout(() => {
                            document.querySelector('#Acc').classList.remove("boxShadowBlue")
                        }, timeRef.current)
                        break;
                    case 1:

                        setTimeout(() => {
                            document.querySelector('#Bx').classList.add("boxShadowBlue")
                            setdyna("ACC <-- BX")
                        }, timeRef.current)
                        timeRef.current += 800
                        setTimeout(() => {
                            document.querySelector('#Bx').classList.remove("boxShadowBlue")
                            setdyna("ACC <-- BX")
                        }, timeRef.current)
                        break;
                    case 2:

                        setTimeout(() => {
                            document.querySelector('#Cx').classList.add("boxShadowBlue")
                            setdyna("ACC <-- CX")
                        }, timeRef.current)
                        timeRef.current += 800
                        setTimeout(() => {
                            document.querySelector('#Cx').classList.remove("boxShadowBlue")
                            setdyna("ACC <-- CX")
                        }, timeRef.current)
                        break;
                    case 3:
                        tableDx.current.push(val.hexa)
                        setTimeout(() => {
                            document.querySelector('#Dx').classList.add("boxShadowBlue")
                            setdyna("ACC <-- DX")
                        }, timeRef.current)
                        timeRef.current += 800
                        setTimeout(() => {
                            document.querySelector('#Dx').classList.remove("boxShadowBlue")
                            setdyna("ACC <-- DX")
                        }, timeRef.current)
                        break;
                    case 4:

                        setTimeout(() => {
                            document.querySelector('#Si').classList.add("boxShadowBlue")
                            setdyna("ACC <-- SI")
                        }, timeRef.current)
                        timeRef.current += 800
                        setTimeout(() => {
                            document.querySelector('#Si').classList.remove("boxShadowBlue")
                            setdyna("ACC <-- SI")
                        }, timeRef.current)
                        break;
                    case 5:

                        setTimeout(() => {
                            document.querySelector('.Co').classList.add("boxShadowBlue")
                            setdyna("ACC <-- CO")
                        }, timeRef.current)
                        timeRef.current += 800
                        setTimeout(() => {
                            document.querySelector('.Co').classList.remove("boxShadowBlue")
                            setdyna("ACC <-- CO")
                        }, timeRef.current)
                        break;
                    default:
                        break;
                }
            }
            else {
                let x1 = myRef.current.getBoundingClientRect().left;//x1 we get actual position of the element
                let y1 = myRef.current.getBoundingClientRect().top;//y1 we get actual position of the element
                let x2 = document.querySelector('.RimToRi .rectangle').getBoundingClientRect().left;
                let y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;

                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })

                setTimeout(() => {
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element

                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    myRef.current.style.opacity = '100%'

                }, timeRef.current);
                timeRef.current += 500

                y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;

                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions

                setTimeout(() => {
                    setdyna("ACC <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element

                }, timeRef.current);
                timeRef.current += 800
                x2 = document.querySelector('.RegToBusDonnees .rectangle').getBoundingClientRect().left;

                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions

                setTimeout(() => {
                    setdyna("ACC <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element

                }, timeRef.current);
                timeRef.current += 800
                y2 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;

                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions

                setTimeout(() => {
                    setdyna("ACC <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element

                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("ACC <-- RIM")
                    myRef.current.style.opacity = '0%'

                }, timeRef.current);
            }
            tableAc.current.push(Machine.ACC.value.hexa)
            setTimeout(() => {
                setdyna("ACC <-- RIM")
                acc.current = tableAc.current.shift()
                setFo4(acc.current)
                document.querySelector('#Acc').classList.add("boxShadowBlue")
            }, timeRef.current)
            timeRef.current += 800

            setTimeout(() => {
                setdyna("")
                document.querySelector('#Acc').classList.remove("boxShadowBlue")
            }, timeRef.current)
        }

        /******************************************** RGM ***********************************************/

        else if (parseInt(Machine.UC.Cop, 2) === 24) {
            Mode[parseInt(Machine.UC.Mod, 2)](Machine, Machine.UC.reg, Machine.UC.C)
            tableR2.current.push(Machine.ACC.value.hexa)
            let mM = new mot_mem(Machine.RAM.value.entier, new Mot16("0000000000000000"))
            Instructions.RGM(Machine.RAM.value, Machine)
            let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
            let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
            let x22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
            let y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {

                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000
            setTimeout(() => {

                myRef1.current.style.opacity = '100%'
            }, timeRef.current);
            timeRef.current += 1000
            y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {

                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000
            x22 = document.querySelector('.RimToRi .rectangle').getBoundingClientRect().left;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {

                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000
            y22 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {

                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 1000
            setTimeout(() => {
                document.querySelector('.rim').classList.add('boxShadowBlue')
                myRef1.current.style.opacity = '0%'
                rimm.current = tableR2.current.shift()
                setFo2(rimm.current)
            }, timeRef.current);
            timeRef.current += 1000
            setTimeout(() => {
                document.querySelector('.rim').classList.remove('boxShadowBlue')
                document.querySelector('.Memoire').classList.add('boxShadowBlue')

                if (mM.adresse >= fo13.length) {
                    const length = mM.adresse - fo13.length;
                    const defaultValue = "0000";
                    const array = new Array(length).fill(defaultValue);
                    setFo13((prevArray) => [...prevArray, ...array, Machine.ACC.value.hexa]);
                } else {
                    setFo13((prevArray) => [
                        ...prevArray.slice(0, mM.adresse),
                        Machine.ACC.value.hexa,
                        ...prevArray.slice(mM.adresse + 1)
                    ]);
                }

            }, timeRef.current);
            timeRef.current += 1000
            setTimeout(() => {
                document.querySelector('.Memoire').classList.remove('boxShadowBlue')
            }, timeRef.current);
            console.log("fo13", fo13)
        }

        /********************************************** PUSH **************************************************/

        else if (parseInt(Machine.UC.Cop, 2) === 25) {
            let val = Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value
            Instructions.PUSH(Machine.pile, val)
            let regsitre;
            let r = Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa

            switch (parseInt(Machine.UC.R1, 2)) {
                case 0:
                    setTimeout(() => {
                        document.querySelector('#Acc').classList.add("boxShadowBlue")
                        setdyna("PILE <-- ACC")
                        regsitre = "ACC"
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("PILE <-- ACC")
                        document.querySelector('#Acc').classList.remove("boxShadowBlue")
                    }, timeRef.current)
                    break;
                case 1:

                    setTimeout(() => {
                        document.querySelector('#Bx').classList.add("boxShadowBlue")
                        setdyna("PILE <-- BX")
                        regsitre = "BX"
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Bx').classList.remove("boxShadowBlue")
                        setdyna("PILE <-- BX")
                    }, timeRef.current)
                    break;
                case 2:

                    setTimeout(() => {
                        document.querySelector('#Cx').classList.add("boxShadowBlue")
                        setdyna("PILE <-- CX")
                        regsitre = "CX"
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Cx').classList.remove("boxShadowBlue")
                        setdyna("PILE <-- CX")
                    }, timeRef.current)
                    break;
                case 3:
                    tableDx.current.push(val.hexa)
                    setTimeout(() => {
                        document.querySelector('#Dx').classList.add("boxShadowBlue")
                        setdyna("PILE <-- DX")
                        regsitre = "DX"
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Dx').classList.remove("boxShadowBlue")
                        setdyna("PILE <-- DX")
                    }, timeRef.current)
                    break;
                case 4:

                    setTimeout(() => {
                        document.querySelector('#Si').classList.add("boxShadowBlue")
                        setdyna("PILE <-- SI")
                        regsitre = "SI"
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Si').classList.remove("boxShadowBlue")
                        setdyna("PILE <-- SI")
                    }, timeRef.current)
                    break;
                case 5:

                    setTimeout(() => {
                        document.querySelector('.Co').classList.add("boxShadowBlue")
                        setdyna("PILE <-- CO")
                        regsitre = "CO"
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('.Co').classList.remove("boxShadowBlue")
                        setdyna("PILE <-- CO")
                    }, timeRef.current)
                    break;
                default:
                    break;

            }
            let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
            let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
            let x22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
            let y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800

            setTimeout(() => {
                myRef1.current.style.opacity = '100%'
            }, timeRef.current);
            timeRef.current += 500


            y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("PILE <-- " + regsitre)
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            x22 = document.querySelector('.PileBusDonnees .rectangle').getBoundingClientRect().left;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("PILE <-- " + regsitre)
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            y22 = document.querySelector('.PileBusDonnees .triangleHaut').getBoundingClientRect().top;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("PILE <-- " + regsitre)
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            setTimeout(() => {
                setdyna("PILE <-- " + regsitre)
                document.querySelector('.pile').classList.add('boxShadowBlue')
                setFo12((prevFo12) => [...prevFo12, r])
                myRef1.current.style.opacity = '0%'
            }, timeRef.current);
            timeRef.current += 800
            setTimeout(() => {
                setdyna("PILE <-- " + regsitre)
                document.querySelector('.pile').classList.remove('boxShadowBlue')
            }, timeRef.current);
        }

        /************************************* POP **********************************************/

        else if (parseInt(Machine.UC.Cop, 2) === 26) {
            let op = Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]]
            Machine.bus_donnes.transferer(Instructions.POP(Machine.pile), op)

            let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
            let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
            let x22 = document.querySelector('.PileBusDonnees .triangleHaut').getBoundingClientRect().left;
            let y22 = document.querySelector('.PileBusDonnees .triangleHaut').getBoundingClientRect().top;

            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                document.querySelector('.pile').classList.add('boxShadowBlue')
                setFo12((prevFo12) => prevFo12.slice(0, prevFo12.length - 1))
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            setTimeout(() => {
                document.querySelector('.pile').classList.remove('boxShadowBlue')
                setdyna("Registre <-- PILE")
                myRef1.current.style.opacity = '100%'
            }, timeRef.current);
            timeRef.current += 500
            y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("Registre <-- PILE")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            x22 = document.querySelector('.RegToBusDonnees .rectangle').getBoundingClientRect().left;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("Registre <-- PILE")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
            tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
            setTimeout(() => {
                setdyna("Registre <-- PILE")
                pos1.current = tabPos1.current.shift()//we get the first element of the array
                setPosition1(pos1.current)//we set the position of the element
            }, timeRef.current);
            timeRef.current += 800
            setTimeout(() => {
                setdyna("Registre <-- PILE")
                myRef1.current.style.opacity = '0%'
            }, timeRef.current);
            timeRef.current += 500

            switch (parseInt(Machine.UC.R1, 2)) {
                case 0:
                    tableAc.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa)
                    setTimeout(() => {
                        acc.current = tableAc.current.shift()
                        setFo4(acc.current)
                        document.querySelector('#Acc').classList.add("boxShadowBlue")
                        setdyna("ACC <-- PILE")
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Acc').classList.remove("boxShadowBlue")
                        setdyna("ACC <-- PILE")
                    }, timeRef.current)
                    break;
                case 1:
                    tableBx.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa)
                    setTimeout(() => {
                        bx1.current = tableBx.current.shift()
                        setFo9(bx1.current)
                        document.querySelector('#Bx').classList.add("boxShadowBlue")
                        setdyna("BX <-- PILE")
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Bx').classList.remove("boxShadowBlue")
                        setdyna("BX <-- PILE")
                    }, timeRef.current)
                    break;
                case 2:
                    tableCx.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa)
                    setTimeout(() => {
                        cx1.current = tableCx.current.shift()
                        setFo10(cx1.current)
                        document.querySelector('#Cx').classList.add("boxShadowBlue")
                        setdyna("CX <-- PILE")
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Cx').classList.remove("boxShadowBlue")
                        setdyna("CX <-- PILE")
                    }, timeRef.current)
                    break;
                case 3:
                    tableDx.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa)
                    setTimeout(() => {
                        dx1.current = tableDx.current.shift()
                        setFo8(dx1.current)
                        document.querySelector('#Dx').classList.add("boxShadowBlue")
                        setdyna("DX <-- PILE")
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Dx').classList.remove("boxShadowBlue")
                        setdyna("DX <-- PILE")
                    }, timeRef.current)
                    break;
                case 4:
                    tableSi.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa)
                    setTimeout(() => {
                        si1.current = tableSi.current.shift()
                        setFo7(si1.current)
                        document.querySelector('#Si').classList.add("boxShadowBlue")
                        setdyna("SI <-- PILE")
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('#Si').classList.remove("boxShadowBlue")
                        setdyna("SI <-- PILE")
                    }, timeRef.current)
                    break;
                case 5:
                    table.current.push(Machine[Machine.UC.reg[parseInt(Machine.UC.R1, 2)]].value.hexa)
                    setTimeout(() => {
                        coo.current = table.current.shift()
                        setFo(coo.current)
                        document.querySelector('.Co').classList.add("boxShadowBlue")
                        setdyna("CO <-- PILE")
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        document.querySelector('.Co').classList.remove("boxShadowBlue")
                        setdyna("CO <-- PILE")
                    }, timeRef.current)
                    break;
                default:
                    break;
            }
        }

    }

    /************************************************* Les modes **********************************************/
    /*Le mode immédiat*/

    let Mode = [function Imm(Machine, reg, C) {
        var Co = Machine.CO
        let blue
        Co.incCO()//incrementer le compteur ordinal
        table.current.push(Co.value.hexa)
        setTimeout(() => {
            setdyna("INC CO")
            coo.current = table.current.shift()
            setFo(coo.current)
            blue = document.querySelector(".Co")
            console.log(blue)
            blue.className = "Co boxShadowBlue"
        }, timeRef.current)
        timeRef.current += 500
        machine.bus_adresse.transferer(Machine.CO, Machine.RAM)//co->RAM
        tableR.current.push(Machine.RAM.value.hexa)
        let x1 = myRef.current.getBoundingClientRect().left;//x1 we get actual position of the element
        let y1 = myRef.current.getBoundingClientRect().top;//y1 we get actual position of the element
        let x2 = document.querySelector('.BusCo .rectangle').getBoundingClientRect().left;//destination position
        let y2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().top;//destination position
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("INC CO")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("INC CO")
            myRef.current.style.opacity = '100%'
        }, timeRef.current);
        timeRef.current += 500
        setTimeout(() => {
            setdyna("RAM <-- CO")
            blue.className = "Co"
        }, timeRef.current)
        timeRef.current += 500
        y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- CO")
            pos.current = tabPos.current.shift()
            setPosition(pos.current)
        }, timeRef.current);
        timeRef.current += 800
        x2 = document.querySelector('.CoToRam .triangleDroit').getBoundingClientRect().left;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- CO")
            pos.current = tabPos.current.shift()
            setPosition(pos.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("RAM <-- CO")
            document.querySelector('.RAM').classList.add('boxShadowBlue');
            ramm.current = tableR.current.shift()
            setFo1(ramm.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.RAM').classList.remove('boxShadowBlue');
            myRef.current.style.opacity = '0%'
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            blue = document.querySelector(".Memoire")
            blue.className = "Memoire boxShadowBlue"
        }, timeRef.current)
        timeRef.current += 500
        machine.memoire.lecture(Machine.RAM, Machine.RIM)//lecture 
        tableR2.current.push(Machine.RIM.value.hexa)
        setTimeout(() => {
            setdyna("LECTURE")
            blue.className = "Memoire"
            blue = document.querySelector(".rim")
            blue.className = "rim boxShadowBlue"
            rimm.current = tableR2.current.shift()
            setFo2(rimm.current)
        }, timeRef.current)
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            blue.className = "rim"
        }, timeRef.current);
        return Machine.RIM //retourner la valeur de l'adresse du compteur ordinal

        /*********************************************************************************************************/
        /*Le mode direct*/

    }, function Drct(Machine, reg, C) {
        var Co = Machine.CO
        var busAdr = Machine.bus_adresse
        var busData = Machine.bus_donnes
        Co.incCO()
        table.current.push(Co.value.hexa)
        setTimeout(() => {
            setdyna("INC CO")
            coo.current = table.current.shift()
            setFo(coo.current)
            blue = document.querySelector(".Co")
            console.log(blue)
            blue.className = "Co boxShadowBlue"
        }, timeRef.current)
        timeRef.current += 500
        machine.bus_adresse.transferer(Machine.CO, Machine.RAM)//co->RAM
        tableR.current.push(Machine.RAM.value.hexa)
        let x1 = myRef.current.getBoundingClientRect().left;//x1 we get actual position of the element
        let y1 = myRef.current.getBoundingClientRect().top;//y1 we get actual position of the element
        let x2 = document.querySelector('.BusCo .rectangle').getBoundingClientRect().left;//destination position
        let y2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().top;//destination position
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("INC CO")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("INC CO")
            myRef.current.style.opacity = '100%'
        }, timeRef.current);
        timeRef.current += 500
        setTimeout(() => {
            setdyna("RAM <-- CO")
            blue.className = "Co"
        }, timeRef.current)
        timeRef.current += 500
        y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- CO")
            pos.current = tabPos.current.shift()
            setPosition(pos.current)
        }, timeRef.current);
        timeRef.current += 800
        x2 = document.querySelector('.CoToRam .triangleDroit').getBoundingClientRect().left;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- CO")
            pos.current = tabPos.current.shift()
            setPosition(pos.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("RAM <-- CO")
            document.querySelector('.RAM').classList.add('boxShadowBlue');
            ramm.current = tableR.current.shift()
            setFo1(ramm.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.RAM').classList.remove('boxShadowBlue');
            myRef.current.style.opacity = '0%'
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            blue = document.querySelector(".Memoire")
            blue.className = "Memoire boxShadowBlue"
        }, timeRef.current)
        timeRef.current += 500
        machine.memoire.lecture(Machine.RAM, Machine.RIM)//lecture 
        tableR2.current.push(Machine.RIM.value.hexa)
        setTimeout(() => {
            setdyna("LECTURE")
            blue.className = "Memoire"
            blue = document.querySelector(".rim")
            blue.className = "rim boxShadowBlue"
            rimm.current = tableR2.current.shift()
            setFo2(rimm.current)
        }, timeRef.current)
        timeRef.current += 500
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.rim').classList.remove('boxShadowBlue');
        }, timeRef.current);
        busData.transferer(Machine.RIM, busAdr)
        x2 = document.querySelector('.RimToRi .rectangle').getBoundingClientRect().left;
        y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            myRef.current.style.opacity = '100%'
        }, timeRef.current);
        y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        x2 = document.querySelector('.RimBusDonnees').getBoundingClientRect().left;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        x2 = document.querySelector('.RamBusDonnees .rectangle').getBoundingClientRect().left;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        x2 = document.querySelector('.CoToRam .triangleDroit').getBoundingClientRect().left;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        busAdr.transferer(busAdr, Machine.RAM)
        tableR.current.push(Machine.RAM.value.hexa)
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            document.querySelector('.RAM').classList.add('boxShadowBlue');
            ramm.current = tableR.current.shift()
            setFo1(ramm.current)
        }, timeRef.current);
        timeRef.current += 500
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.RAM').classList.remove('boxShadowBlue');
        }, timeRef.current);
        setTimeout(() => {
            setdyna("LECTURE")
            myRef.current.style.opacity = '0%'
        }, timeRef.current);
        timeRef.current += 500
        setTimeout(() => {
            setdyna("LECTURE")
            blue = document.querySelector(".Memoire")
            blue.className = "Memoire boxShadowBlue"
        }, timeRef.current)
        timeRef.current += 500
        machine.memoire.lecture(Machine.RAM, Machine.RIM)//lecture
        tableR2.current.push(Machine.RIM.value.hexa)
        setTimeout(() => {
            setdyna("LECTURE")
            blue.className = "Memoire"
            blue = document.querySelector(".rim")
            blue.className = "rim boxShadowBlue"
            rimm.current = tableR2.current.shift()
            setFo2(rimm.current)
        }, timeRef.current)
        timeRef.current += 500
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.rim').classList.remove('boxShadowBlue');
        }, timeRef.current);
        return Machine.RIM

        /*********************************************************************************************************/
        /*Le mode indirect*/

    }, function Indrct(Machine, reg, C) {
        var Co = Machine.CO
        var busAdr = Machine.bus_adresse
        var busData = Machine.bus_donnes
        Co.incCO()//incrémentation de CO
        table.current.push(Co.value.hexa)
        setTimeout(() => {
            setdyna("INC CO")
            coo.current = table.current.shift()
            setFo(coo.current)
            blue = document.querySelector(".Co")
            console.log(blue)
            blue.className = "Co boxShadowBlue"
        }, timeRef.current)
        timeRef.current += 500
        machine.bus_adresse.transferer(Machine.CO, Machine.RAM)//co->RAM
        tableR.current.push(Machine.RAM.value.hexa)
        let x1 = myRef.current.getBoundingClientRect().left;//x1 we get actual position of the element
        let y1 = myRef.current.getBoundingClientRect().top;//y1 we get actual position of the element
        let x2 = document.querySelector('.BusCo .rectangle').getBoundingClientRect().left;//destination position
        let y2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().top;//destination position
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("INC CO")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("INC CO")
            myRef.current.style.opacity = '100%'
        }, timeRef.current);
        timeRef.current += 500
        setTimeout(() => {
            setdyna("RAM <-- CO")
            blue.className = "Co"
        }, timeRef.current)
        timeRef.current += 500
        y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- CO")
            pos.current = tabPos.current.shift()
            setPosition(pos.current)
        }, timeRef.current);
        timeRef.current += 800
        x2 = document.querySelector('.CoToRam .triangleDroit').getBoundingClientRect().left;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- CO")
            pos.current = tabPos.current.shift()
            setPosition(pos.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("RAM <-- CO")
            document.querySelector('.RAM').classList.add('boxShadowBlue');
            ramm.current = tableR.current.shift()
            setFo1(ramm.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.RAM').classList.remove('boxShadowBlue');
            myRef.current.style.opacity = '0%'
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            blue = document.querySelector(".Memoire")
            blue.className = "Memoire boxShadowBlue"
        }, timeRef.current)
        timeRef.current += 500
        machine.memoire.lecture(Machine.RAM, Machine.RIM)//lecture 
        tableR2.current.push(Machine.RIM.value.hexa)
        setTimeout(() => {
            setdyna("LECTURE")
            blue.className = "Memoire"
            blue = document.querySelector(".rim")
            blue.className = "rim boxShadowBlue"
            rimm.current = tableR2.current.shift()
            setFo2(rimm.current)
        }, timeRef.current)
        timeRef.current += 500
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.rim').classList.remove('boxShadowBlue');
        }, timeRef.current);
        busData.transferer(Machine.RIM, busAdr)//RIM->busAdr
        x2 = document.querySelector('.RimToRi .rectangle').getBoundingClientRect().left;
        y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            myRef.current.style.opacity = '100%'
        }, timeRef.current);
        y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        x2 = document.querySelector('.RimBusDonnees').getBoundingClientRect().left;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        x2 = document.querySelector('.RamBusDonnees .rectangle').getBoundingClientRect().left;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        x2 = document.querySelector('.CoToRam .triangleDroit').getBoundingClientRect().left;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        busAdr.transferer(busAdr, Machine.RAM)//busAdr->RAM
        tableR.current.push(Machine.RAM.value.hexa)
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            document.querySelector('.RAM').classList.add('boxShadowBlue');
            ramm.current = tableR.current.shift()
            setFo1(ramm.current)
        }, timeRef.current);
        timeRef.current += 500
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.RAM').classList.remove('boxShadowBlue');
        }, timeRef.current);
        setTimeout(() => {
            setdyna("LECTURE")
            myRef.current.style.opacity = '0%'
        }, timeRef.current);
        timeRef.current += 500
        setTimeout(() => {
            setdyna("LECTURE")
            blue = document.querySelector(".Memoire")
            blue.className = "Memoire boxShadowBlue"
        }, timeRef.current)
        timeRef.current += 500
        machine.memoire.lecture(Machine.RAM, Machine.RIM)//lecture 
        busData.transferer(Machine.RIM, busAdr)//RIM->busAdr
        tableR2.current.push(Machine.RIM.value.hexa)
        setTimeout(() => {
            setdyna("LECTURE")
            blue.className = "Memoire"
            blue = document.querySelector(".rim")
            blue.className = "rim boxShadowBlue"
            rimm.current = tableR2.current.shift()
            setFo2(rimm.current)
        }, timeRef.current)
        timeRef.current += 500
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.rim').classList.remove('boxShadowBlue');
        }, timeRef.current);
        busData.transferer(Machine.RIM, busAdr)
        x2 = document.querySelector('.RimToRi .rectangle').getBoundingClientRect().left;
        y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            myRef.current.style.opacity = '100%'
        }, timeRef.current);
        y2 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        x2 = document.querySelector('.RimBusDonnees').getBoundingClientRect().left;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        x2 = document.querySelector('.RamBusDonnees .rectangle').getBoundingClientRect().left;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        x2 = document.querySelector('.CoToRam .triangleDroit').getBoundingClientRect().left;
        tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            pos.current = tabPos.current.shift()//we get the first element of the array
            setPosition(pos.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 500
        busAdr.transferer(busAdr, Machine.RAM)
        tableR.current.push(Machine.RAM.value.hexa)
        setTimeout(() => {
            setdyna("RAM <-- RIM")
            document.querySelector('.RAM').classList.add('boxShadowBlue');
            ramm.current = tableR.current.shift()
            setFo1(ramm.current)
        }, timeRef.current);
        timeRef.current += 500
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.RAM').classList.remove('boxShadowBlue');
        }, timeRef.current);
        setTimeout(() => {
            setdyna("LECTURE")
            myRef.current.style.opacity = '0%'
        }, timeRef.current);
        timeRef.current += 500
        setTimeout(() => {
            setdyna("LECTURE")
            blue = document.querySelector(".Memoire")
            blue.className = "Memoire boxShadowBlue"
        }, timeRef.current)
        timeRef.current += 500
        machine.memoire.lecture(Machine.RAM, Machine.RIM)//lecture 
        tableR2.current.push(Machine.RIM.value.hexa)
        setTimeout(() => {
            setdyna("LECTURE")
            blue.className = "Memoire"
            blue = document.querySelector(".rim")
            blue.className = "rim boxShadowBlue"
            rimm.current = tableR2.current.shift()
            setFo2(rimm.current)
        }, timeRef.current)
        timeRef.current += 500
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.rim').classList.remove('boxShadowBlue');
        }, timeRef.current);
        return Machine.RIM

        /*********************************************************************************************************/
        /*Le mode registre*/

    }, function Reg(Machine, reg, C) {
        return Machine[reg[parseInt(C, 2)]]

        /*********************************************************************************************************/
        /*Le mode basé*/

    }, function Base(Machine, reg, C) {
        var busAdr = Machine.bus_adresse
        var busData = Machine.bus_donnes
        var Mem = Machine.memoire
        busData.transferer(Machine.BX, busAdr)
        let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
        let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
        let x22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
        let y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- BX")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("RAM <-- BX")
            myRef1.current.style.opacity = '100%'
        }, timeRef.current);
        timeRef.current += 500
        y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- BX")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        x22 = document.querySelector('.RamBusDonnees ').getBoundingClientRect().left;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- BX")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        y22 = document.querySelector('.CoToRam .rectangle ').getBoundingClientRect().top;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- BX")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        x22 = document.querySelector('.CoToRam .triangleDroit ').getBoundingClientRect().left;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- BX")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        busAdr.transferer(busAdr, Machine.RAM)
        tableR.current.push(Machine.RAM.value.hexa)
        setTimeout(() => {
            setdyna("RAM <-- BX")
            myRef1.current.style.opacity = '0%'
            document.querySelector('.RAM').classList.add('boxShadowBlue');
            ramm.current = tableR.current.shift()
            setFo1(ramm.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.RAM').classList.remove('boxShadowBlue');
            document.querySelector('.Memoire').classList.add('boxShadowBlue');
        }, timeRef.current);
        timeRef.current += 800
        Mem.lecture(Machine.RAM, Machine.RIM)
        tableR2.current.push(Machine.RIM.value.hexa)
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.Memoire').classList.remove('boxShadowBlue');
            document.querySelector('.rim').classList.add('boxShadowBlue');
            rimm.current = tableR2.current.shift()
            setFo2(rimm.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.rim').classList.remove('boxShadowBlue');
        }, timeRef.current);
        return Machine.RIM

        /*********************************************************************************************************/
        /*Le mode indexé*/

    }, function Indexe(Machine, reg, C) {
        var busAdr = Machine.bus_adresse
        var busData = Machine.bus_donnes
        var Mem = Machine.memoire
        busData.transferer(Machine.SI, busAdr)
        let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
        let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
        let x22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
        let y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- SI")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("RAM <-- SI")
            myRef1.current.style.opacity = '100%'
        }, timeRef.current);
        timeRef.current += 500
        y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- SI")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        x22 = document.querySelector('.RamBusDonnees ').getBoundingClientRect().left;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- SI")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        y22 = document.querySelector('.CoToRam .rectangle ').getBoundingClientRect().top;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- SI")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        x22 = document.querySelector('.CoToRam .triangleDroit ').getBoundingClientRect().left;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- SI")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        busAdr.transferer(busAdr, Machine.RAM)
        tableR.current.push(Machine.RAM.value.hexa)
        setTimeout(() => {
            setdyna("RAM <-- SI")
            myRef1.current.style.opacity = '0%'
            document.querySelector('.RAM').classList.add('boxShadowBlue');
            ramm.current = tableR.current.shift()
            setFo1(ramm.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.RAM').classList.remove('boxShadowBlue');
            document.querySelector('.Memoire').classList.add('boxShadowBlue');
        }, timeRef.current);
        timeRef.current += 800
        Mem.lecture(Machine.RAM, Machine.RIM)
        tableR2.current.push(Machine.RIM.value.hexa)
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.Memoire').classList.remove('boxShadowBlue');
            document.querySelector('.rim').classList.add('boxShadowBlue');
            rimm.current = tableR2.current.shift()
            setFo2(rimm.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.rim').classList.remove('boxShadowBlue');
        }, timeRef.current);
        return Machine.RIM

        /*********************************************************************************************************/
        /*Le mode basé-indexé*/

    }, function Bindexe(Machine, reg, C) {
        var busAdr = Machine.bus_adresse
        var Mem = Machine.memoire
        var Res = (Machine.SI.value.entier + Machine.BX.value.entier).toString(2).padStart(16, "0")
        busAdr.transferer(new Mot16(Res), Machine.RAM)
        tableR.current.push(Machine.RAM.value.hexa)
        let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
        let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
        let x22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
        let y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- BX + SI")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("RAM <-- BX + SI")
            myRef1.current.style.opacity = '100%'
        }, timeRef.current);
        timeRef.current += 500
        y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- BX + SI")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        x22 = document.querySelector('.RamBusDonnees ').getBoundingClientRect().left;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- BX + SI")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        y22 = document.querySelector('.CoToRam .rectangle ').getBoundingClientRect().top;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- BX + SI")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        x22 = document.querySelector('.CoToRam .triangleDroit ').getBoundingClientRect().left;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- BX + SI")
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("RAM <-- BX + SI")
            myRef1.current.style.opacity = '0%'
            document.querySelector('.RAM').classList.add('boxShadowBlue');
            ramm.current = tableR.current.shift()
            setFo1(ramm.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.RAM').classList.remove('boxShadowBlue');
            document.querySelector('.Memoire').classList.add('boxShadowBlue');
        }, timeRef.current);
        timeRef.current += 800
        Mem.lecture(Machine.RAM, Machine.RIM)
        tableR2.current.push(Machine.RIM.value.hexa)
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.Memoire').classList.remove('boxShadowBlue');
            document.querySelector('.rim').classList.add('boxShadowBlue');
            rimm.current = tableR2.current.shift()
            setFo2(rimm.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.rim').classList.remove('boxShadowBlue');
        }, timeRef.current);
        return Machine.RIM

        /*********************************************************************************************************/
        /*Le mode relatif*/

    }, function Relatif(Machine, reg, C) {
        var busAdr = Machine.bus_adresse
        var busData = Machine.bus_donnes
        var Mem = Machine.memoire
        busData.transferer(Machine[reg[parseInt(C, 2)]], busAdr)
        busAdr.transferer(busAdr, Machine.RAM)
        tableR.current.push(Machine.RAM.value.hexa)
        let x12 = myRef1.current.getBoundingClientRect().left;//x1 we get actual position of the element
        let y12 = myRef1.current.getBoundingClientRect().top;//y1 we get actual position of the element
        let x22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().left;
        let y22 = document.querySelector('.RegToBusDonnees .triangleHaut').getBoundingClientRect().top;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- " + reg[parseInt(C, 2)])
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("RAM <-- " + reg[parseInt(C, 2)])
            myRef1.current.style.opacity = '100%'
        }, timeRef.current);
        timeRef.current += 500
        y22 = document.querySelector('.RimBusDonnees .rectangle').getBoundingClientRect().top;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- " + reg[parseInt(C, 2)])
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        x22 = document.querySelector('.RamBusDonnees ').getBoundingClientRect().left;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- " + reg[parseInt(C, 2)])
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        y22 = document.querySelector('.CoToRam .rectangle ').getBoundingClientRect().top;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- " + reg[parseInt(C, 2)])
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        x22 = document.querySelector('.CoToRam .triangleDroit ').getBoundingClientRect().left;
        tabPos1.current.push({ x: x22 - x12, y: y22 - y12 })// we push the difference between the two positions
        setTimeout(() => {
            setdyna("RAM <-- " + reg[parseInt(C, 2)])
            pos1.current = tabPos1.current.shift()//we get the first element of the array
            setPosition1(pos1.current)//we set the position of the element
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("RAM <-- " + reg[parseInt(C, 2)])
            myRef1.current.style.opacity = '0%'
            document.querySelector('.RAM').classList.add('boxShadowBlue');
            ramm.current = tableR.current.shift()
            setFo1(ramm.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.RAM').classList.remove('boxShadowBlue');
            document.querySelector('.Memoire').classList.add('boxShadowBlue');
        }, timeRef.current);
        timeRef.current += 800
        Mem.lecture(Machine.RAM, Machine.RIM)
        tableR2.current.push(Machine.RIM.value.hexa)
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.Memoire').classList.remove('boxShadowBlue');
            document.querySelector('.rim').classList.add('boxShadowBlue');
            rimm.current = tableR2.current.shift()
            setFo2(rimm.current)
        }, timeRef.current);
        timeRef.current += 800
        setTimeout(() => {
            setdyna("LECTURE")
            document.querySelector('.rim').classList.remove('boxShadowBlue');
        }, timeRef.current);
        return Machine.RIM
    }]

    /**************************************************************************** */
    //in the connected case
    let blue
    const [hexx, setHexx] = useState([])
    const HandleToggle = () => {
        setShowPageOne(true)
        timeRef.current = 0
        setTimeout(() => {
            if (comp) {
                co.RAZ()//RAZ co=0
                table.current.push(co.value.hexa)
                //in the disconnected case
                console.log(table.current)
                setTimeout(() => {
                    setdyna("RAZ CO")
                    coo.current = table.current.shift()
                    setFo(coo.current)
                    blue = document.querySelector(".Co")
                    console.log(blue)
                    blue.className = "Co boxShadowBlue"
                    myRef.current.style.opacity = '0%'
                }, timeRef.current)
                timeRef.current += 800
                machine.bus_adresse.transferer(machine.CO, machine.RAM)//co->RAM
                tableR.current.push(machine.RAM.value.hexa)
                let x1 = myRef.current.getBoundingClientRect().left;//x1 we get actual position of the element
                let y1 = myRef.current.getBoundingClientRect().top;//y1 we get actual position of the element
                let x2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().left;//destination position
                let y2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().top;//destination position
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
                setTimeout(() => {
                    setdyna("RAZ CO")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("RAZ CO")
                    blue.className = "Co"
                }, timeRef.current)
                timeRef.current += 1000
                setTimeout(() => {
                    setdyna("RAM <-- CO")
                    myRef.current.style.opacity = '100%'
                }, timeRef.current);
                timeRef.current += 800
                y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                setTimeout(() => {
                    setdyna("RAM <-- CO")
                    pos.current = tabPos.current.shift()
                    setPosition(pos.current)
                }, timeRef.current);
                timeRef.current += 800
                x2 = document.querySelector('.CoToRam .triangleDroit').getBoundingClientRect().left;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                setTimeout(() => {
                    setdyna("RAM <-- CO")
                    pos.current = tabPos.current.shift()
                    setPosition(pos.current)
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("RAM <-- CO")
                    document.querySelector('.RAM').classList.add('boxShadowBlue');
                    ramm.current = tableR.current.shift()
                    setFo1(ramm.current)
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("LECTURE")
                    document.querySelector('.RAM').classList.remove('boxShadowBlue');
                    myRef.current.style.opacity = '0%'
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("LECTURE")
                    blue = document.querySelector(".Memoire")
                    blue.className = "Memoire boxShadowBlue"
                }, timeRef.current)
                timeRef.current += 1000
                machine.memoire.lecture(machine.RAM, machine.RIM)//lecture 
                tableR2.current.push(machine.RIM.value.hexa)
                setTimeout(() => {
                    setdyna("LECTURE")
                    blue.className = "Memoire"
                    blue = document.querySelector(".rim")
                    blue.className = "rim boxShadowBlue"
                    rimm.current = tableR2.current.shift()
                    setFo2(rimm.current)
                }, timeRef.current)
                timeRef.current += 800
                x1 = myRef.current.getBoundingClientRect().left;
                y1 = myRef.current.getBoundingClientRect().top;
                console.log(myRef.current)
                x2 = document.querySelector('.RimToRi .rectangle').getBoundingClientRect().left;
                y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                setTimeout(() => {
                    setdyna("LECTURE")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("RI <-- RIM")
                    myRef.current.style.opacity = '100%'
                }, timeRef.current);
                timeRef.current += 800
                y2 = document.querySelector('.RimBusRi .rectangle').getBoundingClientRect().top
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                setTimeout(() => {
                    setdyna("RI <-- RIM")
                    blue.className = "rim"
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element                   
                }, timeRef.current);
                timeRef.current += 1000
                x2 = document.querySelector('.RimBusRi .triangleGauche').getBoundingClientRect().left;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                setTimeout(() => {
                    setdyna("RI <-- RIM")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("RI <-- RIM")
                    myRef.current.style.opacity = '0%'
                }, timeRef.current);
                timeRef.current += 800
                machine.bus_donnes.transferer(machine.RIM, machine.RI)//rim->ri
                tableR3.current.push(machine.RIM.value.hexa)
                setTimeout(() => {
                    setdyna("RI <-- RIM")
                    document.querySelector('.Ri').classList.add('boxShadowBlue');
                    rii.current = tableR3.current.shift()
                    setFo3(rii.current)
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("UC <-- RI")
                    document.querySelector('.Ri').classList.remove('boxShadowBlue');
                }, timeRef.current);
                x2 = document.querySelector('.BusUcToRi').getBoundingClientRect().left;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                setTimeout(() => {
                    setdyna("UC <-- RI")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800
                y2 = document.querySelector('.BusUcToRi .triangleBas').getBoundingClientRect().top;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                setTimeout(() => {
                    setdyna("UC <-- RI")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800
                setTimeout(() => {
                    setdyna("UC <-- RI")
                    myRef.current.style.opacity = '100%'
                }, timeRef.current);
                timeRef.current += 800
                y2 = document.querySelector('.BusUcToRi, triangleHaut').getBoundingClientRect().top;
                tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                setTimeout(() => {
                    setdyna("UC <-- RI")
                    pos.current = tabPos.current.shift()//we get the first element of the array
                    setPosition(pos.current)//we set the position of the element
                }, timeRef.current);
                timeRef.current += 800
                let Arr = machine.RI.decode();//decode la donnee de ri
                machine.UC = new UniteCommandes(Arr[0], Arr[1], Arr[2], Arr[3])
                setMachine(machine)
                let CC = machine.UC.Coprnd[parseInt(machine.UC.Cop, 2)]
                console.log(CC)
                setTimeout(() => {
                    setdyna(CC)
                    document.querySelector('.Uc').classList.add('boxShadowBlue');
                }, timeRef.current);
                timeRef.current += 2000
                setTimeout(() => {
                    setdyna(CC)
                    document.querySelector('.Uc').classList.remove('boxShadowBlue');
                    myRef.current.style.opacity = '0%'
                }, timeRef.current);
                machine.UC = new UniteCommandes(Arr[0], Arr[1], Arr[2], Arr[3])
                setMachine(machine)
                while (parseInt(machine.UC.Cop, 2) !== 27) {
                    timeRef.current += 800
                    console.log(timeRef.current)
                    Traiter(machine)
                    setMachine(machine)
                    if (parseInt(machine.UC.Cop, 2) !== 17 && parseInt(machine.UC.Cop, 2) !== 18 && parseInt(machine.UC.Cop, 2) !== 19) {
                        machine.CO.incCO()
                    }
                    table.current.push(machine.CO.value.hexa)
                    setTimeout(() => {
                        setdyna("INC CO")
                        coo.current = table.current.shift()
                        setFo(coo.current)
                        let blue = document.querySelector(".Co")
                        blue.className = "Co boxShadowBlue"
                    }, timeRef.current)
                    timeRef.current += 800
                    machine.bus_adresse.transferer(machine.CO, machine.RAM)//co->RAM
                    tableR.current.push(machine.RAM.value.hexa)
                    let x1 = myRef.current.getBoundingClientRect().left;//x1 we get actual position of the element
                    let y1 = myRef.current.getBoundingClientRect().top;//y1 we get actual position of the element
                    let x2 = document.querySelector('.BusCo .rectangle').getBoundingClientRect().left;//destination position
                    let y2 = document.querySelector('.BusCo .triangleHaut').getBoundingClientRect().top;//destination position
                    tabPos.current.push({ x: x2 - x1, y: y2 - y1 })// we push the difference between the two positions
                    setTimeout(() => {
                        setdyna("INC CO")
                        pos.current = tabPos.current.shift()//we get the first element of the array
                        setPosition(pos.current)//we set the position of the element
                    }, timeRef.current);
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("INC CO")
                        myRef.current.style.opacity = '100%'
                    }, timeRef.current);
                    timeRef.current += 500
                    setTimeout(() => {
                        setdyna("RAM <-- CO")
                        let blue = document.querySelector(".Co")
                        blue.className = "Co"
                    }, timeRef.current)
                    timeRef.current += 800
                    y2 = document.querySelector('.CoToRam .rectangle').getBoundingClientRect().top;
                    tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                    setTimeout(() => {
                        setdyna("RAM <-- CO")
                        pos.current = tabPos.current.shift()
                        setPosition(pos.current)
                    }, timeRef.current);
                    timeRef.current += 800
                    x2 = document.querySelector('.CoToRam .triangleDroit').getBoundingClientRect().left;
                    tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                    setTimeout(() => {
                        setdyna("RAM <-- CO")
                        pos.current = tabPos.current.shift()
                        setPosition(pos.current)
                    }, timeRef.current);
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("RAM <-- CO")
                        document.querySelector('.RAM').classList.add('boxShadowBlue');
                    }, timeRef.current);
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("LECTURE")
                        document.querySelector('.RAM').classList.remove('boxShadowBlue');
                        myRef.current.style.opacity = '0%'
                    }, timeRef.current);
                    timeRef.current += 800
                    console.log(myRef.current)
                    console.log(myRef.current)
                    setTimeout(() => {
                        setdyna("LECTURE")
                        ramm.current = tableR.current.shift()
                        setFo1(ramm.current)
                    }, timeRef.current)
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("LECTURE")
                        let blue = document.querySelector(".Memoire")
                        blue.className = "Memoire boxShadowBlue"
                    }, timeRef.current)
                    timeRef.current += 1000
                    machine.memoire.lecture(machine.RAM, machine.RIM)//lecture 
                    tableR2.current.push(machine.RIM.value.hexa)
                    setTimeout(() => {
                        setdyna("LECTURE")
                        let blue = document.querySelector(".Memoire")
                        blue.className = "Memoire"
                        blue = document.querySelector(".rim")
                        blue.className = "rim boxShadowBlue"
                        rimm.current = tableR2.current.shift()
                        setFo2(rimm.current)
                    }, timeRef.current)
                    timeRef.current += 800
                    x1 = myRef.current.getBoundingClientRect().left;
                    y1 = myRef.current.getBoundingClientRect().top;
                    console.log(myRef.current)
                    x2 = document.querySelector('.RimToRi .rectangle').getBoundingClientRect().left;
                    y2 = document.querySelector('.RimToRi .triangleHaut').getBoundingClientRect().top;
                    tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                    setTimeout(() => {
                        setdyna("LECTURE")
                        pos.current = tabPos.current.shift()//we get the first element of the array
                        setPosition(pos.current)//we set the position of the element
                    }, timeRef.current);
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("RI <-- RIM")
                        myRef.current.style.opacity = '100%'
                    }, timeRef.current);
                    timeRef.current += 800
                    y2 = document.querySelector('.RimBusRi .rectangle').getBoundingClientRect().top
                    tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                    setTimeout(() => {
                        setdyna("RI <-- RIM")
                        let blue = document.querySelector(".rim")
                        blue.className = "rim"
                        pos.current = tabPos.current.shift()//we get the first element of the array
                        setPosition(pos.current)//we set the position of the element
                    }, timeRef.current);
                    timeRef.current += 1000
                    x2 = document.querySelector('.RimBusRi .triangleGauche').getBoundingClientRect().left;
                    tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                    setTimeout(() => {
                        setdyna("RI <-- RIM")
                        pos.current = tabPos.current.shift()//we get the first element of the array
                        setPosition(pos.current)//we set the position of the element
                    }, timeRef.current);
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("RI <-- RIM")
                        myRef.current.style.opacity = '0%'
                    }, timeRef.current);
                    timeRef.current += 800
                    machine.bus_donnes.transferer(machine.RIM, machine.RI)//rim->ri
                    tableR3.current.push(machine.RIM.value.hexa)
                    setTimeout(() => {
                        setdyna("UC <-- RI")
                        document.querySelector('.Ri').classList.add('boxShadowBlue');
                        rii.current = tableR3.current.shift()
                        setFo3(rii.current)
                    }, timeRef.current);
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("UC <-- RI")
                        document.querySelector('.Ri').classList.remove('boxShadowBlue');
                    }, timeRef.current);
                    x2 = document.querySelector('.BusUcToRi').getBoundingClientRect().left;
                    tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                    setTimeout(() => {
                        setdyna("UC <-- RI")
                        pos.current = tabPos.current.shift()//we get the first element of the array
                        setPosition(pos.current)//we set the position of the element
                    }, timeRef.current);
                    timeRef.current += 800
                    y2 = document.querySelector('.BusUcToRi .triangleBas').getBoundingClientRect().top;
                    tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                    setTimeout(() => {
                        setdyna("UC <-- RI")
                        pos.current = tabPos.current.shift()//we get the first element of the array
                        setPosition(pos.current)//we set the position of the element
                    }, timeRef.current);
                    timeRef.current += 800
                    setTimeout(() => {
                        setdyna("UC <-- RI")
                        myRef.current.style.opacity = '100%'
                    }, timeRef.current);
                    timeRef.current += 800
                    y2 = document.querySelector('.BusUcToRi, triangleHaut').getBoundingClientRect().top;
                    tabPos.current.push({ x: x2 - x1, y: y2 - y1 })
                    setTimeout(() => {
                        setdyna("UC <-- RI")
                        pos.current = tabPos.current.shift()//we get the first element of the array
                        setPosition(pos.current)//we set the position of the element
                    }, timeRef.current);
                    timeRef.current += 800
                    Arr = machine.RI.decode()//decode la donnee de ri
                    machine.UC = new UniteCommandes(Arr[0], Arr[1], Arr[2], Arr[3])
                    let code1 = machine.UC.Coprnd[parseInt(machine.UC.Cop, 2)]
                    setTimeout(() => {
                        setdyna(code1)
                        document.querySelector('.Uc').classList.add('boxShadowBlue');
                    }, timeRef.current);
                    timeRef.current += 2000
                    setTimeout(() => {
                        setdyna(code1)
                        document.querySelector('.Uc').classList.remove('boxShadowBlue');
                        myRef.current.style.opacity = '0%'
                    }, timeRef.current);

                }
            }
            setTimeout(() => {
                setShowPopup(true)
            }, timeRef.current);
        }, 1000)
    }

    return (
        <>{showPageOne ? <>
            <h2 className='dynaa'  >{dyna}</h2>
            <div className='Light' ref={myRef} style={{ position: 'absolute', transform: `translate(${position.x}px, ${position.y}px)` }} />
            <div className='Light1' ref={myRef1} style={{ position: 'absolute', transform: `translate(${position1.x}px, ${position1.y}px)` }} />
            <Simulation case1={fo5} case2={fo6} memoire={fo13} Co={fo} Ram={fo1} Rim={fo2} RI={fo3} Pile={fo12}
                ACC={fo4} SI={fo7} DI={fo8} BX={fo9} Flags={fo11} CX={fo10} mot={fo13} /></> : <Code handleToggle={HandleToggle} handleClick={HandleClick} />}
            {showPopup && (
                <div className="overlay">
                    <FinSimulation />
                </div>
            )}

        </>

    )

}
