import React from 'react';
import "../pages/Simulation.css";
import CO from './CO';
import BusCoToRam from './BusCoToRam';

function CoEtBus(props) {
    return (
        <div className='CoEtBus'>
            <CO  />
            <BusCoToRam/>
        </div>
   );
}

export default CoEtBus