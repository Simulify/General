// Importer les modules et classes nécessaires
import Registres from './Registres.js'; 

class DX extends Registres {
  // constructeur prenant un paramètre mot16
  constructor(mot16) { 
    super('DX', mot16); // appelle le constructeur de la classe parente Registres avec les arguments 'DX' et mot16
  }
}

 // exporte la classe DX
export default DX;