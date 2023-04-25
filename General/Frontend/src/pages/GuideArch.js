import React from 'react';
import Navbar from '../components/Navbar';
import './Guide.css';
import { ReactComponent as Point } from '../Images/point.svg';

function GuideArch() {
  return (
    <div className="heroarch">
      <Navbar label="Guide" />
      <a href="./instruction-format" className="suiv">Suivant</a>
      <a href="." className="prev">Retour</a>
      <h2 className='h2'>Architecture de la machine pédagogique</h2>
      <p className='p1title'>Les composants :</p>
      <p className='p1'>Une pile qui servira pour sauvegarder le contexte d'un programme interrompu.</p>
      <p className='p2title'>Les registres :</p>
      <ul className='regs'>
        <li className='r1'><Point /><span>Registre 1</span></li>
        <li className='r2'><Point /><span>Registre 2</span></li>
        <li className='r3'><Point /><span>Registre 3</span></li>
        <li className='r4'><Point /><span>Registre 4</span></li>
        <li className='r5'><Point /><span>Registre 5</span></li>
        <li className='r6'><Point /><span>Registre 6</span></li>
        <li className='r7'><Point /><span>Registre 7</span></li>
      </ul>
    </div>
  );
}

export default GuideArch;
