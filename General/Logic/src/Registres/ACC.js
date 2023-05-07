// Importe la classe Registres depuis le fichier './Registres.js'
import Registres from './Registres.js';

// Définition de la classe ACC qui étend la classe Registres
class ACC extends Registres {
    // Constructeur de la classe, appelé lorsqu'une nouvelle instance est créée
    // Prend en paramètre un mot de 16 bits
    constructor(mot16) {
        // Appelle le constructeur de la classe parente en passant le nom "ACC" et le mot de 16 bits en tant que valeur
        super('ACC', mot16);
    }
}

// Exporte la classe ACC pour qu'elle puisse être utilisée dans d'autres modules
export default ACC;
