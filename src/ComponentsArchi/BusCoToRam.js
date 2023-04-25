import React, { useState } from 'react';
import "./Simulation.css";

function BusCoToRam() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className="BusCoToRam">
            <div className={`BusCo ${isClicked ? "boxShadowBlue" : ""}`}
                onClick={handleClick}>
                <div className="triangleHaut"></div>
                <div className="rectangle"></div>
                <div className="triangleBas"></div>
            </div>
            <div className={`CoToRam ${isClicked ? "boxShadowBlue" : ""}`}
                onClick={handleClick}>
                <div className="rectangle"></div>
                <div className="triangleDroit"></div>
            </div>
            <div className={`RamBusDonnees ${isClicked ? "boxShadowBlue" : ""}`}
                onClick={handleClick}>
                <div className="triangleHaut"></div> 
                <div className="rectangle"></div>
                <div className="triangleBas"></div>
            </div>
        </div>
   );
}

export default BusCoToRam