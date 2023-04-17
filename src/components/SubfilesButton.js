import React from "react";
import "./SubfilesButton.css";
import sup from "../img/sup2.svg"
import folder from "../img/Folder-open.svg"

function SubfilesButton(props) {
  return (
    <button className="Subfiles-button" onClick={props.onClick}>
       <img className="folder2" src={folder} alt="foldericon"></img>
       <img className="sup2" src={sup} alt="supicon"></img>
      {props.label}
   
    </button>
  );
}

export default SubfilesButton;
