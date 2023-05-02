import React from "react";
import "./File.css";
import file from "../Images/File.svg";
import can from '../Images/Trash.svg';
import { Link } from "react-router-dom";

function File(props) {


  
  const handleClick = () => {
    localStorage.setItem('storedCode.id', props.id);
    console.log(`storedCode.id: ${props.id}`);
    localStorage.setItem('filecodeHexa', props.codeHexa);
    console.log(`filecodeHexa: ${props.codeHexa}`);
    localStorage.setItem('filecodeMemo', props.codeMemo);
    console.log(`filecodeMemo: ${props.codeMemo}`);
    localStorage.setItem('filecompiled', props.compiled);
    console.log(`filecompiled: ${props.compiled}`);
    localStorage.setItem('buttonClicked', "true");
    console.log("buttonClicked:", localStorage.getItem("buttonClicked"));
  };
  return ( 
    <div className="fileLign">
      <Link to="/code">
        <button className="File-button" onClick={handleClick}>
          <img className="file" src={file} alt="fileicon"></img>
          {props.label}
        </button>
      </Link>
      
      <p style={{display: 'none'}}>{props.codeHexa}</p>
      <p style={{display: 'none'}}>{props.codeMemo}</p>
      {props.compiled && <p style={{display: 'none'}}>Compiled</p>}
      <img className="can" src={can} alt="deleteIcon" onClick={props.onDelete}></img>
    </div>
  );
}

export default File;
