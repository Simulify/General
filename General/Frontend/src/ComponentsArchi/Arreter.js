import React from 'react';
import "../pages/Simulation.css";

function Arreter(props) {
  const { onClick } = props;

  const handleStop = () => {
    onClick();
  };

  return (
    <div className="ButtonStop" onClick={handleStop}>
      <button>Arrêter</button>
    </div>
  );
}

export default Arreter;

