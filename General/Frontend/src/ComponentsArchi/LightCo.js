import React, { useEffect, useState } from 'react';

function LightCo({destination, destination2 }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveElementHorizontale = () => {
      const box = document.querySelector('.LightCo');
      const initialPosition = box.getBoundingClientRect();
      const finalPosition = document.querySelector(destination).getBoundingClientRect();
      const dx = finalPosition.right - initialPosition.right;
      setPosition((prevPosition) => ({ ...prevPosition, x: dx }));
    };

    const moveElementVerticale = () => {
      const box = document.querySelector('.LightCo');
      const initialPosition = box.getBoundingClientRect();
      const finalPosition = document.querySelector(destination2).getBoundingClientRect();
      const dy = finalPosition.bottom - initialPosition.bottom;
      setPosition((prevPosition) => ({ ...prevPosition, y: dy }));
    };

    moveElementVerticale();

    setTimeout(() => {
       moveElementHorizontale();
    }, 1000);


    // Nettoyage des ressources
    return () => {
      // Ajoutez ici le nettoyage des ressources si nécessaire
    };
  }, [destination, destination2]);

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
