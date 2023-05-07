// Importation des classes nécessaires
import bus_adresses from "./bus_adresse.js";
import bus from "./bus.js";
import Mot16 from "./Mot16.js";

class bus_donnees extends bus {
  constructor(information) {
    super();
    this.information = information;
  }
  recevoir(information) {
    this.information = information;
  }
  envoyer() {
    return this.information;
  }
  transferer(source, destination) {
    // Si la source est une instance de la classe "bus_adresses"
    if (source instanceof bus_adresses) {
      // On récupère les données de la source et on les envoie à la destination
      destination.recevoir(bus_adresses.envoyer());
    }
    // Si la destination est une instance de la classe "bus_adresses"
    if (destination instanceof bus_adresses) {
      // On récupère les données de la source et on les envoie à la destination
      destination.recevoir(source.envoyer());
    }
    // Si la source est une instance de la classe "Mot16"
    if (source instanceof Mot16) {
      // On envoie directement le mot 16 bits à la destination
      destination.recevoir(source);          
    } else {
      // Sinon, on récupère les données de la source et on les envoie à la destination
      destination.recevoir(source.envoyer());        
    }
  }
}

export default bus_donnees;