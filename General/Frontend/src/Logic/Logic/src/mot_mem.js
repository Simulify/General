import Mot16 from "./Mot16.js";

class mot_mem
{
    constructor(adresse,information)
    {
        this.adresse=adresse;
        this.information= new Mot16(`${information}`)
    }
    getAdresse()
    {
        return this.adresse;
    }
    setInformation(information)
    {
        this.information=new Mot16(information);
    }
    getInformation()
    {
        return this.information;
    }
}
export default mot_mem;