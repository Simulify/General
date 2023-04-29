import React from "react";
import "./InputButton.css";

function InputButton(props) {
  return (
    <div className="InputButton">
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="input-button"
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputButton;
