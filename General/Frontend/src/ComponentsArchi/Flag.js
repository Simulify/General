import React from "react";
import { useState } from "react";
import "../pages/Simulation.css";
import FlagBusDonnees from "./FlagBusDonnees";

function Flag({className, case1, case2, case3, case4}) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }
    
    return (
        <div className="Flag"> 
        <FlagBusDonnees/>
        <div className="NomFlag">Flag</div>
        <div id="Flag" className={className=`FLAG ${isClicked ? "boxShadowBlue" : ""}`}
        onClick={handleClick}>
            <div id={`flag${case1}`} className="ram">{case1}</div>
            <div id={`flag${case2}`} className="ram">{case2}</div>
            <div id={`flag${case3}`} className="ram">{case3}</div>
            <div id={`flag${case4}`} className="ramf">{case4}</div>
        </div>
        </div>
    );
}

export default Flag
