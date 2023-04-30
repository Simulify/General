import React, { useEffect } from 'react';
import './Light.css';

function LightRim() {

  useEffect(() => {
    var box = document.querySelector('.LightRim');
    
    const moveButton = document.querySelector('.ButtonExecution');

    moveButton.addEventListener('click', () => {

      const initialPosition = box.getBoundingClientRect();
      const finalPosition = document.querySelector('.RimBusRi .rectangle ').getBoundingClientRect();
      const dy = finalPosition.top - initialPosition.top;
      const dx = 0;
      setTimeout(() => {
        box.style.transform = `translate(${dx}px, ${dy}px)`;
      }, 5000); 

      const finalPosition2 = document.querySelector('.RimBusRi .triangleGauche ').getBoundingClientRect();
      const dy2 = dy;
      const dx2 = finalPosition2.left - initialPosition.left;
    
      setTimeout(() => {
        box.style.transform = `translate(${dx2}px, ${dy2}px)`;
      }, 6000); 

      setTimeout(() => {
        document.querySelector('.Ri').classList.add("boxShadowBlue");
        box.classList.add(".LightRemove");
      }, 7000); 




   
    }); 
  }, []);

  return (
    <div
      className="LightRim"/>
  );
}

export default LightRim;