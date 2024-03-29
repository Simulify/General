import React, { useState } from 'react';
import '../pages/RessourcesExplication.css';
import { ReactComponent as Fleche } from "../Images/Caret right.svg";
import { ReactComponent as Lien } from "../Images/Lien.svg";

function ButtonRessource({ label, p1, p2,lien }) {
  const [isRotated, setIsRotated] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  function handleButtonClick() {
    setIsRotated(!isRotated);
    setShowDescription(!showDescription);
    setRotateAngle(isRotated ? 0 : 90);
  };

 return (
  <div className={`ButtonRessource
    ${showDescription ? 'expanded' : ''}`} onClick={handleButtonClick}>
    <div className='BUTTON'>
      <span> {label} </span>
      <Fleche className='fleche' style={{ transform: `rotate(${rotateAngle}deg)` }} />
    </div>
    {showDescription ?
      <div className="Description">
        <p>{p1}</p>
        <p>{p2}</p>
        <div className='lien'>
          <Lien className="LienIcone" />
          <a href={lien}> lien </a>
        </div>
      </div> : null}
  </div>
 );
}


export default ButtonRessource;