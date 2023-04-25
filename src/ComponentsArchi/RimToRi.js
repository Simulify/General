import React from 'react';
import { useState } from 'react';
import "../Simulation.css";

function RimToRi() {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }
    
    return (
        <div className='RimToRi'>
                <div className="triangleHaut"></div>
                <div className={`rectangle ${isClicked ? "boxShadowBlue" : "" }`}
                 onClick={handleClick}></div>
        </div>
   );
}

export default RimToRi