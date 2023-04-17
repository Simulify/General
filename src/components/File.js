import React from "react";
import "./File.css";
import file from "../img/File.svg"

function File(props) {
  return (
    <button className="File-button" onClick={props.onClick}>
       <img className="file" src={file} alt="fileicon"></img>

      {props.label}
   
    </button>
  );
}

export default File;
