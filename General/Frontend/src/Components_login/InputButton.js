import React from "react";
import "./InputButton.css";

function InputButton(props) {
  return (
    <div className="InputButton">
      <input
        type="text"
        placeholder={props.placeholder}
        className="input-button"
      />
    </div>
  );
}

export default InputButton;