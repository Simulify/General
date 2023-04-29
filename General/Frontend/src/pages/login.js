import React from 'react';
import  { useState } from "react";
import SignLogButton from "../Components_login/SignLogButton";
import axios from 'axios';
import "./loginpage.css";
import Image from "../Components_login/Image.svg"
import { ReactSVG } from "react-svg";
import InputButton from "../Components_login/InputButton";
import logo from "../Components_login/logo.svg";
import { Link } from "react-router-dom";

function Login() {

 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  

    const handlelogin = () => {
        if (!email || !password) {
          console.log('All fields are required');
          return;
        }
        console.log('handleSignUp called');
        axios
          .post('/login', {
            email,
            password,
          })
          .then(response => {
            console.log(email);
            console.log(response.data);
            localStorage.setItem('token', response.data.token);
            const username = email.split('@')[0];
            window.location.href = `/user-space/${username}`;
          })
          .catch(error => {
            console.log(email);
            console.error(error);
          });
      };
      
      
    return (
        <div className="Containerlogin">
          <div className='illustration'>
          <img src={Image} alt='illustration'/>

          </div>
              
           
            <div className="FormLogin">
                <ReactSVG src={logo} />
                <InputButton
          className="button-3"
          placeholder="Email "
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
                 <InputButton
          className="button-2"
          placeholder="Mot de passe "
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <SignLogButton  label="Connexion" onClick={handlelogin} />
        
               
                
              
                
               
                <Link to="/signup">
                <div className=" SignUp ">
                  <span> Don’t have an account yet ?  </span>
               
                    <a  href=" " target=" _blank " > Sign Up  </a>
                </div>
              
      </Link>
                
            </div>
        </div>
    )
};


export default Login;