class Pile {
    // Constructeur qui prend une pile et un nombre de mots en entrée
    constructor(pile, nbrMot) {
      this.pile = pile;
      this.nbrMot = nbrMot;
    }

    // Méthode qui retourne le nombre de mots
    getNbrMot() {
      return this.nbrMot;
    }
  
    // Méthode qui permet de définir le nombre de mots
    setNbrMot(nbrMot) {
      this.nbrMot = nbrMot;
    }
  
    // Méthode qui ajoute un mot à la pile
    PUSH(mot) {
      this.pile.push(mot)
    }
  
    // Méthode qui retire un mot de la pile
    POP() {
      return this.pile.pop()
    }
  }
  
  // Exportation de la classe Pile
  export default Pile;
  