import React from 'react';
import Navbar from '../components/Navbar';
import './Guide.css';


function GuideArch () {
 return (
  <div className="hero"> 
   <Navbar label="Guide"/>
   <a href="./instruction-format" className="suiv">Suivant</a>
   <a href="." className="prev">Retour</a>
   <h2>Architecture de la machine pédagogique</h2>

  </div>
 );
};


export default GuideArch;