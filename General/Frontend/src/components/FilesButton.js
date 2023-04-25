import React, { useState } from "react";
import "./FilesButton.css";
import folder from "../Images/Icon.svg"
import sup from "../Images/Caret right.svg"

function FilesButton(props) {
  const [isRotated, setIsRotated] = useState(false);
  const [rotateAngle, setRotateAngle] = useState(0);

  const handleButtonClick = () => {
    setIsRotated(!isRotated);
    setRotateAngle(isRotated ? 0 : 90);
  };

  return (
    <button className="Files-button" onClick={handleButtonClick}>
       <img className="folder" src={folder} alt="foldericon"></img>
       <img className="sup" src={sup} alt="supicon" style={{ transform: `rotate(${rotateAngle}deg)` }}></img>
      {props.label}
    </button>
  );
}

export default FilesButton;
