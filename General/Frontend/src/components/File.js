import React from "react";
import "./File.css";
import file from "../Images/File.svg";
import can from '../Images/Trash.svg';
import { Link } from "react-router-dom";

function File(props) {
  return ( 
    <div className="fileLign">
      <Link to="/code">
        <button className="File-button" >
          <img className="file" src={file} alt="fileicon"></img>
          {props.label}
        </button>
      </Link>
      {props.value && <p style={{display: 'none'}}>{props.value}</p>}
      <img className="can" src={can} alt="deleteIcon" onClick={props.onDelete}></img>
    </div>
  );
}

export default File;
