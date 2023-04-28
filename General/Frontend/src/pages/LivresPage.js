import React from 'react';
import '../App.css';
import './Livres.css';
import {ReactComponent as Fleche} from "../Images/Caret right.svg";
import { useState } from 'react';
import Navbar from '../components/Navbar';

function LivresPage () {

  const [isRotated, setIsRotated] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(0);
  const [showDescription, setShowDescription] = useState(false);


  const handleButtonClick = () => {
    setIsRotated(!isRotated);
    setRotateAngle(isRotated ? 0 : 90);
    setShowDescription(!setShowDescription);
  };



  return(
   <div className='LivresPage'>

        <Navbar label="Livres"/>
        <div className='containerLivres'>

          <div className='LesLivres'>

              <div className='livre1' onClick={handleButtonClick}>
                    <span> Livre 1 </span>
                    <Fleche className='fleche1' style={{ transform: `rotate(${rotateAngle}deg)` }}/>
              </div>

              <div className='Livre2EtDescription' onClick={handleButtonClick}>
                  <div className='livre2'> 
                        <span> Livre 2 </span>
                        <Fleche className='fleche2' style={{ transform: `rotate(${rotateAngle}deg)` }}/>
                  </div>
                  <div className={`Description ${showDescription ? "Afficher" : "NonAfficher"}`}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
                        <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                   </div>
                   
              </div>
                 

              <div className='livre3' onClick={handleButtonClick} >
                    <span> Livre 3 </span>
                    <Fleche className='fleche3' style={{ transform: `rotate(${rotateAngle}deg)` }}/>
              </div>

              <div className='livre4' onClick={handleButtonClick}>
                    <span> Livre 4 </span>
                    <Fleche className='fleche4' style={{ transform: `rotate(${rotateAngle}deg)` }}/>
              </div>

          </div>

        </div>

    </div>); 
}


export default LivresPage