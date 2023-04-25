import React from 'react';
import { useState } from 'react';
import "../pages/Simulation.css";

function RimBusRi() {

    const [isClicked, setIsClicked] = useState(false)

    const handleClick = () =>{
        setIsClicked(!isClicked)
    }

    return (
        <div className='RimBusRi'>
                <div className="triangleGauche"></div>
                <div className={`rectangle ${isClicked ? "boxShadowBlue" : ""}`}
                onClick={handleClick}></div>     
        </div>
   );
}

export default RimBusRi