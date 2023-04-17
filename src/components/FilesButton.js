import React from "react";
import "./FilesButton.css";
import folder from "../img/Icon.svg"
import sup from "../img/Caret right.svg"

function FilesButton(props) {
  return (
    <button className="Files-button" onClick={props.onClick}>
       <img className="folder" src={folder} alt="foldericon"></img>
       <img className="sup" src={sup} alt="supicon"></img>
      {props.label}
   
    </button>
  );
}

export default FilesButton;
