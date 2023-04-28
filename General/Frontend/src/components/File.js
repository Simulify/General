import React from "react";
import "./File.css";
import file from "../Images/File.svg";
import can from '../Images/can2.svg';

function File(props) {
  return ( 
    <div className="fileLign">
      <button className="File-button" onClick={props.onClick}>
        <img className="file" src={file} alt="fileicon"></img>
        {props.label}
      </button>
      <img className="can" src={can} alt="deleteIcon" onClick={props.onDelete}></img>
    </div>
  );
}

export default File;
