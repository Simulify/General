import React from 'react';
import Navbar from '../components/Navbar';
import './Guide.css';

function GuideInstr() {
  return (
    <div className="heroinstr">
      <Navbar label="Guide" />
      <a href="/guide/instruction-format" className="prev">Retour</a>
      <h2 className='h2'>Jeu d'instructions</h2>
      <a href="/guide/instructions/arithmetic" className="arth">Instructions arithmétiques</a>
      <a href="/guide/instructions/logic" className="log">Instructions logiques</a>
      <a href="/guide/instructions/shift-rotation" className="shrt">Instructions de décalage et rotation</a>
      <a href="/guide/instructions/branch" className="brch">Instructions de branchement</a>
      <a href="/guide/instructions/data-transfer" className="dtrs">Instructions de transfert de données</a>
      <a href="/guide/instructions/in-out" className="inout">Instructions d'entrée/sortie et arrêt de programme</a>
    </div>
  );
}

export default GuideInstr;