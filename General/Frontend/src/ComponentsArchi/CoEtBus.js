import React from 'react';
import "../pages/Simulation.css";
import CO from './CO';
import BusCoToRam from './BusCoToRam';

function CoEtBus() {
    
    return (
        <div className='CoEtBus'>
            <CO  case1="1" case2="0"  case3="2"  case4="0" />
            <BusCoToRam/>
        </div>
   );
}

export default CoEtBus