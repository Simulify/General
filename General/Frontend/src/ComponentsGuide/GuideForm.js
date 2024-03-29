import React from 'react';
import Navbar from '../components/Navbar';
import '../pages/Guide.css';
import { ReactComponent as Format } from '../Images/format.svg';

function GuideForm(props) {
 return (
  <div className="heroform">
    <Navbar label="Guide" isAuthenticated={props.isAuthenticated}/>
    <a href="/guide/instructions" className="suiv">Suivant</a>
    <a href="/guide/architecture" className="prev">Retour</a>
    <h2 className='h2'>Format d'instruction</h2>
    <Format className='Formatinst'/>
    <p className='text'>
    - COP : Le code opération sur 6 bits, donc 64 instructions.<br/>
    - MOD : Le mode d'adressage du 2ème opérande.<br/>
    - R : il contient le code du registre intermédiaire dans le cas des instructions mémoire-mémoire, ou CO dans le cas des branchements.<br/>
    - C : il est utilité comme un 2ème registre, sinon dans les instructions de branchement (condition), et de décalages (bits à décaler)..
    </p>
  </div>
 );
}


export default GuideForm;