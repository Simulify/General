import React from 'react';
import './SignLogButton.css'; 

function SignLogButton(props) {
  return (
    <button className="SignLogButton" onClick={props.onClick}>{props.label}</button>
  );
}

export default SignLogButton;
