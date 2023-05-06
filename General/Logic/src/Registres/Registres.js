class Registres {
  // Constructeur de la classe, appelé lorsqu'une nouvelle instance est créée
  // Prend en paramètre le nom et la valeur du registre
  constructor(name, value) {
      // La propriété "name" représente le nom du registre
      this.name = name;

      // La propriété "value" représente la valeur du registre
      this.value = value;
  }

  // Méthode pour obtenir la valeur du registre
  getValue() {
      return this.value;
  }

  // Méthode pour modifier la valeur du registre
  // Prend en paramètre la nouvelle valeur à affecter au registre
  setValue(value) {
      this.value = value;
  }

  // Méthode pour recevoir une valeur et la stocker dans le registre
  // Prend en paramètre la valeur à stocker dans le registre
  recevoir(valeur) {
      this.value = valeur;
  }

  // Méthode pour envoyer la valeur stockée dans le registre
  envoyer() {
      return this.value;
  }
}

// Exporte la classe Registres pour qu'elle puisse être utilisée dans d'autres modules
export default Registres;
