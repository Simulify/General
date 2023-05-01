import React, { useEffect, useState } from 'react';

function LightCo({destination}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {

    const moveElementVerticale = () => {

      const box = document.querySelector('.LightCo');

      const initialPosition = box.getBoundingClientRect();

      const finalPosition = document.querySelector(destination).getBoundingClientRect();
      const dy = finalPosition.top - initialPosition.top;

      setPosition({ x: 0, y: dy });

    };

    moveElementVerticale();

    // Nettoyage des ressources
    return () => {
      // Ajoutez ici le nettoyage des ressources si nécessaire
    };
  }, []);

  return (
    <div
      className="LightCo"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
}

export default LightCo;
