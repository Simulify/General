// Importe la classe Registres depuis un fichier externe
import Registres from './Registres.js';

// Définit la classe SI qui étend la classe Registres
class SI extends Registres {
    // Constructeur de la classe SI qui prend un mot de 16 bits en paramètre
    constructor(mot16) {
        // Appelle le constructeur de la classe parente en passant le nom "SI" et le mot de 16 bits en tant que valeur
        super('SI', mot16);
    }
}

// Exporte la classe SI pour qu'elle puisse être utilisée dans d'autres modules
export default SI;
