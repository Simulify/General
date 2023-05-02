import bus_adresses from "./bus_adresse.js";
import bus from "./bus.js";
import Mot16 from "./Mot16.js";
class bus_donnees extends bus
{
    constructor(information) 
    {
        super()
        this.information = information;
    }
    recevoir(information)
    {
        this.information=information;
    }
    envoyer()
    {
        return this.information;
    }
transferer(source,destination)
    {
        if(source instanceof bus_adresses)
        {
            destination.recevoir(bus_adresses.envoyer());
        }
        if(destination instanceof bus_adresses)
        {
            destination.recevoir(source.envoyer());

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
export default bus_donnees;