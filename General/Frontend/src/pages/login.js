import React from 'react';
import "./loginpage.css";
import Image from "../Components_login/Image.svg"
import { ReactSVG } from "react-svg";
import InputButton from "../Components_login/InputButton";
import logo from "../Components_login/logo.svg";
import LoginButton from "../Components_login/Button";
import { Link } from "react-router-dom";

function login() {
    return (
        <div className="Containerlogin">
            <div className="ImageClass">
                <ReactSVG src={Image} />
            </div>
            <div className="FormLogin">
                <ReactSVG src={logo} />
                <InputButton className="button-1" placeholder="Nom d'utilisateur ou Email " />
                <InputButton className="button-2" placeholder="mot de passe " />
                <div className=" ForgotPass">
                    <a href=" #link " target=" _blank " >forgot password </a>
                </div>
                <LoginButton text="connexion " />
                <Link to="/signup">
                <div className=" SignUp ">
                    <a  href=" " target=" _blank " > Sign up</a>
                </div>
      </Link>
                
            </div>
        </div>
    )
};


export default login;