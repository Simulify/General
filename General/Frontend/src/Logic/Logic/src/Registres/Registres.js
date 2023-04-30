
class Registres {
    constructor(name, value) {
      this.name = name;
      this.value = value;
    }

    getValue() {
      return this.value;
    }

    setValue(value) {
      this.value = value;
    }
    
    recevoir(valeur) {
      this.value = valeur;
    }
    
    envoyer() {
      return this.value;
    }
  }
  
  export default Registres;