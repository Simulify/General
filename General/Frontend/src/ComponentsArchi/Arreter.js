import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/Simulation.css";

function Arreter() {
  const [isStoping, setIsStoping] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const stopAnimation = () => {
    // Logique pour afficher le message de confirmation
    setShowConfirmation(true);
  };

  const confirmStop = () => {
    // Logique pour arrêter l'animation
    setIsStoping(true);
    setShowConfirmation(false);
  };

  const cancelStop = () => {
    // Logique pour annuler l'arrêt
    setShowConfirmation(false);
  };

  return (
    <div className='ButtonStop'>
      {showConfirmation ? (
        <div className='Message'>
          <p>Êtes-vous sûr de vouloir arrêter l'exécution ?</p>
          <div className='Confirmer'>
             <button className='annulerLink' onClick={cancelStop}>Annuler</button>
             <Link to='/code' className='confirmerButton'>Confirmer</Link>
          </div>
        </div>
      ) : (
        <button onClick={stopAnimation}>Arreter</button>
      )}
    </div>
  );
}

export default Arreter;
