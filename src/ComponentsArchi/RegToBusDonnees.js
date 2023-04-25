import React from 'react';
import { useState } from 'react';
import "../Simulation.css";

function RegToBusDonnees() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className="RegToBusDonnees">
                <div className="triangleHaut"></div>
                <div className={`rectangle ${isClicked ? "boxShadowBlue" : ""}`}
                 onClick={handleClick}></div>
                <div className="triangleBas"></div>
        </div>
   );
}

export default RegToBusDonnees