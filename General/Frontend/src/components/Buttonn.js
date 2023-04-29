import React from "react";
import "./Buttonn.css";


function Button(props) {
    return(
        <a href={props.link} className="button" style={props.style}>{props.text}</a>
        
    );
}
export default Button