import React from "react";
import "./FileNoDelete.css";
import file from "../Images/File.svg";
import { Link } from "react-router-dom";
//This component doesn't allow the user to delete it 
function FileNoDelete(props) {
    
  const handleClick = () => {
    //We load the data stored in the file in local storage
    localStorage.setItem('title', props.label); //title of the code
    console.log(`label: ${props.label}`);
    localStorage.setItem('filecodeHexa', props.codeHexa); //code in hexa
    console.log(`filecodeHexa: ${props.codeHexa}`);
    localStorage.setItem('filecodeMemo', props.codeMemo);//coee in memonique
    console.log(`filecodeMemo: ${props.codeMemo}`);
    localStorage.setItem('buttonClicked', "true"); //we set the value of clicked button at true for the code page
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




