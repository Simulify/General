import React, { useEffect } from 'react';
import './Light.css';
import '../pages/Simulation.css'

function LightCo() {

  useEffect(() => {
    var box = document.querySelector('.LightCo');
    
    const moveButton = document.querySelector('.ButtonExecution');

    moveButton.addEventListener('click', () => {

      document.querySelector('.Co').classList.add("boxShadowBlue");
      document.querySelector('.BusCo .rectangle').classList.add(".RegColor");
      
      const initialPosition = box.getBoundingClientRect();
      const finalPosition = document.querySelector('.CoToRam').getBoundingClientRect();
      const dx = 0;
      const dy = finalPosition.top - initialPosition.top;
      box.style.transform = `translate(${dx}px, ${dy}px)`;

    /**********************************************/
      const dy2 = dy;
      const finalPosition2 = document.querySelector('.Ram').getBoundingClientRect();
      const dx2 = finalPosition2.left - initialPosition.left;

      setTimeout(() => {
        box.style.transform = `translate(${dx2}px, ${dy2}px)`;
      }, 1000); 

      setTimeout(() => {
        document.querySelector('.RAM').classList.add("boxShadowBlue");
      }, 2000); 

    /*********************************************/

      // function ComponentA(props) {
      //   return <div>{props.value}</div>;
      // }
    

    }); 
  }, []);

  return (
    <div
      className="LightCo"/>
  );
}

export default LightCo;