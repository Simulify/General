import React from 'react';
import Navbar from '../components/Navbar';
import './Guide.css';
import { ReactComponent as HomeGuide} from '../Images/homeguide.svg';


function Guide () {
 return (
  <div className="hero"> 
   <Navbar label="Guide"/>
   <HomeGuide className='guide-image'/>
   <a href="/guide/architecture" className="suiv">Suivant</a>
  </div>
 );
};


export default Guide;