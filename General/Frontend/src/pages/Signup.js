import React, { useState } from "react";
import "./SignUpPage.css";
import InputButton from "../Components_login/InputButton";
import { ReactSVG } from 'react-svg';
import logo from "../Components_login/logo.svg";
import LoginButton from "../Components_login/Button";
import { Link } from "react-router-dom";


function Signup () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log('handleSignUp called');
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
    .then(res => res.json())
    .then(data => {
      // Handle response from the server
      console.log(data);
     
    })
    .catch(err => {
        console.log('handleSignUp called');
      console.error(err);
    });
  };
  const handleSubmit = (e) => {
    console.log('handleSubmit called');
    debugger; // pause execution here
    e.preventDefault(); // Prevent default form submission behavior
    handleSignUp();
  };
  
  
  return (
    <div className="Container2">
      <div className="Form2">
        <ReactSVG src={logo} />
        <InputButton
          className="button-1"
          placeholder="Nom d'utilisateur "
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
         <InputButton
          className="button-3"
          placeholder="Email "
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputButton
          className="button-2"
          placeholder="mot de passe "
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
       <InputButton
          className="button-2"
          placeholder="verifier le mot de passe "
          type="password"
        />
        <LoginButton text="S'incrire " onClick={handleSubmit} />
        <div className="Login">
         
          <Link to="/login">
          <a href=" " target="_blank">
            Avez vous deja un compte ? Connexion</a> 
      </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
