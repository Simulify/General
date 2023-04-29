import bus_donnees from "./bus_donnes.js";
import  bus  from "./bus.js";
import Mot16 from "./Mot16.js";
class bus_adresses extends bus
{ 
    constructor(addresse)
    {
        super()
        this.addresse = addresse;
    }
    recevoir(adresse)
    {
        this.adresse=adresse;
    }
    envoyer()
    {
        return this.adresse;
    }
    transferer(source,destination)
    {
        if(source instanceof bus_donnees)
        {
            destination.recevoir(bus_donnees.envoyer());
        }
        if(destination instanceof bus_donnees)
        {
            bus_donnees.recevoir(source.envoyer());

        }
        if(source instanceof Mot16)
        {
            destination.recevoir(source);          
        }
        else
    {
        destination.recevoir(source.envoyer())        
    }
    }
}
export default bus_adresses;