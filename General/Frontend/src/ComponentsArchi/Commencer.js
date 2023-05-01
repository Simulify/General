import React, { useState} from 'react';
import "../pages/Simulation.css";

function Commencer() {

    const [isRunning, setIsRunning] = useState(false);
  
    const startAnimation = () => {
      // Logique pour démarrer l'animation
      setIsRunning(true);
    };
  
    const pauseAnimation = () => {
      // Logique pour mettre en pause l'animation
      setIsRunning(false);
    };
  
    return (
      <div className='ButtonExecution'>
        {isRunning ? (
          <button onClick={pauseAnimation}>Suspendre</button>
        ) : (
          <button onClick={startAnimation}>Exécuter</button>
        )}
      </div>
    );
  }

  export default Commencer;
  