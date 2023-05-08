// Importe les modules nécessaires
import Instructions from './Instructions.js'; 

class UAL {
  constructor(UAL1, UAL2) { // Initialise les deux opérandes UAL1 et UAL2
    this.UAL1 = UAL1;
    this.UAL2 = UAL2;
  }

  // Getter et setter pour UAL1
  getUAL1() {
    return this.UAL1;
  }
  setUAL1(operande1) {
    this.UAL1 = operande1;
  }

  // Getter et setter pour UAL2
  getUAL2() {
    return this.UAL2;
  }
  setUAL2(operande2) {
    this.UAL2 = operande2;
  }

  // Méthode pour exécuter une instruction donnée avec les opérandes actuels
  executer(instruction, Flags) {
    switch (instruction) { // Commence une instruction switch pour vérifier quelle opération est demandée
        case 'ADD': // le cas de ADD(addition), appelle à la méthode ADD d'Instructions
            console.log(`UAL1 = ${this.UAL1.getMot()}`);
            console.log(`UAL2 = ${this.UAL2.getMot()}`);
            let resADD = Instructions.ADD(this.UAL1, this.UAL2,Flags);
            return resADD;// elle retourne la résultat de l'addition
        break;

        case 'SUB': // le cas de SUB(soustraction), appelle à la méthode SUB d'Instructions
            console.log(`UAL1 = ${this.UAL1.getMot()}`);
            console.log(`UAL2 = ${this.UAL2.getMot()}`);
            let resSUB = Instructions.SUB(this.UAL1, this.UAL2,Flags);
            return resSUB;// elle retourne la résultat de la soustraction
        break;

        case 'INC': // le cas de INC(incrémentation), appelle à la méthode INC d'Instructions
            console.log(`UAL1 = ${this.UAL1.getMot()}`);
            let resINC = Instructions.INC(this.UAL1,Flags);
            return resINC; // elle retourne la résultat de l'incrémentation
        break;
        
        case 'DEC': // le cas de DEC(décrémentation), appelle à la méthode DEC d'Instructions
            console.log(`UAL1 = ${this.UAL1.getMot()}`);
            let resDEC = Instructions.DEC(this.UAL1,Flags);
            return resDEC; // elle retourne la résultat de l'décrémentation
        break;

        case 'MUL': // le cas de MUL(multiplication), appelle à la méthode MUL d'Instructions
            console.log(`UAL1 = ${this.UAL1.getMot()}`);
            console.log(`UAL2 = ${this.UAL2.getMot()}`);
            let resMUL = Instructions.MUL(this.UAL1,this.UAL2,Flags);
            return resMUL; // elle retourne la résultat de la multiplication
        break;

        case "AND": // le cas de AND(et logique), appelle à la méthode AND d'Instructions
            console.log(`UAL1 fct= ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct= ${this.UAL2.getMot()}`);
            let resET = Instructions.AND(this.UAL1, this.UAL2,Flags);
            return resET;// elle retourne la résultat du et logique
        break;

        case "NAND": // le cas de NAND(non et logique), appelle à la méthode NAND d'Instructions
            console.log(`UAL1 fct= ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct= ${this.UAL2.getMot()}`);
            let resNAND = Instructions.NAND(this.UAL1, this.UAL2,Flags);
            return resNAND; // elle retourne la résultat du non et logique
        break;

        case "OR": // le cas de OU(ou logique), appelle à la méthode OU d'Instructions
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resOU = Instructions.OR(this.UAL1, this.UAL2,Flags);
            return resOU; // elle retourne la résultat du ou logique
        break;

        case "NOR": // le cas de NOR(non ou logique), appelle à la méthode NOR d'Instructions
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resNOR = Instructions.NOR(this.UAL1, this.UAL2,Flags);
            return resNOR; // elle retourne la résultat du non ou logique
        break;

        case 'NOT': // le cas de NOT(non logique), appelle à la méthode NOT d'Instructions
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            let resNON = Instructions.NOT(this.UAL1,Flags);
            return resNON; // elle retourne la résultat du non logique
        break;

        case 'XOR': // le cas de XOR(ou exclusif), appelle à la méthode XOR d'Instructions
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resXOR = Instructions.XOR(this.UAL1, this.UAL2,Flags);
            return resXOR; // elle retourne la résultat du ou exclusif
        break;

        case 'SHL': // le cas de SHL(décalage gauche), appelle à la méthode SHL d'Instructions
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resSHL = Instructions.SHL(this.UAL1, this.UAL2,Flags);
            return resSHL; // elle retourne la résultat du décalage gauche
        break;

        case 'SHR': // le cas de SHR(décalage droite), appelle à la méthode SHR d'Instructions
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resSHR = Instructions.SHR(this.UAL1, this.UAL2,Flags);
            return resSHR; // elle retourne la résultat du décalage droite
        break;

        case 'ROL': // le cas de ROL(rotation gauche), appelle à la méthode ROL d'Instructions
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resROL = Instructions.ROL(this.UAL1, this.UAL2,Flags);
            return resROL; // elle retourne la résultat du rotation gauche
        break;

        case 'ROR': // le cas de ROR(rotation droite), appelle à la méthode ROR d'Instructions
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resROR = Instructions.ROR(this.UAL1, this.UAL2,Flags);
            return resROR; // elle retourne la résultat du rotation droite
        break;

        case "CMP": // le cas de CMP(comparaison logique), appelle à la méthode CMP d'Instructions
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`)
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`)
            let resCMP = Instructions.CMP(this.UAL1, this.UAL2,Flags)
            return resCMP; // elle retourne la résultat du comparaison logique
        break;

        case 'RAZ': // le cas de RAZ(remise à zéro), appelle à la méthode RAZ d'Instructions
            let resRAZ = Instructions.RAZ(this.UAL1,Flags);
            return resRAZ; // elle retourne la résultat du remise à zéro(0 normalement)
        break; 

        default: // le cas d'une autre instruction qui n'a été pas définie
          console.log("Instruction non définie.");
        break;
    }
  }
}

export default UAL;