import React, { useState } from "react";
import axios from 'axios';
import "./SignUpPage.css";
import InputButton from "../Components_login/InputButton";
import { ReactSVG } from 'react-svg';
import logo from "../Components_login/logo.svg";
import SignLogButton from "../Components_login/SignLogButton";
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

 // Fonction d'inscription 
const handleSignUp = () => {
  if (!(username && email && password && confirmPassword)) { // Ses parametres
    setError('All fields are required');
    return;
  }

  if (password !== confirmPassword) { //Verifie si mot de passe confirmé correctement
    setError('Passwords do not match');
    return;
  }
  axios
    .post('https://simulify.onrender.com/signup', {//envoie un appel à la base de données et récupere l'objet user
      username,
      email,
      password,
    })
    .then(response => {
      console.log(email);
      console.log(response.data);
      axios
        .post('https://simulify.onrender.com/login', {
          email,
          password,
        })
        .then(response => { //MAJ des variables d'authetification 
          console.log(email);
          console.log(response.data);
          localStorage.setItem('token', response.data.token);
          const username = email.split('@')[0];
          localStorage.setItem('username', username);
          localStorage.setItem('isAuthenticated', 'true');
          localStorage.setItem('resetDone', 'false');
          console.log('reset:', localStorage.getItem('resetDone'));
          localStorage.setItem('currentUser', JSON.stringify(response.data.user));
          console.log('currentUser:', response.data.user);
          console.log('currentUser_id:', response.data.user._id);
          navigate(`/home`);
        })
        .catch(error => {
          console.error(error);
          setError('An error occurred during login. Please try again later.');
        });
    })
    .catch(error => {
      console.error(error.response);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('An error occurred during signup. Please try again later.');
      }
    });
};

// ...
return (
  <div className="Singupcontainer">
    <div className="Form2">
      <ReactSVG src={logo} />
      <InputButton
        className="button-1"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={e => {
          console.log("Username changed: ", e.target.value);
          setUsername(e.target.value);
        }}
      />
      <InputButton
        className="button-3"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <InputButton
        className="button-2"
        placeholder="Mot de passe"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <InputButton
        className="button-2"
        placeholder="Confirmer Mot de passe"
        type="password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      {error && <p className="ErrorMessage">{error}</p>}
      <SignLogButton className="SignLogButton1" label="S'inscrire" onClick={handleSignUp} error={error} />
    </div>
    <div className="Login">
      <span>Avez-vous déjà un compte ?</span>
      <Link to="/login">
        <a href=" " target="_blank">
          Connexion
        </a>
      </Link>
    </div>
  </div>
);

}

export default Signup;

