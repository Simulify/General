import React, { useState } from 'react';
import "../pages/Simulation.css";

function BusCoToRam() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className="BusCoToRam">
            <div className="BusCo" >
                <div className="triangleHaut"></div>
                <div className={`rectangle ${isClicked ? "boxShadowBlue" : ""}`}
                onClick={handleClick}></div>
                <div className="triangleBas"></div>
            </div>
            <div className="CoToRam">
                <div className={`rectangle ${isClicked ? "boxShadowBlue" : ""}`}
                onClick={handleClick}></div>
                <div className="triangleDroit"></div>
            </div>
            <div className="RamBusDonnees">
                <div className="triangleHaut"></div> 
                <div className={`rectangle ${isClicked ? "boxShadowBlue" : ""}`}
                onClick={handleClick}></div>
                <div className="triangleBas"></div>
            </div>
        </div>
   );
}

export default BusCoToRam