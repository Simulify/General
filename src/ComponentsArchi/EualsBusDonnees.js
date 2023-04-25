import React from 'react';
import "../pages/Simulation.css";
import { useState } from "react";


function EualsBusDonnees() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className="EualsBusDonnees">
                <div className="triangleHaut"></div>
                <div className={`rectangle ${isClicked ? "boxShadowBlue" : ""}`}
                onClick={handleClick}></div>
        </div>
   );
}

export default EualsBusDonnees