import React, { useEffect } from 'react';
import './Light.css';

function LightRiUc() {

  useEffect(() => {
    var box = document.querySelector('.LightRiUc');
    
    const moveButton = document.querySelector('.ButtonExecution');

    moveButton.addEventListener('click', () => {

        const box = document.querySelector('.LightRiUc');
        const finalPosition = document.querySelector('.UcBusDonnees .rectangle').getBoundingClientRect();
        const initialPosition = box.getBoundingClientRect();
        const dy = finalPosition.top - initialPosition.top;
        const dx = 0;
        setTimeout(() => {
            box.style.transform = `translate(${dx}px, ${dy}px)`;
          }, 5000); 

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