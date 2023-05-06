// Importe la classe Registres depuis un fichier externe
import Registres from './Registres.js';
class BX extends Registres {
    // Constructeur de la classe BX qui prend un mot de 16 bits en paramètre
    constructor(mot16) {
        // Appelle le constructeur de la classe parente en passant le nom "BX" et le mot de 16 bits en tant que valeur
        super('BX', mot16);
    }
}

// Exporte la classe BX pour qu'elle puisse être utilisée dans d'autres modules
export default BX;
