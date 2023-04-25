

import Mot16 from './Mot16.js';
import mot_mem from './mot_mem.js';
import CO from './Registres/CO.js'
var a = new Mot16("11000000");
var b = new Mot16("00000100");
//const prompt = require("prompt-sync")();
class Instructions {
  constructor() {}

  static ADD(a,b,Flags) {
    let x = a.entier
    let y = b.entier
    let resultat = x + y
    Flags.Carry(a,b);Flags.Overflow(resultat);Flags.Zero(resultat)
    Flags.Parity(resultat.toString(2).padStart(16, "0"))
    return resultat.toString(2).padStart(16, "0")
  }

  static SUB(a,b,Flags) {
    let x = a.entier;
    let y = b.entier;
    let resultat = x - y;
    Flags.Negatif(resultat);Flags.Zero(resultat);
    Flags.Parity(resultat.toString(2).padStart(16, "0"));
    return resultat.toString(2).padStart(16, "0");
  }

  static INC(a,Flags) {
    let x = a.entier;
    let resultat = x + 1;
    Flags.Carry(a,b);Flags.Overflow(resultat);
    Flags.Parity(resultat.toString(2).padStart(16, "0"));
    return resultat.toString(2).padStart(16, "0");
  }

  static DEC(a,Flags) {
    let x = a.entier;
    let resultat = x - 1;
    Flags.Negatif(resultat);Flags.Zero(resultat);
    Flags.Parity(resultat.toString(2).padStart(16, "0"));
    return resultat.toString(2).padStart(16, "0");
  }

  static MUL(a,b,Flags) {
    let x = a.entier;
    let y = b.entier;
    let resultat = x * y;
    Flags.Negatif(resultat);Flags.Zero(resultat);Flags.Carry(a,b);Flags.Overflow(resultat);
    Flags.Parity(resultat.toString(2).padStart(16, "0"));
    return resultat.toString(2).padStart(16, '0');
  }


  //La méthode raz

  static RAZ(reg,Flags) {
    reg.setMot("0000000000000000");
    Flags.Zero(reg.entier)
    return reg
  }
  
  static AND(a,b,Flags) {
    let ResAND = "";
    let x = a.getMot();
    let y = b.getMot();

    for (let i = 0; i < x.length; i++) {
      if (x[i] === "1" && y[i] === "1") {
        ResAND += "1";
      } else {
        ResAND += "0";
      }
    }
    Flags.Zero(ResAND);
    Flags.Parity(ResAND.toString(2).padStart(16, "0"));
    return ResAND;
  }
  
  static NAND(a,b,Flags) {
    let ResNAND = "";
    let x = a.getMot();
    let y = b.getMot();
    for (let i = 0; i < x.length; i++) {
      if (x[i] === "1" && y[i] === "1") {
        ResNAND += "0";
      } else {
        ResNAND += "1";
      }
    }
    Flags.Zero(ResNAND);
    Flags.Parity(ResNAND.toString(2).padStart(16, "0"));
    return ResNAND;
  }

  static OR(a, b,Flags) {

    let ResOR = "";
    let x = a.getMot();
    let y = b.getMot();

    for (let i = 0; i < x.length; i++) {
      if (x[i] === "1" || y[i] === "1") {
        ResOR += "1";
      } else {
        ResOR += "0";
      }
    }
    Flags.Zero(ResOR);
    Flags.Parity(ResOR.toString(2).padStart(16, "0"));
    return ResOR;
  }

  static NOR(a, b,Flags) {
    let ResNOR = "";
    let x = a.getMot();
    let y = b.getMot();
    for (let i = 0; i < x.length; i++) {
      if (x[i] === "1" || y[i] === "1") {
        ResNOR += "0";
      } else {
        ResNOR += "1";
      }
    }
    Flags.Zero(ResNOR);
    Flags.Parity(ResNOR.toString(2).padStart(16, "0"));
    return ResNOR;
  }

  static NOT(a,Flags) {
    let ResNOT = "";
    let x = a.getMot();
    for (let i = 0; i < x.length; i++) {
      if (x[i] === "1") {
        ResNOT += "0";
      } else {
        ResNOT += "1";
      }
    }
    Flags.Zero(ResNOT);
    Flags.Parity(ResNOT.toString(2).padStart(16, "0"));
    return ResNOT;
  }

  static XOR(a,b,Flags) {
    let ResXOR = "";
    let x= a.getMot();
    let y= b.getMot();
    for (let i = 0; i < x.length; i++) {
      if (x[i] === y[i]) {
        ResXOR += '0';
      } else {
        ResXOR += '1';
      }
    }
    Flags.Zero(ResXOR);
    Flags.Parity(ResXOR.toString(2).padStart(16, "0"));
    return ResXOR;
  }

  static SHL(a,b,Flags) {
    let x = a.getMot();
    let n = b.entier;
    let ResSHL = x.slice(n);
    for (let i = 0; i < n; i++) {
      ResSHL += "0";
    }
    Flags.Zero(ResSHL);Flags.Carry(a,b);
    Flags.Parity(ResSHL.toString(2).padStart(16, "0"));
    return ResSHL;
  }
  
  static SHR(a, b,Flags) {
    let ResSHR = "";
    let x = a.getMot();
    let n = b.entier;
    for (let i = 0; i < n; i++) {
      ResSHR += "0";
    }
    ResSHR += x.slice(0, x.length - n);
    Flags.Zero(ResSHR);Flags.Carry(a,b);
    Flags.Parity(ResSHR.toString(2).padStart(16, "0"));
    return ResSHR;
  }

  static ROL(a,b,Flags) {
    let x = a.getMot();
    let n = b.entier;
    let ResROL = x.slice(n);
    ResROL += x.slice(0, n);
    Flags.Zero(ResROL);Flags.Carry(a,b);
    Flags.Parity(ResROL.toString(2).padStart(16, "0"));
    return ResROL;
  }
  
  static ROR(a, b,Flags) {
    let x= a.getMot();
    let n = b.entier;
    let ResROR = x.slice(x.length - n);
    ResROR += x.slice(0, x.length - n);
    Flags.Zero(ResROR);Flags.Carry(a,b);
    Flags.Parity(ResROR.toString(2).padStart(16, "0"));
    return ResROR;
  }

  static CMP(a,b,Flags){
    let x = a.entier;
    let y = b.entier;
    let ResCMP=0;
    if (x<y) { ResCMP = -1}
    if (x>y) { ResCMP = 1}
    Flags.Zero(ResCMP);Flags.Negatif(ResCMP);
    Flags.Parity(ResCMP.toString(2).padStart(16, "0"));
    return ResCMP;
  }


// Méthode pour effectuer l'opération PUSH 

static PUSH(pile, mot) {
  if(pile.getNbrMot() < 8){
    pile.PUSH(mot);
    pile.setNbrMot(pile.getNbrMot() + 1);
  }
  else {
    console.log("La pile est pleine!!");
  } 
}

// Méthode pour effectuer l'opération POP 

  static POP(pile) {
    if(pile.getNbrMot() > 0) {
      let mot = pile.POP()
      pile.setNbrMot(pile.getNbrMot() - 1);
      return mot;
    }
    else {
      console.log("La pile est vide");
    }
  }

  // Méthode pour effectuer l'opérations d'entrée 

  static ENT(Flags) {
    let Acc = prompt("Veuillez introduire une valeur"); // prompt() affiche une boite de dialogue à l'utilisateur pour entrer des données
    Flags.Zero(Acc);Flags.Negatif(Acc);                 
    Acc = Acc.toString(2).padStart(16, '0'); //Conversion de la valeur entrée en chanine binaire 
                                                        // sur 16 bits
    Flags.Parity(Acc);
    return Acc;
  }

  // Méthode pour effectuer l'opérations de sortie 

  static SOR(valeur) {
     console.log(valeur);    // alert() affiche une boite de dialogue contenant un résultat d'une opération 
                       // effectuée par l'utilisateur.
  }

  static STOP() {
    /* Le processeur devient en mode d'attente
    Pour mettre le processeur en mode d'attente, 
    vous pouvez utiliser une boucle infinie qui attend une interruption*/
  }

  // mov chm rgm 
  static CHM(op,Machine)  
  {
    Machine.ACC.value=op
    Machine.Flags.Zero(Machine.ACC.value.entier);
    Machine.Flags.Parity(Machine.ACC.value.mot);
  }

  static RGM(adr,Machine) // dans l'opération rgm on onvoye le contenu de l'acc dans la mémoire
  {
    Machine.bus_donnes.transferer(Machine.ACC,Machine.RIM)
    Machine.RAM.recevoir(adr)
    Machine.memoire.ecriture(Machine.RAM,Machine.RIM)
    Machine.Flags.Zero(Machine.ACC.value.entier)
    Machine.Flags.Parity(Machine.ACC.value.mot)
  }

  static  MOV(source,destination,Machine)
  {
    if(source instanceof CO )
    {
      Machine.bus_adresse.transferer(Machine.CO,Machine.bus_donnes)
      Machine.bus_donnes.transferer(Machine.bus_donnes.information,destination)
    }
    else if(destination instanceof CO )
    {
      Machine.bus_donnes.transferer(source,Machine.bus_adresse)
      Machine.bus_adresse.transferer(Machine.bus_adresse.information,Machine.CO)
    }
    else if(destination instanceof mot_mem)
    {
      Machine.RAM.recevoir(destination.adresse)
      Machine.bus_donnes.transferer(source.value,Machine.RIM)
      Machine.memoire.ecriture(Machine.RAM,Machine.RIM)
    }
    else if(source instanceof mot_mem){
      Machine.RAM.recevoir(source.adresse)
      Machine.memoire.lecture(Machine.RAM,Machine.RIM)
      destination.value=Machine.RIM.value
    }
    else
    {
      Machine.bus_donnes.transferer(source,destination)
    }
    Machine.Flags.Zero(source.value.entier)
    Machine.Flags.Parity(destination.value.mot)
  }

  static BCV (n,Flags){
    let b=false
    if ((n == 0) || (Flags.getBit(n)== '1')){
      b= true
    }
    return b
  }

  static BCF (n,Flags){
    let b=false
    if ((n == 0) || (Flags.getBit(n)== '0')){
      b= true
    }
    return b
  }

  // static loop(cx,co,adr) {
  //   cx.dec();
  //   Flags.Decrement(cx);
  //   if (Flags.getBit(10) !== '0') {
  //     loop(cx,co,adr);
  //   }
  // }


  static CMP(a,b,Flags){
    let x= a.entier;
    let y= b.entier;
    let k
    if (x<y) { k=-1}
    if (x==y) { k=0}
    if (x>y) { k=1}
    Flags.Zero(k)
    Flags.Parity(k.toString(2).padStart(16,"0"))
    Flags.Negatif(k)
    return k
  }

// la méthode slice a le mm effet que la fonction extrairechaine en SFSD
// C.slice(x,y) retourne la chaine de caractère à partir de caractère n°X jusqu'à Y
// C.slice(x) retourne la chaine de caractère à partir de caractère n°X jusqu'à la fin de la chaine

}

// Opérations arithmétiques



 let x = "10100011";
 let y = "11001100";

// let intrET = Instructions.ET(x, y);
// let sortie = Instructions.SOR(`Le résultat de l'opération x and y = ${intrET}.`);

// let entree = Instructions.INT();
// console.log(entree);

// // Opérations Logiques
// // let a = "10100011";
// // let b = "11001100";

//  let resET = Instructions.ET(a, b);
// console.log(`a AND b = ${resET}`); // affiche "a AND b = 1000"
// let resOU = Instructions.OU(a, b);
// console.log(`a OR b = ${resOU}`); // affiche "a OR b = 1110"
// let resNON = Instructions.NON(a);
// console.log(`NOT a = ${resNON}`); // affiche "NOT a = 0101"

// // Rotation et Décalage
// let ResSHL = Instructions.SHL(a, b);
// console.log(`Décalage de -a- 2 bit vers la gauche : ${ResSHL}`); // affiche "a << 2 = 1000"
// let ResSHR = Instructions.SHR(a, b);
//  console.log(`Décalage de -a- 2 bit vers la droite : ${ResSHR}`); // affiche "a >> 2 = 0010"
// let ResROL = Instructions.ROL(a, 2);
// console.log(`Rotation de -a- 2 bit vers la gauche : ${ResROL}`); // affiche "a <<< 2 = 1010"
// let ResROR = Instructions.ROR(a, 2);
// console.log(`Rotation de -a- 2 bit vers la droite : ${ResROR}`); // affiche "a >>> 2 = 1010"*/
//console.log(Instructions.ADD(a,b))
export default Instructions ;
