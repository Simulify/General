export function Decoup(text) {
let phrase=""
let phrases=[]
// decouper le texte en phrases
for (let index = 0; index < text.length; index++) {
    const element = text[index]
    if (element=="\n") {
        phrases.push(phrase)
        phrase=""
    }
    else{phrase=phrase+element}
}
phrases.push(phrase)
///********************************* */
// decouper chaque phrase en mots
for(let i=0;i<phrases.length;i++){
    let words=[]
    let word=""
    const element=phrases[i]
    for ( let index = 0; index < element.length; index++) {
        const ele = element[index];
        if (ele==" ") {
            words.push(word)
            word=""
        }
        else{word=word+ele}
    }
    words.push(word)
    phrases[i]=words
}
return phrases
}
export var Coprnd=["ADD","SUB","INC","DEC","MUL","NOT",
            "AND","OR","NAND","NOR","XOR",
            "CMP","RAZ","SHL","SHR","ROL",
            "ROR","LOOP","BCV","BCF","ENT","SORT",
            "MOV","CHM","RGM","PUSH","POP","STOP"]
export var  reg=["ACC","BX","CX","DX","SI","CO"]

export function Compile(phrases) { 
    let Coprnd=["ADD","SUB","INC","DEC","MUL","NOT",
    "AND","OR","NAND","NOR","XOR",
    "CMP","RAZ","SHL","SHR","ROL",
    "ROR","LOOP","BCV","BCF","ENT","SORT",
    "MOV","CHM","RGM","PUSH","POP","STOP"]
let reg=["ACC","BX","CX","DX","SI","CO"]
let labels=[]
let k=0
for (let i = 0; i < phrases.length; i++) {
    const element = phrases[i];
    if (element.length>4){console.log("erreur dans la ligne ",i)}
    else{
        if(element[0][element[0].length-1]==":"){
            let label = {
                value:element[0].slice(0,element[0].length-1),
                adr:(i+k).toString(2).padStart(16,"0") }
            labels.push(label)
            let v= treatCop(element,1,Coprnd)
        let instr
            if (v==12 || v==2 || v==3 || v==5|| (v>=23&&v<=26)) {
                if (element.length!=3){console.log("erreur dans la ligne ",i)}
                else{
                    if (v==12 || v==25 || v==26 ) {
                        treatReg(element[2],reg)
                        let instr =`${v.toString(2).padStart(6,"0")}011${treatReg(element[2],reg)}0000`
                        phrases[i]=instr
                    }
                    else {
                        let obj=detectOp(element[2],reg)
                        if (obj==-1) {
                            //console.log(erreur)
                        } else {
                            instr=`${v.toString(2).padStart(6,"0")}${obj.kind.toString(2).padStart(3,"0")}`
                            
                            if (obj.kind==3) {
                                phrases[i]=`${instr}000${obj.value.padStart(4,"0")}`
                            }
                            else if (obj.kind>=0 && obj.kind<=2){
                                instr=`${v.toString(2).padStart(6,"0")}${obj.kind.toString(2).padStart(3,"0")}0000000`
                                phrases[i]=[instr,obj.value]
                                k=k+1
                            }
                            else if(obj.kind==7){
                                instr=`${v.toString(2).padStart(6,"0")}${obj.kind.toString(2).padStart(3,"0")}000${obj.value.padStart(4,"0")}`
                                phrases[i]=instr
                            }
                            else{
                                instr=`${v.toString(2).padStart(6,"0")}${obj.kind.toString(2).padStart(3,"0")}0000000`
                                phrases[i]=instr
                            }
                        }
                        
                    }
                }
            }
            else if(v==0 || v==1 || v==4 || (v>=6&&v<=11) ||v==22){
                if (element.length!=4){console.log("erreur dans la ligne ",i)}
                else
                {let registre=treatReg(element[2],reg)
                let obj=detectOp(element[3],reg)
                instr=`${v.toString(2).padStart(6,"0")}${obj.kind.toString(2).padStart(3,"0")}${registre}`
                if (obj.kind==3) {instr=instr+`${obj.value.padStart(4,"0")}`;phrases[i]=instr}
                else if(obj.kind>=0&&obj.kind<=2){phrases[i]=[(instr+"0000"),obj.value];k=k+1}
                else if (obj.kind==7){instr=instr+`${obj.value.padStart(4,"0")}`;phrases[i]=instr}
                else {instr=instr+"0000";phrases[i]=instr}}
            }
            else if(v>=13&&v<=16){
                if (element.length!=4){console.log("erreur dans la ligne ",i)}
                else{
                    let obj=detectOp(element[2],reg)
                    if (obj.kind==0) {console.log("erreur dans la ligne ",i)} 
                    else {
                        instr=`${v.toString(2).padStart(6,"0")}${obj.kind.toString(2).padStart(3,"0")}`
                        if(obj.kind==3 || obj.kind==7){instr=instr+`${obj.value}${parseInt(element[3]).toString(2).padStart(4,"0")}`;phrases[i]=instr}
                        else if(obj.kind==1 || obj.kind==2){instr=instr+`000${parseInt(element[3]).toString(2).padStart(4,"0")}`
                        phrases[i]=[instr,obj.value];k=k+1}
                        else{instr=instr+`000${parseInt(element[3]).toString(2).padStart(4,"0")}`;phrases[i]=instr}
                    }
                }
            }
            else if(v==17){
                if (element.length!=3){console.log("erreur dans la ligne ",i)}
                instr=`${v.toString(2).padStart(6,"0")}0010100000`
                if (labels.filter(obj => obj.value === element[2]).length==0) {console.log("erreur dans la ligne ",i,"etiquette non existante")}
                else{
                    phrases[i]=[instr,labels.filter(obj => obj.value === element[2])[0].adr]
                    k=k+1}
            }
            else if(v==18 || v==19){
                if (!element.length==4){console.log("erreur dans la ligne ",i)}
                else{
                    instr=`${v.toString(2).padStart(6,"0")}001000${parseInt(element[2]).toString(2).padStart(4,"0")}`
                    if (labels.filter(obj => obj.value === element[3]).length==0) {console.log("erreur dans la ligne ",i,"etiquette non existante")}
                else{
                    phrases[i]=[instr,labels.filter(obj => obj.value === element[3])[0].adr]
                    k=k+1}
                }
            }
            else if(v==20||v==21){
                if (!element.length==4){console.log("erreur dans la ligne ",i)}
                else
                {instr=`${v.toString(2).padStart(6,"0")}000000${parseInt(element[2]).toString(2).padStart(4,"0")}`
                phrases[i]=instr}
            }
            else if(v==27){
                phrases[i]=`${v.toString(2).padStart(6,"0")}0000000000`
            }
            
            }
        else{
        let v= treatCop(element,0,Coprnd)
        let instr
            if (v==12 || v==2 || v==3 || v==5|| (v>=23&&v<=26)) {
                if (element.length>2){console.log("erreur dans la ligne ",i)}
                else{
                    if (v==12 || v==25 || v==26 ) {
                        treatReg(element[1],reg)
                        let instr =`${v.toString(2).padStart(6,"0")}011${treatReg(element[1],reg)}0000`
                        phrases[i]=instr
                    }
                    else {
                        let obj=detectOp(element[1],reg)
                        if (obj==-1) {
                           // console.log(erreur)
                        } else {
                            instr=`${v.toString(2).padStart(6,"0")}${obj.kind.toString(2).padStart(3,"0")}`
                            
                            if (obj.kind==3) {
                                phrases[i]=`${instr}000${obj.value.padStart(4,"0")}`
                            }
                            else if (obj.kind>=0 && obj.kind<=2){
                                instr=`${v.toString(2).padStart(6,"0")}${obj.kind.toString(2).padStart(3,"0")}0000000`
                                phrases[i]=[instr,obj.value];k=k+1
                            }
                            else if(obj.kind==7){
                                instr=`${v.toString(2).padStart(6,"0")}${obj.kind.toString(2).padStart(3,"0")}000${obj.value.padStart(4,"0")}`
                                phrases[i]=instr
                            }
                            else{
                                instr=`${v.toString(2).padStart(6,"0")}${obj.kind.toString(2).padStart(3,"0")}0000000`
                                phrases[i]=instr
                            }
                        }
                        
                    }
                }
            }
            else if(v==0 || v==1 || v==4 || (v>=6&&v<=11) ||v==22){
                if (!element.length==3){console.log("erreur dans la ligne ",i)}
                else
                {
                    let registre=treatReg(element[1],reg)
                let obj=detectOp(element[2],reg)
                instr=`${v.toString(2).padStart(6,"0")}${obj.kind.toString(2).padStart(3,"0")}${registre}`
                if (obj.kind==3) {instr=instr+`${obj.value.padStart(4,"0")}`;phrases[i]=instr}
                else if(obj.kind>=0&&obj.kind<=2){phrases[i]=[(instr+"0000"),obj.value]; k=k+1}
                else if (obj.kind==7){instr=instr+`${obj.value.padStart(4,"0")}`;phrases[i]=instr}
                else {instr=instr+"0000";phrases[i]=instr}}
            }
            else if(v>=13&&v<=16){
                if (!element.length==3){console.log("erreur dans la ligne ",i)}
                else{
                    let obj=detectOp(element[1],reg)
                    if (obj.kind==0) {console.log("erreur dans la ligne ",i)} 
                    else {
                        instr=`${v.toString(2).padStart(6,"0")}${obj.kind.toString(2).padStart(3,"0")}`
                        if(obj.kind==3 || obj.kind==7){instr=instr+`${obj.value}${parseInt(element[2]).toString(2).padStart(4,"0")}`;phrases[i]=instr}
                        else if(obj.kind==1 || obj.kind==2){instr=instr+`000${parseInt(element[2]).toString(2).padStart(4,"0")}`
                        phrases[i]=[instr,obj.value]
                        k=k+1}
                        else{instr=instr+`000${parseInt(element[2]).toString(2).padStart(4,"0")}`;phrases[i]=instr}
                    }
                }
            }
            else if(v==17){
                if (!element.length==2){console.log("erreur dans la ligne ",i)}
                instr=`${v.toString(2).padStart(6,"0")}0010100000`
                if (labels.filter(obj => obj.value === element[1]).length==0) {console.log("erreur dans la ligne ",i,"etiquette non existante")}
                else{
                    phrases[i]=[instr,(labels.filter(obj => obj.value === element[1]))[0].adr]
                    k=k+1}
            }
            else if(v==18 || v==19){
                if (!element.length==3){console.log("erreur dans la ligne ",i)}
                else{
                    instr=`${v.toString(2).padStart(6,"0")}001000${parseInt(element[1]).toString(2).padStart(4,"0")}`
                    if (labels.filter(obj => obj.value === element[2]).length==0) {console.log("erreur dans la ligne ",i,"etiquette non existante")}
                else{
                    phrases[i]=[instr,labels.filter(obj => obj.value === element[2])[0].adr]
                    k=k+1}
                }
            }
            else if(v==20||v==21){
                if (!element.length==3){console.log("erreur dans la ligne ",i)}
                else
                {instr=`${v.toString(2).padStart(6,"0")}000000${parseInt(element[1]).toString(2).padStart(4,"0")}`
                phrases[i]=instr}
            }
            else if(v==27){
                phrases[i]=`${v.toString(2).padStart(6,"0")}0000000000`
            }
    }
    }
}
return phrases
}
function treatCop(element,i,Coprnd) {
    if(Coprnd.indexOf(element[i])==-1){
        console.log("erreur")
        return -1
    }
    else{
        let cop=Coprnd.indexOf(element[i])
         return cop
    }
}
function treatReg(R,reg) {    
            if (reg.indexOf(R)==-1) {
                console.log("erreur cet operande n'est pas un registre")
                return -1
            }
            else{
                return reg.indexOf(R).toString(2).padStart(3,"0")
            }
}
function detectOp(op1,reg) {
    let o=op1[0]
    let b
    if(o=="["){
        if (op1[op1.length-1]!="]") {console.log("erreur1")}
        else{ 
            if (!isNaN(op1.slice(1,op1.length-1))) {
                return {value:parseInt(op1.slice(1,op1.length-1),10).toString(2).padStart(16,"0").toString(2),kind:1}
            } else if (op1[op1.length-2]=="H") {
                return {value:parseInt(op1.slice(1,op1.length-2),16).toString(2).padStart(16,"0").toString(2),kind:1}
            }
            else if(op1[op1.length-2]=="B"){
                return {value:parseInt(op1.slice(1,op1.length-2),2).toString(2).padStart(16,"0"),kind:1}
            }
            else if(( b=reg.indexOf(op1.slice(1,op1.length-1)))!=-1){
               if (b==1) {
                return {value:"001",kind:4}
               }
               else if(b==4){
                return {value:"100",kind:5}
               }
               else{
                return {value:b.toString(2).padStart(3,"0"),kind:7}
               }
            }
            else if (op1.slice(1,op1.length-1)=="BX+SI" || op1.slice(1,op1.length-1)=="SI+BX") {
                return {value:op1.slice(1,op1.length-1),kind:6}
            }
            }
    }
    else if(o=="*"){
        if (op1[1]!=",") {console.log("erreur , attendue apres *")}
        else {
            if (!isNaN(op1.slice(2,op1.length))) {
            return {value:parseInt(op1.slice(2,op1.length),10).toString(2).padStart(16,"0").toString(2),kind:2}
        } else if (op1[op1.length-1]=="H") {
            return {value:parseInt(op1.slice(2,op1.length-1),16).toString(2).padStart(16,"0").toString(2),kind:2}
        }
        else if(op1[op1.length-1]=="B"){
            return {value:parseInt(op1.slice(2,op1.length-1),2).toString(2).padStart(16,"0"),kind:2}
        }}
    }
    else if (!isNaN(op1)&& o!="*"){
        return {value:parseInt(op1).toString(2).padStart(16,"0"), kind:0}
    }
    else if (op1[op1.length-1]=="H" && o!="*"){
        return {value:parseInt(op1.slice(0,op1.length-1),16).toString(2).padStart(16,"0"), kind:0}
    }
    else if(op1[op1.length-1]=="B" && o!="*"){
        return {value:op1.slice(0,op1.length-1).padStart(16,"0"), kind:0}
    }
    else if (reg.indexOf(op1)!=-1){
        return { value:reg.indexOf(op1).toString(2).padStart(3,"0"),kind:3}
    }
    else{return -1}
}

export function BinToMnem(mots) {
    //takes mots which aan array of binary instructions and returns an array of mnemonics
    let Instructions=[]
    for (let index = 0; index < mots.length; index++) {
        const element = mots[index]
            const cop = element.slice(0, 6)
            const mod = element.slice(6, 9)
            const r1 = element.slice(9, 12)
            const r2 = element.slice(12, 16)
            let Instr=`${Coprnd[parseInt(cop,2)]} `
            if ((parseInt(cop,2)<12 && parseInt(cop,2)>5)||parseInt(cop,2)==0||parseInt(cop,2)==1||parseInt(cop,2)==4||parseInt(cop,2)==22) {
                Instr=Instr+`${reg[parseInt(r1,2)]} `
                if (parseInt(mod,2)==0) {
                    index++ 
                    let imm=parseInt(mots[index],2).toString(16)
                    Instr=Instr+imm
                }
                else if(parseInt(mod,2)==1){
                   index++ 
                    let drct=parseInt(mots[index],2).toString(16)
                    Instr=Instr+`[${drct}]`
                }
                else if(parseInt(mod,2)==2){
                   index++ 
                    let indrct=parseInt(mots[index],2).toString(16)
                    Instr=Instr+`*,${indrct}`
                }
                else if(parseInt(mod,2)==3){
                   
                   Instr=Instr+`${reg[parseInt(r2,2)]}`
                }
                else if(parseInt(mod,2)==4){
                   
                   Instr=Instr+"[BX]"
                }
                else if(parseInt(mod,2)==5){
                   
                   Instr=Instr+"[SI]"
                }
                else if(parseInt(mod,2)==6){
                   
                   Instr=Instr+"[BX+SI]"
                }
                else if(parseInt(mod,2)==7){
                   
                   Instr=Instr+`[${reg[parseInt(r2,2)]}]`
                }
            }
            else if(parseInt(cop,2)==2 ||parseInt(cop,2)==3 || parseInt(cop,2)==5 || (parseInt(cop,2)>=23&& parseInt(cop,2)<=24)){
   
               if (parseInt(mod,2)==0) {
                    index++ 
                    let imm=parseInt(mots[index],2).toString(16)
                    Instr=Instr+imm
                }
                else if(parseInt(mod,2)==1){
                   index++ 
                    let drct=parseInt(mots[index],2).toString(16)
                    Instr=Instr+`[${drct}]`
                }
                else if(parseInt(mod,2)==2){
                   index++ 
                    let indrct=parseInt(mots[index],2).toString(16)
                    Instr=Instr+`*,${indrct}`
                }
                else if(parseInt(mod,2)==3){
                   
                   Instr=Instr+`${reg[parseInt(r2,2)]}`
                }
                else if(parseInt(mod,2)==4){
                   
                   Instr=Instr+"[BX]"
                }
                else if(parseInt(mod,2)==5){
                   
                   Instr=Instr+"[SI]"
                }
                else if(parseInt(mod,2)==6){
                   
                   Instr=Instr+"[BX+SI]"
                }
                else if(parseInt(mod,2)==7){
                   
                   Instr=Instr+`[${reg[parseInt(r2,2)]}]`
                }
            }
            else if(parseInt(cop,2)==25 ||parseInt(cop,2)==26 ||parseInt(cop,2)==12 ){
               Instr=Instr+`${reg[parseInt(r1,2)]}`
            }
            else if(parseInt(cop,2)>=13&&parseInt(cop,2)<=16){
   
                if(parseInt(mod,2)==1){
                  index++ 
                   let drct=parseInt(mots[index],2).toString(16)
                   Instr=Instr+`[${drct}] ${parseInt(r2,2).toString(16)}`
               }
               else if(parseInt(mod,2)==2){
                  index++ 
                   let indrct=parseInt(mots[index],2).toString(16)
                   Instr=Instr+`*,${indrct} ${parseInt(r2,2).toString(16)}`
               }
               else if(parseInt(mod,2)==3){
                  
                  Instr=Instr+`${reg[parseInt(r1,2)]} ${parseInt(r2,2).toString(16)}`
               }
               else if(parseInt(mod,2)==4){
                  
                  Instr=Instr+"[BX]"+` ${parseInt(r2,2).toString(16)}`
               }
               else if(parseInt(mod,2)==5){
                  
                  Instr=Instr+"[SI]"+` ${parseInt(r2,2).toString(16)}`
               }
               else if(parseInt(mod,2)==6){
                  
                  Instr=Instr+"[BX+SI]"+` ${parseInt(r2,2).toString(16)}`
               }
               else if(parseInt(mod,2)==7){
                  
                  Instr=Instr+`[${reg[parseInt(r1,2)]}] ${parseInt(r2,2).toString(16)}`
               }
            }
            else if(parseInt(cop,2)==17){
               index++ 
               Instr=`LOOP ${parseInt(mots[index],2).toString(16)}`
            }
            else if(parseInt(cop,2)==19 ||parseInt(cop,2)==18){
               index++ 
               Instr=Instr+`${parseInt(r2,2).toString(16)} ${parseInt(mots[index],2).toString(16)}`
            }
            else if(parseInt(cop,2)==20 ||parseInt(cop,2)==21){
               Instr=Instr+`${parseInt(r2,2).toString(16)}`
            }
            Instructions.push(Instr)
    }
   return Instructions
}


export function binaryToHexadecimal(binaryString) {
    // Vérifier que la chaîne de caractères ne contient que des 0 et 1
    if (/^[01]+$/.test(binaryString)) {
      // Ajouter des zéros à gauche pour compléter jusqu'à un multiple de 4
      while (binaryString.length % 4 !== 0) {
        binaryString = '0' + binaryString;
      }
      // Convertir chaque groupe de 4 caractères binaires en un caractère hexadécimal
      let hexString = '';
      for (let i = 0; i < binaryString.length; i += 4) {
        let binaryGroup = binaryString.substr(i, 4);
        let hexDigit = parseInt(binaryGroup, 2).toString(16).toUpperCase();
        hexString += hexDigit;
      }
      return hexString.padStart(4, '0');
    // } else {
    //   throw new Error('La chaîne de caractères ne représente pas un nombre binaire valide.');
    // }
  }}