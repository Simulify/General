import React from 'react';
import "../Simulation.css";

function BusCoToRam() {
    return (
        <div className='BusCoToRam'>
            <div className="BusCo"> 
                <div className="triangleHaut"></div>
                <div className="rectangle"></div>
                <div className="triangleBas"></div>
            </div>
            <div className="CoToRam"> 
                <div className="rectangle"></div>
                <div className="triangleDroit"></div>
            </div>
            <div className="RamBusDonnees">
                <div className="triangleHaut"></div> 
                <div className="rectangle"></div>
                <div className="triangleBas"></div>
            </div>
        </div>
   );
}

export default BusCoToRam