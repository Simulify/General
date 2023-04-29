import React from "react";
import "./FileNoDelete.css";
import file from "../Images/File.svg";


function FileNoDelete(props) {
  return ( 
    <div className="fileLign">
      <button className="File-button" onClick={props.onClick}>
        <img className="file" src={file} alt="fileicon"></img>
        {props.label}
      </button>
     
    </div>
  );
}

export default FileNoDelete;
