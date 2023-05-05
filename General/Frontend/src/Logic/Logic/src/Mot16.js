
class Mot16 {

    // valeur : binaryString
    constructor(valeur) {
        this.mot = valeur
        this.entier=parseInt((this.mot), 2)
        this.hexa=(this.entier).toString(16).padStart(4,"0")
        // aren't we supposed to add decimal and hexa here
    }

    /*mot*/
    
    getMot() {
        return this.mot;
    }

    /*Setter*/
    setMot(valeur) {
        this.mot = valeur;
        this.entier=parseInt((this.mot), 2)
        this.hexa=(this.entier).toString(16).padStart(4,"0")
    }
}

export default Mot16;