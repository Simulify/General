import React from 'react';
import '../App.css';
import './RessourcesExplication.css';
import Navbar from '../components/Navbar';
import ButtonExplication from '../ComponentsRevision/ButtonExplication';

function ExplicationsPage (props) {
 return(
  <div className='ExplicationsPage' >
     <Navbar label="Explications"  isAuthenticated={props.isAuthenticated}/>
     <div className='containerExplication'>
       <ButtonExplication label="Concept 1" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
       <ButtonExplication label="Concept 2" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
       <ButtonExplication label="Concept 3" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
       <ButtonExplication label="Concept 4" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>       
       <ButtonExplication label="Concept 5" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>       
     </div>
  </div>
 ); 
}


export default ExplicationsPage