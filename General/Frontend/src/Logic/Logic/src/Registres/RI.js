/*import Register from './Register';

class RI extends Register {
  constructor(value = { MOT16: '', COP: '', MOD: '', R1: '', R2: '' }) {
    super('RI', value);
  }
}

export default RI;*/
import Mot16 from '../Mot16.js';
import Registres from './Registres.js';

class RI extends Registres {
  constructor(value) {
    super('RI', value);
  }

  decode() {
    const mot16 = this.value.mot;
    const cop = mot16.slice(0, 6);
    const mod = mot16.slice(6, 9);
    const r1 = mot16.slice(9, 12);
    const r2 = mot16.slice(12, 16);
    
    return [cop, mod, r1, r2]; 
  }
}

export default RI;
