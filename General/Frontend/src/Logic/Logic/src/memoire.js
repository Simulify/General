
class memoire 
{
constructor(memory)
{
   this.memory=memory ;
}
//////
 lecture(ram,rim)  
{
  rim.recevoir(this.memory[ram.envoyer().entier].information)
}
 ecriture(ram,rim) 
{
 this.memory[ram.envoyer().entier].setInformation(rim.envoyer().mot);
}
}
export default memoire;