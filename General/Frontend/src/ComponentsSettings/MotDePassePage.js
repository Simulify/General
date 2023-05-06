import React, { useState } from 'react';
import FormSettings from './FormSettings';
import Navbar from '../components/Navbar';
import InputButton from '../Components_login/InputButton'; 
import axios from 'axios';

function MotDePassePage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
 
  const handleModify = () => {
    setIsEditing(true);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // backend work here ( send data to backend )

    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset form fields
    setPassword('');
    setConfirmPassword('');
  };
  const handleClick = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("currentUser"));
      console.log('currentUser:', storedUser);
      console.log('currentUser_id:', storedUser._id);
      if (password===confirmPassword){
        const response = await axios.put(`/users/${storedUser._id}/password`, { password });
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
      <Navbar label='Parametres' />
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
