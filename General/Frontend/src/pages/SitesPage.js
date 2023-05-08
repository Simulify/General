import React from 'react';
import '../App.css';
import './RessourcesExplication.css';
import Navbar from '../components/Navbar';
import ButtonRessource from '../ComponentsRevision/ButtonRessource';

function SitesPage (props) {

  return(

      <div className='SitesPage'>

           <Navbar label="Sites"  isAuthenticated={props.isAuthenticated}/>

           <div className='containerSites'>
                  <ButtonRessource label="Site 1" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
                  <ButtonRessource label="Site 2" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
                  <ButtonRessource label="Site 3" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
                  <ButtonRessource label="Site 4" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>       
           </div>

     </div>); 
}


export default SitesPage