import React from "react";
import "./File.css";
import file from "../Images/File.svg";
import can from '../Images/Trash.svg';
import { Link } from "react-router-dom";
//This component allows the user to delete it 
function File(props) {
  const handleClick = () => {
    //We load the data stored in the file in local storage
    localStorage.setItem('storedCode.id', props.id); //_id of the code
    console.log(`storedCode.id: ${props.id}`);
    localStorage.setItem('title', props.label);//title o the code
    console.log(`label: ${props.label}`); 
    localStorage.setItem('filecodeHexa', props.codeHexa);//code in hexa
    console.log(`filecodeHexa: ${props.codeHexa}`); 
    localStorage.setItem('filecodeMemo', props.codeMemo);//code in memonique
    console.log(`filecodeMemo: ${props.codeMemo}`);
    localStorage.setItem('buttonClicked', "true"); // we set the value of clicked button at true for the code page
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
      
      <img className="can" src={can} alt="deleteIcon" onClick={props.onDelete}></img>
    </div>
  );
}

export default File;
