import React, { useState, useEffect } from 'react';
import SignLogButton from '../Components_login/SignLogButton';
import axios from 'axios';
import './loginpage.css';
import { ReactSVG } from 'react-svg';
import InputButton from '../Components_login/InputButton';
import logo from '../Components_login/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
//les images de l'animation ---------------------------------------------------
import image1 from '../Components_login/image1.svg';
import image2 from '../Components_login/image2.svg';
import image3 from '../Components_login/image3.svg';
import image4 from '../Components_login/image4.svg';
import image5 from '../Components_login/image5.svg';
import image6 from '../Components_login/image6.svg';
import image7 from '../Components_login/image7.svg';
import image8 from '../Components_login/image8.svg';
import image9 from '../Components_login/image9.svg';
//-------------------------------------------------------------------------------

function Login({ setisAuthenticated,setCurrentUser,currentUser }) {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => { // sets the varible to true when user logs in 
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (isAuthenticated) {
      setisAuthenticated(true);
    }
  }, []);


  const handleLogin = () => {  
    if (!email || !password) { //checks the presence of the email & password
      console.log('All fields are required');
      return;
    }
    console.log('handleSignUp called');
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
        localStorage.setItem('isAuthenticated', 'true');
      
        localStorage.setItem('resetDone','false');
        console.log("reset:", localStorage.getItem('resetDone'));
        localStorage.setItem('currentUser', JSON.stringify(response.data.user));
        console.log('currentUser:', response.data.user);
        console.log('currentUser_id:', response.data.user._id);
        navigate(`/home`); // we redirect to home to indicate the successful login 
      })
      .catch((error) => {
        console.log(email);
        console.error(error);
      });
  };
  useEffect(() => { // Gestion de l'animation de la page de connexion
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 6);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
   //l'animation de la page de connexion 
  const images = [image1, image2, image3, image4, image5, image6, image7, image8,image9];
 

  return (
    <div className="Containerlogin">
      <div className="illustration">
      <img src={images[currentImage]} alt="illustration" />
      </div>
      <div className="FormLogin">
        <ReactSVG src={logo} />
        <InputButton //bouton email 
          className="button-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputButton //bouton mode passe 
          className="button-2"
          placeholder="Mot de passe"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignLogButton label="Connexion" onClick={handleLogin} />
        <Link to="/signup">
          <div className=" SignUp ">
            {/* au cas ou l'utilisateur n'a pas un compte et il veut s'inscrire  */}
            <span> Vous n'avez pas un compte ? </span>
            <a href=" " target="_blank">
              {' '}
              S'inscrire{' '}
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
