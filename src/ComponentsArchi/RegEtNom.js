import React from 'react';
import "../Simulation.css";
import Registres from './Registres';
import NomReg from './NomReg';

function RegEtNom() {
    return (
        <div className='RegEtNom'>
            <NomReg/>
            <Registres/>
        </div>
    );
}

export default RegEtNom