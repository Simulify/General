
class Pile {
    constructor(pile, nbrMot) {
        this.pile = pile;
        this.nbrMot = nbrMot;
    }

    /*Getter*/
    getNbrMot() {
        return this.nbrMot;
    }

    /*Setters*/

    setNbrMot(nbrMot) {
        this.nbrMot = nbrMot;
    } 
    PUSH(mot)
    {
        this.pile.push(mot)
    }
    POP()
    {
        return this.pile.pop()
    }
}
export default Pile;