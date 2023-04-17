import React from "react";
import "./Navbar.css";
import avatar from "../img/Ellipse 515.svg"
import Info from "../img/Info-circle.svg"


function Navbar(props) {
  return (
    <header>
    <div class="navbar">
      <div class="logo">  {props.label}</div>

      <div className="nav-icons">
          <img className="notification-icon" src={Info} alt="Info"></img>
          <img className="avatar-icon" src={avatar} alt="Avatar"></img>
        </div>

   
     
    </div>
  </header>
  
  );
}

export default Navbar;
