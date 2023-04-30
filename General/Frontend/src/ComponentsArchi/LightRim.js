import React, { useEffect } from 'react';
import './Light.css';

function LightRim() {

  useEffect(() => {
    var box = document.querySelector('.LightRim');
    
    const moveButton = document.querySelector('.ButtonExecution');

    moveButton.addEventListener('click', () => {

      let initialPosition = box.getBoundingClientRect();
      let finalPosition = document.querySelector('.RimBusRi .rectangle ').getBoundingClientRect();
      let dy = finalPosition.top - initialPosition.top;
      let dx = 0;
      setTimeout(() => {
        box.style.transform = `translate(${dx}px, ${dy}px)`;
      }, 2500); 

      const finalPosition2 = document.querySelector('.RimBusRi .triangleGauche ').getBoundingClientRect();
      const dx2 = finalPosition2.left - initialPosition.left;
    
      setTimeout(() => {
        box.style.transform = `translate(${dx2}px, ${dy}px)`;
      }, 3500); 

      setTimeout(() => {
        document.querySelector('.Ri').classList.add("boxShadowBlue");
      }, 4500);
   
    }); 
  }, []);

  return (
    <div
      className="LightRim"/>
  );
}

export default LightRim;