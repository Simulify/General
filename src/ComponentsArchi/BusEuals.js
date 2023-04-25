import React from 'react';
import { useState } from 'react';
import "../Simulation.css";

function BusEuals() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(!isClicked);
    }

    return (
        <div className="BusEuals">
                <div className="triangleGauche"></div>
                <div className={`rectangle ${isClicked ? "boxShadowBlue" : ""}`}
                onClick={handleClick}></div>
        </div>
   );
}

export default BusEuals