import React, { useState } from 'react';
import '../App.css';
import '../pages/Livres.css';
import { ReactComponent as Fleche } from "../Images/Caret right.svg";
import { ReactComponent as Lien } from "../Images/Lien.svg";

function ButtonLivre({ label, p1, p2, p3 }) {

  const [isRotated, setIsRotated] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

  function handleButtonClick() {
    setIsRotated(!isRotated);
    setShowDescription(!showDescription);
    setRotateAngle(isRotated ? 0 : 180);
  };

  return (
    <div className={`ButtonLivre ${showDescription ? 'expanded' : ''}`} onClick={handleButtonClick}>
      <div className='livre'>
        <span> {label} </span>
        <Fleche className='fleche' style={{ transform: `rotate(${rotateAngle}deg)` }} />
      </div>
      {showDescription ?
        <div className="Description">
          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <div className='lien'>
            <Lien className="LienIcone" />
            <a href='Livre'> lien </a>
          </div>
        </div> : null}
    </div>);
}

export default ButtonLivre;
