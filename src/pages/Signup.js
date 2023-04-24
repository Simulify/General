// sign up  page 
import React from "react";
import "./index_login.css";
import InputButton from "../Components_login/InputButton";
import { ReactSVG } from 'react-svg';
import logo from "../Components_login/logo.svg";
import LoginButton from "../Components_login/Button";
import '../App.css';
import './Signup.css';

function Signup () {
 return (
  <div  className=" Container2 ">
   <div className="Form2">
    <ReactSVG src={logo} />
    <InputButton  className="button-1" placeholder="Nom d'utilisateur ou Email " />
    <InputButton  className="button-2" placeholder="mot de passe "/>
    <InputButton  className="button-2" placeholder="verifier le mot de passe "/>
    <LoginButton text="s'incrire " />
    <div  className=" Login ">
     <a href=" #link " target=" _blank " > vous avez deja un compte ? connexion </a>
    </div>
   </div>
  </div>
 )
};


export default Signup;
