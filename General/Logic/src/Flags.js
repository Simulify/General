class Flags {
    constructor(flags) {
        this.flags = flags;
    }

    Carry(a,b){
        let x = a.getMot(); // Récupère la valeur de l'opérande a
        let y = b.getMot(); // Récupère la valeur de l'opérande b
        let carry = 0; // Initialise la variable "retenue" à 0
        for (let i = 0; i < x.length; i++) {
            let sum = parseInt(x[i]) + parseInt(y[i]) + carry; // Calcule la somme de chaque bit des opérandes et de la retenue
            if (sum > 1) { // Si la somme est supérieure à 1, il y a une retenue
                carry = 1; // La variable "retenue" est mise à jour à 1
                this.miseAjourFlag(0); // Met à jour le flag "retenue" à la position 0
            } else {
                carry = 0; // Sinon, la variable "retenue" est mise à jour à 0
            }
        }
    }

    Parity(resultat){
        let count = 0;
        for (let i = 0; i < 16; i++) { // boucle sur les 16 bits du résultat
            if (resultat[i] === '1') { // si le bit est égal à 1
                count++; // incrémenter le compteur
            }
        }
        if (count % 2 === 0) { // si le nombre de bits égal à 1 est pair
            this.miseAjourFlag(2); // mettre à jour le flag de parité
        }
    }

    Zero(resultat){
        if(resultat == 0) { // si le résultat est égal à 0
            this.miseAjourFlag(6); // mettre à jour le flag de zéro
        }
    }


    Decrement(cx){
        let decr = cx.envoyer(); // récupérer la valeur de cx
        if(decr == 0) { // si cx est égal à 0
            this.miseAjourFlag(10); // mettre à jour le flag de décrémentation
        }
    }

    Negatif(resultat){
        if(resultat<0) { // si le résultat est négatif
            this.miseAjourFlag(4); // mettre à jour le flag de négatif
        }
    }

    Overflow(resultat){
        if(resultat > 65535) { // si le résultat dépasse la valeur maximale possible sur 16 bits
            this.miseAjourFlag(11); // mettre à jour le flag de débordement
        }
    }

    miseAjourFlag(pos){
        let p = 16 - pos; // calculer la position du bit à mettre à jour
        let newflag = this.flags.getMot().split(''); // convertir le mot de flags en tableau de caractères
        newflag[p] = '1'; // mettre à jour le bit à la position p
        let flag = newflag.join(''); // convertir le tableau de caractères en mot de flags
        this.flags.setMot(flag); // Mettre à jour la contenu du registre avec le nouveau mot
    }

     afficher(){
        console.log(`${this.flags.getMot()}`);// afficher le contenu de registre
    }
    
    getBit(pos){
        let p = 16 - pos; // Calculer la position du bit à récupérer
        let newflag = this.flags.getMot().split(''); // Convertir le mot de flags en tableau de caractères
        return newflag[p]; // Retourner la valeur du bit à la position p
    }
}
  /* Retenu : 0; Parite : 2; Negatif : 4; Zero : 6; Décrémentation : 10; Débordement : 11 */
export default Flags ;