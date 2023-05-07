// Importation des classes nécessaires
import bus_donnees from "./bus_donnes.js";
import bus from "./bus.js";
import Mot16 from "./Mot16.js";

class bus_adresses extends bus {
  constructor(addresse) {
    super();
    this.addresse = addresse;
  }
  recevoir(adresse) {
    this.adresse = adresse;
  }
  envoyer() {
    return this.adresse;
  }
  transferer(source, destination) {
    // Si la source est une instance de la classe "bus_donnees"
    if (source instanceof bus_donnees) {
      // On récupère les données de la source et on les envoie à la destination
      destination.recevoir(bus_donnees.envoyer());
    }
    // Si la destination est une instance de la classe "bus_donnees"
    if (destination instanceof bus_donnees) {
      // On récupère les données de la source et on les envoie à la destination
      bus_donnees.recevoir(source.envoyer());
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

// Exportation par défaut de la classe "bus_adresses" pour être utilisée dans d'autres fichiers JavaScript
export default bus_adresses;
