import Mot16 from './Mot16.js';
import Instructions from './Instructions.js';
class UAL {
    constructor(UAL1, UAL2) {
      this.UAL1 = UAL1;
      this.UAL2 = UAL2;
    }
  
    // Définition du setters et getters pour UAL1 et UAL2
    getUAL1() {
      return this.UAL1;
    }
  
    setUAL1(operande1) {
      this.UAL1 = operande1;
    }
  
    getUAL2() {
      return this.UAL2;
    }
  
    setUAL2(operande2) {
      this.UAL2 = operande2;
    }
  
    // RAZ XOR
    executer(instruction,Flags) {
    switch (instruction) {
        case 'ADD':
            console.log(`UAL1 = ${this.UAL1.getMot()}`);
            console.log(`UAL2 = ${this.UAL2.getMot()}`);
            let resADD = Instructions.ADD(this.UAL1, this.UAL2,Flags);
            return resADD;
        break;

        case 'SUB':
            console.log(`UAL1 = ${this.UAL1.getMot()}`);
            console.log(`UAL2 = ${this.UAL2.getMot()}`);
            let resSUB = Instructions.SUB(this.UAL1, this.UAL2,Flags);
            return resSUB;
        break;

        case 'INC':
            console.log(`UAL1 = ${this.UAL1.getMot()}`);
            let resINC = Instructions.INC(this.UAL1,Flags);
            return resINC;
        break;
        
        case 'DEC':
            console.log(`UAL1 = ${this.UAL1.getMot()}`);
            let resDEC = Instructions.DEC(this.UAL1,Flags);
            return resDEC;
        break;

        case 'MUL':
            console.log(`UAL1 = ${this.UAL1.getMot()}`);
            console.log(`UAL2 = ${this.UAL2.getMot()}`);
            let resMUL = Instructions.MUL(this.UAL1,this.UAL2,Flags);
            return resMUL;
        break;

        case "AND":
            console.log(`UAL1 fct= ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct= ${this.UAL2.getMot()}`);
            let resET = Instructions.AND(this.UAL1, this.UAL2,Flags);
            return resET;
        break;
        case "NAND":
            console.log(`UAL1 fct= ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct= ${this.UAL2.getMot()}`);
            let resNAND = Instructions.NAND(this.UAL1, this.UAL2,Flags);
            return resNAND;
        break;
        case "OR":
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resOU = Instructions.OR(this.UAL1, this.UAL2,Flags);
            return resOU;
        break;
        case "NOR":
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resOR = Instructions.NOR(this.UAL1, this.UAL2,Flags);
            return resOR;
        break;
        case 'NOT':
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            let resNON = Instructions.NOT(this.UAL1,Flags);
            return resNON;
        break;

        case 'XOR':
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resXOR = Instructions.XOR(this.UAL1, this.UAL2,Flags);
            return resXOR;
        break;

        case 'SHL':
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resSHL = Instructions.SHL(this.UAL1, this.UAL2,Flags);
            return resSHL;
        break;

        case 'SHR':
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resSHR = Instructions.SHR(this.UAL1, this.UAL2,Flags);
            return resSHR;
        break;

        case 'ROL':
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resROL = Instructions.ROL(this.UAL1, this.UAL2,Flags);
            return resROL;
        break;

        case 'ROR':
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`);
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`);
            let resROR = Instructions.ROR(this.UAL1, this.UAL2,Flags);
            return resROR;
        break;
        case "CMP":
            console.log(`UAL1 fct = ${this.UAL1.getMot()}`)
            console.log(`UAL2 fct = ${this.UAL2.getMot()}`)
            let resCMP = Instructions.CMP(this.UAL1, this.UAL2,Flags)
            return resCMP

        case 'RAZ':
            let resRAZ = Instructions.RAZ(this.UAL1,Flags);
        break;

        default:
          console.log("Instruction non définie.");
        break;
    }
    }
}

// let ual = new UAL("1010101010101010", "1111110");
// console.log(`UAL1 = ${ual.getUAL1().getMot()}`);
// console.log(`UAL2 = ${ual.getUAL2().getMot()}`);
// let resADD = ual.executer("XOR");
// console.log(`UAL1 + UAL2 = ${resADD}`);

// ual.setUAL1(new Mot16("1110011100111001"));
// ual.setUAL2(new Mot16("0110"));
// console.log(`UAL1 = ${ual.getUAL1().getMot()}`);
// console.log(`UAL2 = ${ual.getUAL2().getMot()}`);
// let resADD2 = ual.executer("OU");
// console.log(`UAL1 + UAL2 = ${resADD2}`);
export default UAL