import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import avatar from "../Images/circle-user-solid.svg";
import Info from "../Images/Info-circle.svg";

function Navbar(props) {
  const isAuthenticated = props.isAuthenticated;

  return (
    <header>
      <div className="navbar">
        <h2 className="title">{props.label}</h2>
        <div className="nav-icons">
          {isAuthenticated ? (
             <Link to="/login"><img className="avatar-icon" src={avatar} alt="Avatar" /></Link>
            
          ) : (
            <Link to="/login" className="login-link">Login</Link>
          )}
          <Link to="/faq">
            <img className="info-icon" src={Info} alt="info" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
