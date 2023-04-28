import React from 'react';
import '../App.css';
import '../pages/Livres.css';
import {ReactComponent as Fleche} from "../Images/Caret right.svg";
import {ReactComponent as Lien} from "../Images/Lien.svg";
import { useState } from 'react';

function ButtonLivre ({label}) {

  const [isRotated, setIsRotated] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(0);
  const [showDescription, setShowDescription] = useState(false);


  function handleButtonClick () {
    setShowDescription(!setShowDescription);
    setIsRotated(!isRotated);
    setRotateAngle(isRotated ? 0 : 90);
  };

  return(
   <div className='ButtonLivre' onClick={handleButtonClick}>
        <div className='livre'> 
            <span> {label} </span>
            <Fleche className='fleche' style={{ transform: `rotate(${rotateAngle}deg)` }}/>
        </div>
        <div className={`Description ${showDescription ? "Afficher" : ""}`}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
            <div className='lien'>
                <Lien className="LienIcone"/>
                <a href='Livre'> lien </a>   
            </div>
        </div>
    </div>); 
}

export default ButtonLivre