import React, { useState } from 'react';
import '../pages/RessourcesExplication.css';
import { ReactComponent as FlecheConcept } from "../Images/FlecheConcept.svg";

function ButtonExplication({ label, p1, p2, p3 }) {
  const [isRotated, setIsRotated] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  function handleButtonClick() {
    setIsRotated(!isRotated);
    setShowDescription(!showDescription);
    setRotateAngle(isRotated ? 0 : 180);
  };

 return (
  <div className={`ButtonExplication
    ${showDescription ? 'expanded' : ''}`} onClick={handleButtonClick}>
    <div className='BUTTON'>
      <span> {label} </span>
      <FlecheConcept className='fleche' style={{ transform: `rotate(${rotateAngle}deg)` }} />
    </div>
    {showDescription ?
    <div className="Description">
      <p>{p1}</p>
      <p>{p2}</p>
      <p>{p3}</p>
      
    </div> : null}
  </div>
 );
}


export default ButtonExplication;