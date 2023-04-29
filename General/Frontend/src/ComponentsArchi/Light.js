import React, { useEffect } from 'react';
import './Light.css';
import ReactDOM from "react-dom";
import CO from "./CO";
function Light() {
  useEffect(() => {
    var box = document.querySelector('.Light');
    // let move_horizontale = function(target) {
    //   const final_pos = target.getBoundingClientRect();
    //   const initial_pos = box.getBoundingClientRect();
    //   const dx = final_pos.left - initial_pos.left;
    //   box.style.transform = `translateX(${dx}px)`;
    //   console.log('a linterieur de la fonction move horizontale '+ box.getBoundingClientRect())
    // }
    
    // let move_verticalle = function(target) {
    //   const final_pos = target.getBoundingClientRect();
    //   const initial_pos = box.getBoundingClientRect();
    //   const dy = final_pos.top - initial_pos.top;
    //   box.style.transform = `translateY(${dy}px)`;
    // }
    
    const moveButton = document.querySelector('.ButtonExecution');

    moveButton.addEventListener('click', () => {
      const initialPosition = box.getBoundingClientRect();
      const finalPosition = document.querySelector('.CO .C3').getBoundingClientRect();
    
      const dx = finalPosition.left - initialPosition.left;
      const dy = 0;
      box.style.transform = `translate(${dx}px, ${dy}px)`;
    
      const dx2 = dx;
      const dy2 = finalPosition.top - initialPosition.top;
      //  move_horizontale(document.querySelector('.CO .C3'));
      
      // console.log(box.getBoundingClientRect());
      // setTimeout(() => {
      //    move_verticalle(document.querySelector('.CO .C3'));
      //   }, 2000); 
      //   console.log(box.getBoundingClientRect());

      //   Wait for 1 second before moving vertically
    
      setTimeout(() => {
        box.style.transform = `translate(${dx2}px, ${dy2}px)`;
      }, 1000); // Wait for 1 second before moving vertically

      const dx3 = dx2;
      const initialPosition2=box.getBoundingClientRect();
      const finalPosition2 = document.querySelector('.CoToRam').getBoundingClientRect();
      const dy3= finalPosition2.top - initialPosition2.top;

      setTimeout(() => {
        box.style.transform = `translate(${dx3}px, ${dy3}px)`;
      }, 3000); // Wait for 1 second before moving vertically
      // finalPosition2.classList.add('boxShadowBlue');
      const dy4 = dy3;
      const initialPosition3 = box.getBoundingClientRect();
      const finalPosition3 = document.querySelector('.RAM').getBoundingClientRect();
      const dx4 = finalPosition3.left - initialPosition3.left;
// Define the props you want to pass to the CO component


// Render the CO component in the specified container element
      setTimeout(() => {
        box.style.transform = `translate(${dx4}px, ${dy4}px)`;
      }, 5000); // Wait for 1 second before moving vertically

      setTimeout(() => {
        document.querySelector('.RAM').classList.add("boxShadowBlue");
      }, 6000); 
      function ComponentA(props) {
        // Utilisation des props normalement dans ComponentA
        return <div>{props.value}</div>;
      }
      
function ComponentB(props) {
  // Rendu de ComponentA en transmettant les props de ComponentB
  return <ComponentA value={props.value} />;
}
      

    }); 
  }, []);

  return (
    <div
      className="Light"/>
  );
}

export default Light;