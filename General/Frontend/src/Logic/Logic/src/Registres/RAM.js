import Registres from './Registres.js';

class RAM extends Registres {
  constructor(mot16) {
    super('RAM', mot16);
  }
}

export default RAM;