import React from 'react';
import "../Simulation.css";
import RegBus from './RegBus.js';
import RegEtNom from './RegEtNom';

function RegistresEtBus() {
    return (
        <div className='RegistresEtBus'>
            <RegEtNom/>
            <RegBus/>
        </div>
    );
}

export default RegistresEtBus