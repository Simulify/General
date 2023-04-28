import React from 'react';
import Navbar from '../components/Navbar';
import './Guide.css';

function GuideInstr() {
  return (
    <div className="heroinstr">
      <Navbar label="Guide" />
      <a href="/guide/" className="suiv">Suivant</a>
      <a href="/guide/architecture" className="prev">Retour</a>
    </div>
  );
}

export default GuideInstr;
