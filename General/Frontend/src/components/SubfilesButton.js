import React, { useState } from "react";
import "./SubfilesButton.css";
import sup from "../Images/sup2.svg"
import folder from "../Images/Folder-open.svg"

function SubfilesButton(props) {
  const [isRotated, setIsRotated] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(0);
  const handleButtonClick = () => {
   setIsRotated(!isRotated);
   setRotateAngle(isRotated ? 0 : 90);
  };
 return (
  <button className="Subfiles-button" onClick={handleButtonClick}>
    <img className="folder2" src={folder} alt="foldericon"></img>
    <img className="sup2" src={sup} alt="supicon" style={{ transform: `rotate(${rotateAngle}deg)` }}></img>
    {props.label}
  </button>
 );
}


export default SubfilesButton;