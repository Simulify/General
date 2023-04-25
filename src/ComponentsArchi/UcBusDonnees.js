import React from 'react';
import { useState } from 'react';
import "../pages/Simulation.css";

function UcBusDonnees() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className="UcBusDonnees">
                <div className="triangleHaut"></div>
                <div className={`rectangle ${isClicked ? "boxShadowBlue" : ""}`}
                onClick={handleClick}></div>
        </div>
   );
}

export default UcBusDonnees