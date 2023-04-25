import Mot16 from "../Mot16.js";
import Instructions from "../Instructions.js";
import  Registres  from "./Registres.js";
import Flags from "../Flags.js";
class CO extends Registres {
  constructor(mot16) {
    super('CO', mot16);
  }
  
  
  incCO(){
     this.value= new Mot16(Instructions.INC(this.value,new Flags(new Mot16("0000000000000000"))))
    
  }

  RAZ(){ 
     this.value=Instructions.RAZ(this.value,new Flags(new Mot16("0000000000000000")))
  }
}

export default CO;