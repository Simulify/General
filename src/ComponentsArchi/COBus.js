import React from 'react';
import "../Simulation.css";
import CO from './CO';
import BusCo from './BusCo';
import CoToRam from './CoToRam';
import RamBusAdr from './RamBusAdr';

function COBus() {
    return (
        <div className='COBus'>
            <CO case1="0" case2="0" case3="0" case4="0"/>
            <BusCo/>
            <CoToRam/>
            <RamBusAdr/>
            
        </div>
   );
}

export default COBus