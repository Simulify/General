
import Mot16 from '../Mot16.js';
import Instructions from '../Instructions.js';
import Registres from './Registres.js';
import Flags from '../Flags.js';

class CX extends Registres {
  constructor(mot16) {
    super('CX', mot16);
  
}
DecCX(){
  const flags= new Flags(new Mot16("000000000000"))
  this.value=new Mot16(Instructions.DEC(this.value,flags))
   console.log("hereeee")
}
}//classe  
export default CX;