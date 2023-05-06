
// Définition de la classe Mot16
class Mot16 {

    // Constructeur de la classe, prend en paramètre une chaîne de caractères représentant un mot binaire de 16 bits
    constructor(valeur) {
        // La propriété "mot" représente la chaîne de caractères binaire passée en paramètre
        this.mot = valeur;

        // La propriété "entier" représente la valeur entière du mot binaire
        // Elle est initialisée en convertissant la chaîne de caractères binaire en entier avec parseInt()
        this.entier = parseInt((this.mot), 2);

        // La propriété "hexa" représente la valeur hexadécimale du mot binaire
        // Elle est initialisée en convertissant la valeur entière en chaîne de caractères hexadécimale avec toString()
        // La méthode padStart() permet de rajouter des zéros à gauche si nécessaire pour obtenir 4 chiffres hexadécimaux
        this.hexa = (this.entier).toString(16).padStart(4, "0");
    }

    // Méthode pour obtenir la chaîne de caractères binaire représentant le mot
    getMot() {
        return this.mot;
    }

    // Méthode pour modifier la chaîne de caractères binaire représentant le mot
    // Prend en paramètre la nouvelle chaîne de caractères binaire
    setMot(valeur) {
        // Met à jour la propriété "mot" avec la nouvelle valeur binaire
        this.mot = valeur;

        // Met à jour la propriété "entier" en convertissant la nouvelle chaîne de caractères binaire
        this.entier = parseInt((this.mot), 2);

        // Met à jour la propriété "hexa" en convertissant la nouvelle valeur entière
        this.hexa = (this.entier).toString(16).padStart(4, "0");
    }
}

// Exporte la classe Mot16 pour qu'elle puisse être utilisée dans d'autres modules
export default Mot16;