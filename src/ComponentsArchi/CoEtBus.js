import React from 'react';
import "./Simulation.css";
import CO from './CO';
import BusCoToRam from './BusCoToRam';

function CoEtBus() {
    return (
        <div className='CoEtBus'>
            <CO  case1="0" case2="0"  case3="0"  case4="0" />
            <BusCoToRam/>
        </div>
   );
}

export default CoEtBus