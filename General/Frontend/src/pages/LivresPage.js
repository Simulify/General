import React from 'react';
import '../App.css';
import './Livres.css';
import Navbar from '../components/Navbar';
import ButtonLivre from '../ComponentsRevision/ButtonLivre';

function LivresPage () {

  return(

      <div className='LivresPage'>

           <Navbar label="Livres"/>

           <div className='containerLivres'>
                  <ButtonLivre label="Livre 1" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
                  <ButtonLivre label="Livre 2" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
                  <ButtonLivre label="Livre 3" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
                  <ButtonLivre label="Livre 4" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>       
           </div>

     </div>); 
}


export default LivresPage