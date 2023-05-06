// Importe les classes nécessaires
import Mot16 from "../Mot16.js";
import Instructions from "../Instructions.js";
import Registres from "./Registres.js";
import Flags from "../Flags.js";

class CO extends Registres {
    // Constructeur de la classe CO qui prend un mot de 16 bits en paramètre
    constructor(mot16) {
        // Appelle le constructeur de la classe parente en passant le nom "CO" et le mot de 16 bits en tant que valeur
        super('CO', mot16);
    }
    
    // Méthode pour incrémenter la valeur de CO
    incCO() {
        // Appelle la méthode INC de la classe Instructions en passant la valeur actuelle de CO et un objet Flags initialisé à zéro
        // Le résultat de cette méthode est un nouveau mot de 16 bits qui est stocké dans la propriété "value" de l'objet CO
        this.value = new Mot16(Instructions.INC(this.value, new Flags(new Mot16("0000000000000000"))))
    }

    // Méthode pour remettre à zéro la valeur de CO
    RAZ() {
        // Appelle la méthode RAZ de la classe Instructions en passant la valeur actuelle de CO et un objet Flags initialisé à zéro
        // Le résultat de cette méthode est un nouveau mot de 16 bits qui est stocké dans la propriété "value" de l'objet CO
        this.value = Instructions.RAZ(this.value, new Flags(new Mot16("0000000000000000")))
    }
}

export default CO;
