import React from 'react';
import './Revision.css';
import Lampe from '../Images/Lampe.svg';
import Explication from '../Images/Explication.svg';
import Ressources from '../Images/Ressources.svg';
import '../App.css';
import Navbar from '../components/Navbar';
import ButtonRevision from '../ComponentsRevision/ButtonRevision';

function Revision () {

  return(
 
   <div className='Revision'>
     <Navbar label="Révisions" />
     <div className='ContainerRevision'>

        <div className='Explication'>
            <img src={Explication} className='ExplicationImg'/>
            <ButtonRevision name="Explication" page="Explication"/>
        </div>
        
        <div className='Quiz'>
            <img src={Lampe} className='LampeImg'/>
            <ButtonRevision name="Quiz" page="Quiz"/>
        </div>

        <div className='Ressources'>
            <img src={Ressources} className='RessourcesImg'/>
            <ButtonRevision name="Ressources" page="Ressources"/>
        </div>

     </div>

  </div>);
};


export default Revision;