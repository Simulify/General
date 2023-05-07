class memoire 
{
  constructor(memory)
  {
    this.memory = memory ;
  }
  
  // Méthode pour lire dans la mémoire
  lecture(ram,rim)  
  {
    // On récupère l'information à l'adresse mémoire contenue dans le registre RAM
    // et on la place dans le registre RI
    rim.recevoir(this.memory[ram.envoyer().entier].information)
  }
  
  // Méthode pour écrire dans la mémoire
  ecriture(ram,rim) 
  {
    // On récupère l'information contenue dans le registre RI
    // et on la place à l'adresse mémoire contenue dans le registre RAM
    this.memory[ram.envoyer().entier].setInformation(rim.envoyer().mot);
  }
}

export default memoire;
