import React from 'react';
import Navbar from '../components/Navbar';
import './Guide.css';


function Guide () {
 return (
  <div className="hero"> 
   <Navbar label="Guide"/>
   <a href="./instruction-format" className="suiv">Suivant</a>
   <a href="." className="prev">Retour</a>
  </div>
 );
};


export default Guide;