import React, { useEffect } from 'react';
import './Light.css';

function LightRiUc() {

  /*Lorsqu'on clique sur le button commencer*/

  useEffect(() => {
    
    const moveButton = document.querySelector('.ButtonExecution');

    moveButton.addEventListener('click', () => {

        /*On recupère la position de Yellow Light*/

        const box = document.querySelector('.LightRiUc');

        /*On récupère la position de UcBusConnées*/

        const finalPosition = document.querySelector('.UcBusDonnees .rectangle').getBoundingClientRect();
        const initialPosition = box.getBoundingClientRect();
        
        /*On calcule la position dy*/

        const dy = finalPosition.top - initialPosition.top;
        const dx = 0;
        
        /*Yellow Light se déplace vers la nouvelle position après 1 seconde*/

        setTimeout(() => {
            box.style.transform = `translate(${dx}px, ${dy}px)`;
          }, 5000); 

        /*On ajoute Blue Shadow à l'Uc*/

        setTimeout(() => {
            document.querySelector('.Uc').classList.add("boxShadowBlue");
          }, 5300); 
      
    }); 
  }, []);

  return (
    <div
      className="LightRiUc"/>
  );
}

export default LightRiUc;