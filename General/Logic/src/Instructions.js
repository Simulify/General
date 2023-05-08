import mot_mem from './mot_mem.js';
import CO from './Registres/CO.js'
class Instructions {
  constructor() {}

  static ADD(a, b, Flags) {
    // Conversion des nombres "a" et "b" en entiers
    let x = a.entier;
    let y = b.entier;
    let resultat = x + y; // Calcul de la somme de "a" et "b"
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Carry(a, b);
    Flags.Overflow(resultat);
    Flags.Zero(resultat);
    Flags.Parity(resultat.toString(2).padStart(16, "0"));
    // Conversion du résultat en une chaîne binaire sur 16 bits    
    return resultat.toString(2).padStart(16, "0"); 
  }

  static SUB(a, b, Flags) {
    // Conversion des nombres "a" et "b" en entiers
    let x = a.entier;
    let y = b.entier;
    let resultat = x - y; // Calcul de la différence entre "a" et "b"
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Negatif(resultat);
    Flags.Zero(resultat);
    Flags.Parity(resultat.toString(2).padStart(16, "0"));
    // Conversion du résultat en une chaîne binaire sur 16 bits    
    return resultat.toString(2).padStart(16, "0");
  }

  static INC(a, Flags) {
    let x = a.entier; // Conversion du nombre "a" en entier
    let resultat = x + 1; // Calcul de l'incrémentation de "a"
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Carry(a, b);
    Flags.Overflow(resultat);
    Flags.Parity(resultat.toString(2).padStart(16, "0"));
    // Conversion du résultat en une chaîne binaire sur 16 bits
    return resultat.toString(2).padStart(16, "0"); 
  }

  static DEC(a, Flags) {
    // Conversion du nombre "a" en entier
    let x = a.entier;
    // Calcul de la décrémentation de "a"
    let resultat = x - 1;
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Negatif(resultat);
    Flags.Zero(resultat);
    Flags.Parity(resultat.toString(2).padStart(16, "0"));
    // Conversion du résultat en binaire sur 16 bits
    return resultat.toString(2).padStart(16, "0");
  }

  static MUL(a,b,Flags) {
    // Conversion des nombres "a" et "b" en entiers
    let x = a.entier;
    let y = b.entier;
    let resultat = x * y; // multiplication de x et y
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Negatif(resultat);
    Flags.Zero(resultat);
    Flags.Carry(a,b);
    Flags.Overflow(resultat);
    Flags.Parity(resultat.toString(2).padStart(16, "0"));
    // Conversion du résultat en une chaîne binaire sur 16 bits    
    return resultat.toString(2).padStart(16, '0'); 
  }

  static RAZ(reg,Flags) {
    reg.setMot("0000000000000000"); // On met le registre à zéro.
    Flags.Zero(reg.entier); // On met à jour le bit Zéro des Flags.
    return reg // On retourne le registre mis à zéro.
  }
  
  static AND(a,b,Flags) {
    let ResAND = ""; // On initialise ResAND à une chaîne de caractères vide.
    // On récupère le contenu des opérandes a et b en tant que chaîne de caractères.
    let x = a.getMot(); 
    let y = b.getMot();
    for (let i = 0; i < x.length; i++) { // On parcourt chaque bit de a et b.
      if (x[i] === "1" && y[i] === "1") { // Si le bit correspondant de a et b est égal à 1, on ajoute 1 à ResAND.
          ResAND += "1";
      } else { // Sinon, on ajoute 0 à ResAND.
          ResAND += "0";
      }
    }
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Zero(ResAND);
    Flags.Parity(ResAND.toString(2).padStart(16, "0"));
    return ResAND; // On retourne le résultat ResAND
  }

  static NAND(a,b,Flags) {
    let ResNAND = ""; // On initialise ResNAND à une chaîne de caractères vide
    // On récupère le contenu des opérandes a et b en tant que chaîne de caractères
    let x = a.getMot(); 
    let y = b.getMot(); 
    for (let i = 0; i < x.length; i++) { // On parcourt chaque bit de a et b
      if (x[i] === "1" && y[i] === "1") { // Si le bit correspondant de a et b est égal à 1, on ajoute 0 à ResNAND
        ResNAND += "0";
      } else { // Sinon, on ajoute 1 à ResNAND
        ResNAND += "1";
      }
    }
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Zero(ResNAND);
    Flags.Parity(ResNAND.toString(2).padStart(16, "0"));
    return ResNAND; // On retourne le résultat ResNAND
  }

  static OR(a, b,Flags) {
    let ResOR = ""; // On initialise ResOR à une chaîne de caractères vide
    // On récupère le contenu des opérandes a et b en tant que chaîne de caractères
    let x = a.getMot();
    let y = b.getMot();
    for (let i = 0; i < x.length; i++) { // On parcourt chaque bit de a et b
      if (x[i] === "1" || y[i] === "1") { // Si le bit correspondant de a et b est égal à 1, on ajoute 1 à ResOR
        ResOR += "1";
      } else { // Sinon, on ajoute 0 à ResOR
        ResOR += "0";
      }
    }
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Zero(ResOR);
    Flags.Parity(ResOR.toString(2).padStart(16, "0"));
    return ResOR; // On retourne le résultat ResOR
  }

  static NOR(a,b,Flags) {
    let ResNOR = ""; // On initialise ResNOR à une chaîne de caractères vide
    // On récupère le contenu des opérandes a et b en tant que chaîne de caractères
    let x = a.getMot(); 
    let y = b.getMot(); 
    for (let i = 0; i < x.length; i++) { // On parcourt chaque bit de a et b
      if (x[i] === "1" && y[i] === "1") { // Si le bit correspondant de a ou b est égal à 1, on ajoute 0 à ResNOR
        ResNOR += "0";
      } else { // Sinon, on ajoute 1
        ResNOR += "1";
      }
    }
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Zero(ResNOR);
    Flags.Parity(ResNOR.toString(2).padStart(16, "0"));
    return ResNOR; // On retourne le résultat ResNOR
  }

  static NOT(a,Flags) {
    let ResNOT = ""; // On initialise ResNOT à une chaîne de caractères vide
    let x = a.getMot(); // On récupère le contenu des opérandes a en tant que chaîne de caractères
    for (let i = 0; i < x.length; i++) { // On parcourt chaque bit de a
      if (x[i] === "1") { // Si le bit correspondant de a ou b est égal à 1, on ajoute 0 à ResNOT
        ResNOT += "0";
      } else { // Sinon, on ajoute 1
        ResNOT += "1"; 
      }
    }
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Zero(ResNOT);
    Flags.Parity(ResNOT.toString(2).padStart(16, "0"));
    return ResNOT; // On retourne le résultat ResNOT
  }

  static XOR(a,b,Flags) {
    let ResXOR = ""; // On initialise ResXOR à une chaîne de caractères vide
    // On récupère le contenu des opérandes a et b en tant que chaîne de caractères
    let x = a.getMot(); 
    let y = b.getMot(); 
    for (let i = 0; i < x.length; i++) { // On parcourt chaque bit de a et b
      if (x[i] === y[i]) { // Si les bits correspondants de a et b sont égaux, on ajoute 0 à ResXOR
        ResXOR += '0';
      } else { // Sinon, on ajoute 1
        ResXOR += '1';
      }
    }
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Zero(ResXOR);
    Flags.Parity(ResXOR.toString(2).padStart(16, "0"));
    return ResXOR; // On retourne le résultat ResXOR
  }

  static SHL(a,b,Flags) {
    let x = a.getMot(); // Récupère la valeur a sous forme d'une chaine binaire
    let n = b.entier; // Récupère le nombre de bits de décalage (b) sous forme d'entier
    let ResSHL = x.slice(n); // Extraire de a les (b) premiers bits 
    // Ajoute des zéros à la fin de ResSHL pour remplir les bits qui ont été décalés
    for (let i = 0; i < n; i++) {
      ResSHL += "0";
    }
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Zero(ResSHL);
    Flags.Carry(a,b);
    Flags.Parity(ResSHL.toString(2).padStart(16, "0"));
    return ResSHL; // On retourne le résultat ResSHL
  }

  
  static SHR(a, b,Flags) {
    let ResSHR = "";
    let x = a.getMot(); // Récupère la valeur a sous forme d'une chaine binaire
    let n = b.entier; // Récupère le nombre de bits de décalage (b) sous forme d'entier
    // Ajoute des zéros à la fin de ResSHR pour remplir les bits qui ont été décalés
    for (let i = 0; i < n; i++) {
      ResSHR += "0";
    }
    ResSHR += x.slice(0, x.length - n); // Ajoute la partie de la valeur a qui n'a pas été décalée à ResSHR
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Zero(ResSHR);
    Flags.Carry(a,b);
    Flags.Parity(ResSHR.toString(2).padStart(16, "0"));
    return ResSHR; // On retourne le résultat ResSHR
  }

  static ROL(a,b,Flags) {
    let x = a.getMot(); // Récupère la valeur a sous forme d'une chaine binaire
    let n = b.entier; // Récupère le nombre de bits de décalage (b) sous forme d'entier
    let ResROL = x.slice(n); // Extraire de a les (b) premiers bits 
    ResROL += x.slice(0, n); // Ajoute la partie de la valeur a qui n'a pas été décalée à ResROR
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Zero(ResROL);
    Flags.Carry(a,b);
    Flags.Parity(ResROL.toString(2).padStart(16, "0"));
    return ResROL; // On retourne le résultat ResROL
  }
  
  static ROR(a, b,Flags) {
    let x = a.getMot(); // Récupère la valeur a sous forme d'une chaine binaire
    let n = b.entier; // Récupère le nombre de bits de décalage (b) sous forme d'entier
    let ResROR = x.slice(x.length - n); // Extraire de a les (b) premiers bits de la droite
    ResROR += x.slice(0, x.length - n); // Ajoute la partie de la valeur a qui n'a pas été décalée à ResROR
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Zero(ResROR);
    Flags.Carry(a,b);
    Flags.Parity(ResROR.toString(2).padStart(16, "0"));
    return ResROR; // On retourne le résultat ResROR
  }

  static CMP(a,b,Flags){
    // Récupère les valeurs a et b sous forme d'entiers
    let x = a.entier;
    let y = b.entier;
    let ResCMP=0; // Initialise la variable ResCMP à 0
    // Compare les valeurs a et b et met à jour ResCMP
    if (x<y) { ResCMP = -1}
    if (x>y) { ResCMP = 1}
    // Appel aux méthodes pour mettre à jour les flags
    Flags.Zero(ResCMP);Flags.Negatif(ResCMP);
    Flags.Parity(ResCMP.toString(2).padStart(16, "0"));
    return ResCMP; // On retourne le résultat ResROR
  }
  
  static PUSH(pile, mot) {
  // Si le nombre de mots dans la pile est inférieur à 8 (capacité maximale de la pile)
    if(pile.getNbrMot() < 8){
      pile.PUSH(mot); // On ajoute le mot au sommet de la pile
      pile.setNbrMot(pile.getNbrMot() + 1); // On met à jour le nombre de mots dans la pile
    } else { // Si la pile est pleine
      console.log("La pile est pleine!!"); // On affiche un message d'erreur
    } 
  }

  static POP(pile) {
    if(pile.getNbrMot() > 0) { // Si la pile n'est pas vide
      let mot = pile.POP() // On retire le dernier mot ajouté à la pile
      pile.setNbrMot(pile.getNbrMot() - 1); // On met à jour le nombre de mots dans la pile
      return mot; // retourne le mot retiré
    } else { // Si la pile est vide
      console.log("La pile est vide"); // On affiche un message d'erreur
    }
  }
  
  // static ENT(Flags) {
  //   let Acc = prompt("Veuillez introduire une valeur"); // On demande à l'utilisateur d'entrer une valeur
  //   Acc = Acc.toString(2).padStart(16, '0'); // On convertit la valeur entrée en une chaîne binaire de 16 bits
  //   // Appel aux méthodes pour mettre à jour les flags
  //   Flags.Zero(Acc);
  //   Flags.Negatif(Acc);
  //   Flags.Parity(Acc); 
  //   return Acc; // On retourne la valeur Acc
  // }

  // static SOR(valeur) {
  //    console.log(valeur);
  // }

  static STOP() {
    // Arrête le programme en cours d'exécution.
    // Cette méthode ne contient actuellement aucun code, il est donc nécessaire de mettre en place un mécanisme dans le code du programme pour signaler à la machine de s'arrêter.
  }

  static CHM(op, Machine) {
    Machine.ACC.value = op; // On charge la valeur "op" dans l'accumulateur de la machine
    // Appel aux méthodes pour mettre à jour les flags
    Machine.Flags.Zero(Machine.ACC.value.entier); 
    Machine.Flags.Parity(Machine.ACC.value.mot); 
  }

  static RGM(adr, Machine) {
    // Transfert du contenu de l'ACC vers le bus de données de la machine.
    Machine.bus_donnes.transferer(Machine.ACC, Machine.RIM);
    // Chargement de l'adresse de destination dans le registre RAM de la machine.
    Machine.RAM.recevoir(adr);
    // Écriture du contenu du bus de données (ACC) dans la mémoire à l'adresse RAM.
    Machine.memoire.ecriture(Machine.RAM, Machine.RIM);
    // Appel aux méthodes pour mettre à jour les flags.
    Machine.Flags.Zero(Machine.ACC.value.entier);
    Machine.Flags.Parity(Machine.ACC.value.mot);
  }
  
  static  MOV(source, destination, Machine) {
    let dest;
    if(source instanceof CO) { // Si la source est un registre CO (compteur ordinal)
      // On transfère l'information du CO vers le bus de données
      Machine.bus_adresse.transferer(Machine.CO, Machine.bus_donnes);
      // On transfère l'information du bus de données vers la destination
      Machine.bus_donnes.transferer(Machine.bus_donnes.information, destination);
      // On récupère la valeur de la destination
      dest = destination.value.mot;
    } else if(destination instanceof CO) {// Si la destination est un registre CO
      // On transfère l'information de la source vers le bus d'adresse
      Machine.bus_donnes.transferer(source, Machine.bus_adresse);
      // On transfère l'information du bus d'adresse vers le CO
      Machine.bus_adresse.transferer(Machine.bus_adresse.information, Machine.CO);
      // On récupère la valeur de la destination
      dest = destination.value.mot;
    } else if(destination instanceof mot_mem) { // Si la destination est une case mémoire
      // On configure l'adresse de la case mémoire à écrire
      Machine.RAM.value.setMot(destination.adresse.toString(2).padStart(16, "0"));
      // On transfère l'information de la source vers le RIM (registre d'instruction de la mémoire)
      Machine.bus_donnes.transferer(source.value, Machine.RIM);
      // On écrit la valeur du RIM dans la case mémoire
      Machine.memoire.ecriture(Machine.RAM, Machine.RIM);
      // On récupère la valeur de la destination
      dest = Machine.RIM.value.mot;
    } else if(source instanceof mot_mem) { // Si la source est une case mémoire
      // On lit la valeur de la case mémoire de la source
      Machine.RAM.recevoir(source.adresse);
      Machine.memoire.lecture(Machine.RAM, Machine.RIM);
      // On écrit la valeur lue dans la destination
      destination.value = Machine.RIM.value;
      // On récupère la valeur de la destination
      dest = destination.value.mot;
    } else { // Si la source et la destination sont des registres
      // On transfère l'information de la source vers la destination
      Machine.bus_donnes.transferer(source, destination);
      // On récupère la valeur de la destination
      dest = destination.value.mot;
    }
    // Appel aux méthodes pour mettre à jour les flags.
    Machine.Flags.Zero(source.value.entier);
    Machine.Flags.Parity(dest);
  }


  static BCV (n,Flags){
    let b=false // initialisé b à faux
    // Retourne true si le bit d'indice n dans les flags est égal à 1
    if ((n == 0) || (Flags.getBit(n)== '1')){ 
      b= true 
    }
    return b 
  }

  static BCF (n,Flags){
    let b=false // initialisé b à faux
    // Retourne true si le bit d'indice n dans les flags est égal à 0
    if ((n == 0) || (Flags.getBit(n)== '1')){ 
      b= true 
    }
    return b
  }
}
export default Instructions;