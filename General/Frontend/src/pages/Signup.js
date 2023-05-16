/***************************************************************************************/
import React, { useState } from "react";
import axios from 'axios';
import "./SignUpPage.css";
import InputButton from "../Components_login/InputButton";
import { ReactSVG } from 'react-svg';
import logo from "../Components_login/logo.svg";
import SignLogButton from "../Components_login/SignLogButton";
import { Link, useNavigate } from 'react-router-dom';
/***************************************************************************************/


//------------------------------------------------------------------------------------------------

function Signup(setisAuthenticated, setCurrentUser, currentUser) {
  //la fonction d'authontification 
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); // Le nom d'utilisateur
  const [email, setEmail] = useState("");// L'email
  const [password, setPassword] = useState("");// Le mot de passe
  const [confirmPassword, setConfirmPassword] = useState("");// La confirmation du mot de passe

  const handleSignUp = () => {
    console.log('handleSignUp called'); 
    if (!(username && email && password && confirmPassword) || password !== confirmPassword) {
      console.log('All fields are required and passwords must match');
      return;
    }

    console.log('handleSignUp called');

    // Appel à l'API pour la connexion après l'inscription

    axios.post('https://simulify.onrender.com/signup', {
      username,
      email,
      password,
    })
      .then(response => {
        console.log(email);
        console.log(response.data);
        axios
          .post('https://simulify.onrender.com/login', { // Nous envoyons les données de l'utilisateur à la base de données
            email,
            password,
          })
          .then((response) => {
            console.log(email);
            console.log(response.data);
            localStorage.setItem('token', response.data.token); // Nous récupérons le token d'identification
            const username = email.split('@')[0]; // Nous récupérons le nom d'espace de l'utilisateur à partir de l'email
            localStorage.setItem('username', username);
            localStorage.setItem('isAuthenticated', true);
            localStorage.setItem('currentUser', JSON.stringify(response.data.user));
            console.log('currentUser:', response.data.user);
            console.log('currentUser_id:', response.data.user._id);
            navigate(`/home`);  // Nous redirigeons vers la page d'accueil pour indiquer la connexion réussie
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

            //set or MAJ du champ utilisateur 

            console.log("Username changed: ", e.target.value);
            setUsername(e.target.value);
          }}
        />
        <InputButton //le bouton de l'email 
          className="button-3"
          placeholder="Email "
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <InputButton //le bouton mot de passe 
          className="button-2"
          placeholder="Mot de passe "
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <InputButton   //le bouton de confimation du mot de passe 
          className="button-2"
          placeholder="Confirmer Mot de passe "
          type="password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <SignLogButton className="SignLogButton1" label="S'inscrire" onClick={handleSignUp} />
      </div>

      <div className="Login">
        {/* //le cas ou l'utilisateur a deja un compte et il feut se connecter directement  */}
        <span>Avez-vous déjà un compte ? </span>
        <Link to="/login">
          <a href=" " target=" _blank " > Connexion  </a>
        </Link>
      </div>


    </div>
  );
}

export default Signup;
