import React, { useState } from 'react';
import FormSettings from './FormSettings';
import Navbar from '../components/Navbar';
import InputButton from '../Components_login/InputButton'; 
import axios from 'axios';

//la page des parametres du mot de passe 

function MotDePassePage(props) {
  const [password, setPassword] = useState('');// État pour le champ de mot de passe
  const [confirmPassword, setConfirmPassword] = useState('');// État pour le champ de confirmation du mot de passe
  const [isEditing, setIsEditing] = useState(false); // État pour indiquer si l'édition est en cours ou non
 
  const handleModify = () => {
    setIsEditing(true);// Définir l'état d'édition sur true lorsque l'utilisateur souhaite modifier
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);// Mettre à jour l'état du mot de passe à chaque modification du champ de mot de passe
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);// Mettre à jour l'état du mot de passe de confirmation à chaque modification du champ de confirmation du mot de passe
  
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // backend work here ( send data to backend )

    console.log('Password:', password);// Afficher le mot de passe dans la console
    console.log('Confirm Password:', confirmPassword);// Afficher le mot de passe de confirmation dans la console
    setIsEditing(false);// Terminer l'édition
  };

  const handleCancel = () => {
     // Réinitialiser les champs du formulaire
    setPassword('');// Réinitialiser le champ de mot de passe
    setConfirmPassword(''); // Réinitialiser le champ de confirmation du mot de passe
  };
  const handleClick = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("currentUser"));
      console.log('currentUser:', storedUser);
      console.log('currentUser_id:', storedUser._id);
      if (password===confirmPassword){
        const response = await axios.put(`https://simulify.onrender.com/users/${storedUser._id}/password`, { password });
        const updatedUser = response.data;
        setPassword(updatedUser.password);
        setIsEditing(false);
        setPassword("");
        setConfirmPassword("");
      }
      else {
        console.log("The password must match the confirmed one");
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className='MotDePassePage'>
      <Navbar label='Parametres'  isAuthenticated={props.isAuthenticated} />
      <FormSettings isEditing={isEditing} handleModify={handleModify} />
      <form onSubmit={handleSubmit}>
        <div className='containerSettings'>
          <div className='Inputs'>
            <div className='MotDePasse'>
              <label htmlFor='password'>Nouveau mot de passe</label>
              <InputButton 
                type='password'
                value={password}
                onChange={handlePasswordChange}
                placeholder='Mot de passe'
                readOnly={!isEditing} 
              />
            </div>
            <div className='ConfirmerMotDePasse'>
              <label htmlFor='confirmPassword'>Confirmer votre mot de passe:</label>
              <InputButton 
                type='password'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder='Confirmer votre mot de passe'
                readOnly={!isEditing} 
              />
            </div>
          </div>
          {isEditing && (
            // les bouttons sauvegarder et annuler 
          <div className="TwoButtons">
            <button className="sauvegarder" type="submit" onClick={handleClick}>
              Sauvegarder
            </button>
            <button className="annuler" type="button" onClick={handleCancel}>
              Annuler
            </button>
          </div>
        )}
        </div>
      </form>
    </div>
  );
}

export default MotDePassePage;
