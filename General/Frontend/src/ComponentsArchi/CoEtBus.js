import React from 'react';
import "../pages/Simulation.css";
import CO from './CO';
import BusCoToRam from './BusCoToRam';

function CoEtBus(props) {
    return (
        <div className='CoEtBus'>
            <CO className={props.case[4]} case1={props.case[0]} case2={props.case[1]}  case3={props.case[2]}  case4={props.case[3]} />
            <BusCoToRam/>
        </div>
   );
}

export default CoEtBus