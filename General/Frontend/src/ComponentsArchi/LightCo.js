import React, { useEffect } from 'react';
import './Light.css';

function LightCo() {

  useEffect(() => {
    var box = document.querySelector('.LightCo');
    
    const moveButton = document.querySelector('.ButtonExecution');

    moveButton.addEventListener('click', () => {

      const initialPosition = box.getBoundingClientRect();
      const finalPosition = document.querySelector('.CO .C3').getBoundingClientRect();
      const dx = finalPosition.left - initialPosition.left;
      const dy = 0;
      box.style.transform = `translate(${dx}px, ${dy}px)`;

    /***********************************************/
      const dx2 = dx;
      const dy2 = finalPosition.top - initialPosition.top;
    
      setTimeout(() => {
        box.style.transform = `translate(${dx2}px, ${dy2}px)`;
      }, 1000); 

    /***********************************************/
      const dx3 = dx2;
      const initialPosition2=box.getBoundingClientRect();
      const finalPosition2 = document.querySelector('.CoToRam').getBoundingClientRect();
      const dy3= finalPosition2.top - initialPosition2.top;

      setTimeout(() => {
        box.style.transform = `translate(${dx3}px, ${dy3}px)`;
      }, 1500); 

    /**********************************************/
      const dy4 = dy3;
      const initialPosition3 = box.getBoundingClientRect();
      const finalPosition3 = document.querySelector('.RAM').getBoundingClientRect();
      const dx4 = finalPosition3.left - initialPosition3.left;

      setTimeout(() => {
        box.style.transform = `translate(${dx4}px, ${dy4}px)`;
      }, 2500); 

      setTimeout(() => {
        document.querySelector('.RAM').classList.add("boxShadowBlue");
      }, 3500); 

    /*********************************************/

    }); 
  }, []);

  return (
    <div
      className="LightCo"/>
  );
}

export default LightCo;