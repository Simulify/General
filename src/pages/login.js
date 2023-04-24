import React from 'react';
import "./index_login.css";
import Image from "./Components_login/Image.svg"
import { ReactSVG } from "react-svg";
import InputButton from "../Components_login/InputButton";
import logo from "./Components_login/logo.svg";
import LoginButton from "../Components_login/Button";

function login () {
 return (
  <div  className=" Container ">
   <div className="ImageClass">
    <ReactSVG src={Image}/>
   </div>
   <div className="Form">
    <ReactSVG src={logo} />
    <InputButton  className="button-1" placeholder="Nom d'utilisateur ou Email " />
    <InputButton  className="button-2" placeholder="mot de passe "/>
    <div  className=" ForgotPass">
     <a href=" #link " target=" _blank " >forgot password </a>
    </div>
    <LoginButton text="connexion " />
    <div  className=" SignUp ">
     <a href=" #link " target=" _blank " > Sign up</a>
    </div>
   </div>
  </div>
 )
};


export default login;