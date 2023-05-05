import React, { useState } from 'react';
import FormSettings from './FormSettings';
import Navbar from '../components/Navbar';
import InputButton from '../Components_login/InputButton'; 

function MotDePassePage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
  };

  const handleCancel = () => {
    // Reset form fields
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='MotDePassePage'>
      <Navbar label='Parametres' />
      <FormSettings />
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
              />
            </div>
            <div className='ConfirmerMotDePasse'>
              <label htmlFor='confirmPassword'>Confirmer votre mot de passe:</label>
              <InputButton 
                type='password'
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                placeholder='Confirmer votre mot de passe'
              />
            </div>
          </div>
          <div className='TwoButtons'>
            <button className='sauvegarder' type='submit'>
              Sauvegarder
            </button>
            <button className='annuler' type='button' onClick={handleCancel}>
              Annuler
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MotDePassePage;
