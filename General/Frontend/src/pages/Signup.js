import React, { useState } from "react";
import axios from 'axios';
import "./SignUpPage.css";
import InputButton from "../Components_login/InputButton";
import { ReactSVG } from 'react-svg';
import logo from "../Components_login/logo.svg";
import SignLogButton from "../Components_login/SignLogButton";
import { Link } from "react-router-dom";


function Signup () {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    if (!username || !email || !password || !confirmPassword) {
      console.log('All fields are required');
      return;
    }
    console.log('handleSignUp called');
    axios.post('/signup', {
      username,
      email,
      password,
    })
    .then(response => {
      console.log(email);
      console.log(response.data);
    })
    .catch(error => {
      console.log(username);
      console.error(error);
    });
  };

  return (
    <div className="Singupcontainer">
      <div className="Form2">
        <ReactSVG src={logo} />
        <InputButton
  className="button-1"
  placeholder="Nom d'utilisateur "
  value={username}
  onChange={e => {
    console.log("Username changed: ", e.target.value);
    setUsername(e.target.value);
  }}
/>
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
        <InputButton
          className="button-2"
          placeholder="Confirmer Mot de passe "
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <SignLogButton label="S'inscrire" onClick={handleSignUp} />
     </div>
       
        
 
        <div className="Login">
        
          <span>Avez-vous déjà un compte ? </span>
          <Link to="/login">Connexion</Link>
        </div>
     
      
    </div>
  );
}

export default Signup;
