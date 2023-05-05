import React from 'react';
import './Simulation.css';
import ACCUal from '../ComponentsArchi/LightACCUal';
import Container from '../ComponentsArchi/Container';

function Simulation (props) {
   
  function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('.avtive');
  }
  return (
  
    <div className='Simulation' id='blur'>
      {props.elements.map((element) => (
          <div>
          {element}
          </div>))}
      <Container case1={props.case1} case2={props.case2} memoire={props.memoire} Co={props.Co} Ram={props.Ram} Rim={props.Rim} RI={props.RI}/>
    </div>
  );
};



export default Simulation;
