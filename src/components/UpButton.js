import React from "react";
import "./UpButton.css";


function UpButton(props) {
  return (
    <button className="Up-button" onClick={props.onClick}>
      {props.label}
   
    </button>
  );
}

export default UpButton;
