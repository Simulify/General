import Registres from './Registres.js';
class RIM extends Registres {

  // Constructeur de la classe RIM
  constructor(mot16) {
    // Appel du constructeur de la classe parente Registres avec le nom du registre "RIM" et la valeur "mot16"
    super('RIM', mot16);
  }
}

// Exportation de la classe RIM
export default RIM;