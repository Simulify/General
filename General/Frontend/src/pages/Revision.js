/***************************************************************************************/
import React from 'react';
import './Revision.css';
import { ReactComponent as Lampe } from '../Images/Lampe.svg';
import { ReactComponent as Explication } from '../Images/Explication.svg';
import { ReactComponent as Ressources } from '../Images/Ressources.svg';
import '../App.css';
import Navbar from '../components/Navbar';
/***************************************************************************************/

function Revision(props) {

  return (
    <div className='Revision'>
      <Navbar label="Révisions" isAuthenticated={props.isAuthenticated} />
      <div className='ContainerRevision'>
        {/* ---------------------------------------------------------------------------------- */}
        <div className='Explication'>
          <Explication className='ExplicationImg' />
          <a href="/revision/explication" className="ButtonRevision">Explication</a>
        </div>
        {/* ---------------------------------------------------------------------------------- */}
        <div className='Quiz'>
          <Lampe className='LampeImg' />
          <a href="/revision/quiz" className="ButtonRevision">Quiz</a> 
        </div>
        {/* ---------------------------------------------------------------------------------- */}
        <div className='Ressources'>
          <Ressources className='RessourcesImg' />
          <a href="/revision/ressources" className="ButtonRevision">Ressources</a>
        </div>

      </div>

    </div>);
};


export default Revision;