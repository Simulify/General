
/* La classe mot16 */

let mot16 = {
    valeurBinaire : 0b0000000000000000,
    codeHexa : function(){
        return this.valeurBinaire.toString(16);
    },
};

let UAL = {
    EUAL1: Object.create(mot16),
    EUAL2: Object.create(mot16),
    
    /*Les opérations arithmétiques*/
    Add: function() {
        return this.EUAL1.valeurBinaire + this.EUAL2.valeurBinaire;
    },

    Sub: function() {
        return this.EUAL1.valeurBinaire - this.EUAL2.valeurBinaire;
    },

    Inc: function() {
        return this.EUAL1.valeurBinaire + 0b0000000000000001
    },

    Dec: function() {
        return this.EUAL1.valeurBinaire - 0b0000000000000001
    },
    
    /*Les opérations logiques*/
    

};
 
// Créer des instances de EUAL1 et EUAL2
UAL.EUAL1.valeurBinaire = 0b1010101010101010;
UAL.EUAL2.valeurBinaire = 0b0101010101010101;

// Exécuter les méthodes Add() et Sub()
console.log("UAL1:" , UAL.EUAL1.valeurBinaire);
console.log("Addition:", UAL.Add()); // Résultat attendu : 65535 (0xFFFF en hexadécimal)
console.log("Soustraction:", UAL.Sub()); // Résultat attendu : 5461 (0x1555 en hexadécimal)
console.log("Incrementation", UAL.Inc()); // Résultat attendu : 43691
console.log("Soustraction", UAL.Dec()); // Résultat attendu : 43698












