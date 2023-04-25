import React from 'react';
import "../pages/Simulation.css";
import { useState } from "react";


function UalBusDonnees() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className="UalBusDonnees">
                <div className="triangleHaut"></div>
                <div className={`rectangle ${isClicked ? "boxShadowBlue" : "" }`}
                 onClick={handleClick}></div>
        </div>
   );
}

export default UalBusDonnees