// Importer les modules et classes nécessaires
import Mot16 from '../Mot16.js';
import Instructions from '../Instructions.js';
import Registres from './Registres.js';
import Flags from '../Flags.js';

// Définir la classe CX, qui étend la classe Registres
class CX extends Registres {
  // Le constructeur prend un mot de 16 bits en argument et appelle le constructeur parent avec le nom 'CX' et le mot donné comme valeur initiale
  constructor(mot16) {
    super('CX', mot16);
  }
  
  // Définir la méthode DecCX, qui décrémente la valeur de CX et met à jour les indicateurs de drapeau
  DecCX(){
    // Créer un nouvel objet drapeaux avec tous les drapeaux mis à 0
    const flags = new Flags(new Mot16("000000000000"))
    // Utiliser l'instruction DEC pour décrémenter la valeur de CX et mettre à jour les indicateurs de drapeau
    this.value = new Mot16(Instructions.DEC(this.value, flags));
  }
}

// Exporter la classe CX
export default CX;
