import React from 'react';
import { useState } from 'react';
import "../pages/Simulation.css";

function BusUcToRi() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className='BusUcToRi'>
            <div className="triangleHaut"></div>
            <div className={`rectangle ${isClicked ? "boxShadowBlue" : ""}`}
                onClick={handleClick}></div>
            <div className="triangleBas"></div>
        </div>
   );
}

export default BusUcToRi