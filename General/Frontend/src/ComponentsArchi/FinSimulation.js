import React from 'react';
import "../pages/Simulation.css";
import  Fin from '../Images/Fin.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
const initialState = () => {
    if (localStorage.getItem('removedAuthenticated') === 'true') {
        console.log(localStorage.getItem('removedAuthenticated'));
        localStorage.setItem('isAuthenticated', 'true');
    }
}
    
function FinSimulation() {
    return (
        <div className="FinSimulation">
            <h2> Fin de simulation </h2>
            <Link to="/home">
                 <img className="buttonFin" src={Fin} alt="Fin" onClick={initialState}/>
            </Link>
        </div>
   );
}


export default FinSimulation