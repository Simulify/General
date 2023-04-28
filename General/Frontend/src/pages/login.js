import React from 'react';
import "./loginpage.css";
import Image from "../Components_login/Image.svg"
import { ReactSVG } from "react-svg";
import In from "../Components_login/InputButton";
import logo from "../Components_login/logo.svg";
import { Link } from "react-router-dom";

function login() {
    return (
        <div className="Containerlogin">
            <div className="ImageClass">
                <ReactSVG src={Image} />
            </div>
            <div className="FormLogin">
                <ReactSVG src={logo} />
                <In  placeholder="Email " />
                <In  placeholder="Mot de passe " />
                <div className=" ForgotPass">
                    <a href=" #link " target=" _blank " >Forgot password ?</a>
                </div>
                <br></br>
                <button>Connexion</button>
                <Link to="/signup">
                <div className=" SignUp ">
                    <a  href=" " target=" _blank " > Sign Up ! </a>
                </div>
      </Link>
                
            </div>
        </div>
    )
};


export default login;