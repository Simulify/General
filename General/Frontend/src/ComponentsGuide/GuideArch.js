import React from 'react';
import Navbar from '../components/Navbar';
import '../pages/Guide.css';
import { ReactComponent as Point } from '../Images/point.svg';
import { ReactComponent as Arch } from '../Images/arch.svg';

function GuideArch() {
 return (
  <div className="heroarch">
    <Navbar label="Guide" />
    <Arch className='Architecture'/>
    <a href="/guide/instruction-format" className="suiv">Suivant</a>
    <a href="/guide" className="prev">Retour</a>
    <h2 className='h2'>Architecture de la machine pédagogique</h2>
    <p className='p1title'>Les composants :</p>
    <p className='p1'>Une pile qui servira pour sauvegarder le contexte d'un programme interrompu.</p>
    <p className='p2title'>Les registres :</p>
    <ul className='regs'>
      <li className='r1'><Point /><span>BX : Registre de base</span></li>
      <li className='r2'><Point /><span>CX : Registre conteur de boucles</span></li>
      <li className='r3'><Point /><span>DX : Registre extension de l'accumulateur</span></li>
      <li className='r4'><Point /><span>ACC : Accumulateur</span></li>
      <li className='r5'><Point /><span>CO : Conteur Ordinal</span></li>
      <li className='r6'><Point /><span>SI : Registre d'index</span></li>
      <li className='r7'><Point /><span>RI : Registre Instruction</span></li>
    </ul>
    <p className='p2'>La taille des registres ainsi que les bus de données et d'adresses est <br/>sur 16 bits.</p>
  </div>
 );
}


export default GuideArch;