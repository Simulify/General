import React from "react";
import "./FileNoDelete.css";
import file from "../Images/File.svg";
import { Link } from "react-router-dom";

function FileNoDelete(props) {
    
  const handleClick = () => {
    localStorage.setItem('title', props.label);
    console.log(`label: ${props.label}`);
    localStorage.setItem('filecodeHexa', props.codeHexa);
    console.log(`filecodeHexa: ${props.codeHexa}`);
    localStorage.setItem('filecodeMemo', props.codeMemo);
    console.log(`filecodeMemo: ${props.codeMemo}`);
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
    </div>
  );
}

export default FileNoDelete;




