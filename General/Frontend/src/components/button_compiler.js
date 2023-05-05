import React from "react";
import "./Buttonn.css";

function Button_compiler(props) {
   
 return(
  <a onClick={props.onClick} href={props.link} className="button" style={props.style}>{props.text}</a>
 );
}


export default Button_compiler;