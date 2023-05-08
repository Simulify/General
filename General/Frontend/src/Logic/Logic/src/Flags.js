import Mot16 from "./Mot16.js";

class Flags {
    constructor(flags) {
        this.flags =flags;
    }

    Carry(a,b){
        let x = a.getMot();
        let y = b.getMot();
        let carry = 0;
        for (let i = 0; i < x.length; i++) {
            let sum = parseInt(x[i]) + parseInt(y[i]) + carry;
            if (sum > 1) {
                carry = 1;
                this.miseAjourFlag(1, '1');
            } else {
                carry = 0;
                this.miseAjourFlag(1, '0');
            }
        }
    }

     Parity(resultat){
        let count = 0;
        for (let i = 0; i < 16; i++) {
            if (resultat[i] === '1') { count++; }
        }
        if (count % 2 === 0) {
            this.miseAjourFlag(2,'1');
        } else if(count % 2 !== 0){
            this.miseAjourFlag(2,'0');
        }
    }

     Zero(resultat){
        if(resultat == 0) {
            this.miseAjourFlag(6, '1');
        }
        else {
            this.miseAjourFlag(6, '0');
        }
    }

     Decrement(cx){
        let decr = cx.envoyer();
        if(decr == 0) {
            this.miseAjourFlag(10, '1');
        }
        else {
            this.miseAjourFlag(10, '0');
        }
    }

     Negatif(resultat){
        if(resultat<0) {
            this.miseAjourFlag(4, '1');
        }
        else {
            this.miseAjourFlag(4, '0');
        }
    }

     Overflow(resultat){
        if(resultat > 65535) {
            this.miseAjourFlag(11, '1');
        }
        else {
            this.miseAjourFlag(11, '0');
        }
    }

    miseAjourFlag(pos,n){
        let p = 16 - pos;
        let newflag = this.flags.getMot().split('');
        newflag[p] = n;
        let flag = newflag.join('');
        this.flags.setMot(flag);
    }

     afficher(){
        console.log(`${this.flags.getMot()}`);
    }

     getBit(pos){
        let p = 16 - pos;
        let newflag = this.flags.getMot().split('');
        return newflag[p];
    }
}
  /*
  conditionnelle : 0
  Retenu : 1
  Parite : 2
  Negatif : 4
  Zero : 6
  Décrémentation : 10
  Débordement : 11 
  */
export default Flags ;
  

  
