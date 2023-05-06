import Registres from './Registres.js';
class RAM extends Registres {

  // Constructeur de la classe RAM
  constructor(mot16) {
    // Appel du constructeur de la classe parente Registres avec le nom du registre "RAM" et la valeur "mot16"
    super('RAM', mot16);
  }
}

// Exportation de la classe RAM
export default RAM;