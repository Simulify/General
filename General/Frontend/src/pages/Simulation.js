import React from 'react';
import './Simulation.css';
import ABCD from '../ComponentsArchi/ACCtoBD';
import Container from '../ComponentsArchi/Container';

function Simulation (props) {

  return (
  
    <div className='Simulation'>
      {props.elements.map((element) => (
          <div>
          {element}
          </div>))}
      <Container case={props.case} memoire={props.memoire} Co={props.Co}/>
    </div>
  );
};



export default Simulation;