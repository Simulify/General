import React from 'react';
import { useEffect } from 'react';
import Container from '../ComponentsArchi/Container';

function Simulation (props) {
 
 
  function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('.avtive');
  }
  return (
  

    <div className='Simulation' id='blur'>
     
      <Container case1={props.case1} case2={props.case2} memoire={props.memoire} Co={props.Co} Ram={props.Ram} Rim={props.Rim} RI={props.RI}
        ACC={props.ACC} SI={props.SI} DI={props.DI} BX={props.BX} Flags={props.Flags} CX={props.CX} Pile={props.Pile} 
      />
    </div>
  );
};



export default Simulation;