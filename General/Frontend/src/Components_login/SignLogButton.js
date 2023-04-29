import React from 'react';
import './SignLogButton.css'; 

function SignLogButton(props) {
  return (
    <button className="SignLogButton">{props.label}</button>
  );
}

export default SignLogButton;
