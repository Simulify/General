import React, { useState } from "react";
import axios from 'axios';
import "./SignUpPage.css";
import InputButton from "../Components_login/InputButton";
import { ReactSVG } from 'react-svg';
import logo from "../Components_login/logo.svg";
import SignLogButton from "../Components_login/SignLogButton";
import { Link, useNavigate } from 'react-router-dom';

function Signup (setisAuthenticated,setCurrentUser,currentUser) {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = () => {
    console.log('handleSignUp called');
    if (!(username && email && password && confirmPassword) || password !== confirmPassword) {
      console.log('All fields are required and passwords must match');
      return;
    }
    
    console.log('handleSignUp called');
    axios.post('https://simulify.onrender.com/signup', {
      username,
      email,
      password,
    })
    .then(response => {
      console.log(email);
      console.log(response.data);
      axios
      .post('https://simulify.onrender.com/login', { // we post the user's data to the database 
        email,
        password,
      })
      .then((response) => {
        console.log(email);
        console.log(response.data);
        localStorage.setItem('token', response.data.token); // we get the token of the identification 
        const username = email.split('@')[0]; //we get the user's space name from the email 
        localStorage.setItem('username', username);
        localStorage.setItem('isAuthenticated', true);
        localStorage.setItem('currentUser', JSON.stringify(response.data.user));
        console.log('currentUser:', response.data.user);
        console.log('currentUser_id:', response.data.user._id);
        navigate(`/home`); // we redirect to home to indicate the successful login 
      })
      .catch((error) => {
        console.log(email);
        console.error(error);
      });
     
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
        <SignLogButton className="SignLogButton1" label="S'inscrire" onClick={handleSignUp} />
     </div>
       
        <div className="Login">
        
          <span>Avez-vous déjà un compte ? </span>
          <Link to="/login">
          <a  href=" " target=" _blank " > Connexion  </a>
            </Link>
        </div>
     
      
    </div>
  );
}

export default Signup;
