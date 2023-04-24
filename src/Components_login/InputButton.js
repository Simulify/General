import React from "react" ; 
import "./InputButton.css"; 

function InputButton (props){
const handleButtonClick = () => {
    //  button click logic 
    console.log("Button clicked!");
  };

    return (
        <div className="InputButton">
      <input
       type="input" 
       onClick={handleButtonClick} 
       placeholder={props.placeholder}
       className="input-button"
    />
    </div> 
    )
}


export default InputButton