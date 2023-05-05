import React from 'react';
import './Simulation.css';
import ABCD from '../ComponentsArchi/ACCtoBD';
import Container from '../ComponentsArchi/Container';

function Simulation(props) {
  return (
    <div className='Simulation'>
      {props.elements.map((element, index) => (
        <div key={index}>
          {element}
        </div>
      ))}
      <Container case={props.case} />
    </div>
  );
}

export default Simulation;
