import React from 'react';
import '../App.css';
import './Livres.css';
import Navbar from '../components/Navbar';
import ButtonLivre from '../ComponentsRevision/ButtonLivre';

function SitesPage () {

  return(

      <div className='SitesPage'>

           <Navbar label="Sites"/>

           <div className='containerSites'>
                  <ButtonLivre label="Site 1" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
                  <ButtonLivre label="Site 2" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
                  <ButtonLivre label="Site 3" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
                  <ButtonLivre label="Site 4" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>       
           </div>

     </div>); 
}


export default SitesPage