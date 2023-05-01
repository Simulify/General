import React, { useEffect, useState } from 'react';
import './Light.css';

function LightRimRam() {

  useEffect(() => {

      const moveButton = document.querySelector('.ButtonExecution');

      moveButton.addEventListener('click', () => {

      const box = document.querySelector('.LightRimRam');
      const initialPosition = box.getBoundingClientRect();
      const finalPosition = document.querySelector('.BusDonnees').getBoundingClientRect();
      const dy = finalPosition.top - initialPosition.top;
      const dx = 0;

      setTimeout(() => {
        box.style.transform = `translate(${dx}px, ${dy}px)`;
      }, 6300);

      const finalPosition2 = document.querySelector('.RamBusDonnees').getBoundingClientRect();
      const dx2 = finalPosition2.left - initialPosition.left;

      setTimeout(() => {
        box.style.transform = `translate(${dx2}px, ${dy}px)`;
      }, 7300);
      
      const finalPosition3 = document.querySelector('.BusCo').getBoundingClientRect();
      const dy3 = finalPosition3.top - finalPosition2.top;

      setTimeout(() => {
        box.style.transform = `translate(${dx2}px, ${dy3}px)`;
      }, 8300);

      const finalposition4 = document.querySelector('.Ram').getBoundingClientRect();
      const dx4 = finalposition4.left - finalPosition3.left;

      setTimeout(() => {
        box.style.transform = `translate(${dx4}px, ${dy3}px)`;
      }, 9300);
    
    });
  }, []);

  return <div className="LightRimRam" />;
}

export default LightRimRam;
