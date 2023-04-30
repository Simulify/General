import React from "react";
import "./FileNoDelete.css";
import file from "../Images/File.svg";
import { Link } from "react-router-dom";

function FileNoDelete(props) {
  return ( 
    <div className="fileLign">
      <button className="File-button" onClick={props.onClick}>
      <Link to="/code">
        <img className="file" src={file} alt="fileicon"></img>
        </Link>
        {props.label}
      </button>
      {props.value && <p style={{display: 'none'}}>{props.value}</p>}
    </div>
  );
}

export default FileNoDelete;
