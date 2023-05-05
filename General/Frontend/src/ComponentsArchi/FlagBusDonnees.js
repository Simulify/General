import React from 'react';
import { useState } from 'react';
import "../pages/Simulation.css";

function FlagBusDonnees() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className='FlagBusDonnees'>
            <div className={`rectangle ${isClicked ? "boxShadowBlue" : ""}`}
                onClick={handleClick}></div>
        </div>
   );
}

export default FlagBusDonnees