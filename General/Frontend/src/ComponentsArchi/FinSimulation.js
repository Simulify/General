import React from 'react';
import "../pages/Simulation.css";
import  Fin from '../Images/Fin.svg';
import { Link } from 'react-router-dom';


function FinSimulation() {
    return (
        <div className="FinSimulation">
            <h2> Fin de simulation </h2>
            <Link to="/home">
                 <img className="buttonFin" src={Fin} alt="Fin" />
            </Link>
        </div>
   );
}


export default FinSimulation