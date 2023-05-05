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
      <Container case1={props.case1} case2={props.case2} memoire={props.memoire} Co={props.Co} Ram={props.Ram} Rim={props.Rim} RI={props.RI}/>
    </div>
  );
};



export default Simulation;
