import React, { useState } from "react";
import "./FilesButton.css";
import folder from "../Images/Icon.svg"
import sup from "../Images/Caret right.svg"

function FilesButton(props) {
   // Déclaration des variables d'état à l'aide du hook useState
  const [isRotated, setIsRotated] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(0);
  // Définition d'une fonction pour gérer l'événement de clic sur le bouton
  const handleButtonClick = () => {
      // Inversion de la valeur de isRotated
   setIsRotated(!isRotated);
   // Définition de rotateAngle en fonction de la valeur actuelle de isRotated
   setRotateAngle(isRotated ? 0 : 90);
  };
  // Rendu d'un composant bouton
 return (
  <button className="Files-button" onClick={handleButtonClick}>
    <img className="folder" src={folder} alt="foldericon" ></img>
    <img className="sup" src={sup} alt="supicon" style={{ transform: `rotate(${rotateAngle}deg)` }} ></img>
      {/* Rendu du libellé passé en tant que prop */}
     {props.label}
  </button>
 );
}


export default FilesButton;