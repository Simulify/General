import React from "react";
import "./Buttonn.css";
import { Link } from "react-router-dom";

function Button(props) {
    return(
        <a href={props.link} className="button" style={props.style}>{props.text}</a>
        
    );
}
export default Button