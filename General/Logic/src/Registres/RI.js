// Importer la classe Registres du fichier './Registres.js'
import Registres from './Registres.js';

class RI extends Registres {
  constructor(value) {
    super('RI', value);
  }

  // Définir une méthode qui permet de décoder une instruction
  decode() {
    // Extraire les différents champs de l'instruction à partir de la valeur du registre
    const mot16 = this.value.mot;
    const cop = mot16.slice(0, 6);
    const mod = mot16.slice(6, 9);
    const r1 = mot16.slice(9, 12);
    const r2 = mot16.slice(12, 16);
    // Retourner un tableau contenant les différents champs de l'instruction
    return [cop, mod, r1, r2]; 
  }
}

// Exporter la classe RI
export default RI;
