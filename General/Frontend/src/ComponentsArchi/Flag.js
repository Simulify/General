import React from "react";
import { useState } from "react";
import "../pages/Simulation.css";
import FlagBusDonnees from "./FlagBusDonnees";

function Flag(props) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }
    
    return (
        <div className="Flag"> 
        <FlagBusDonnees/>
        <div className="NomFlag">Flag</div>
        <div className={`FLAG ${isClicked ? "boxShadowBlue" : ""}`}
        onClick={handleClick}>

            <div className="ram">{props.Flags[0]}</div>
            <div className="ram">{props.Flags[1]}</div>
            <div className="ram">{props.Flags[2]}</div>
            <div className="ramf">{props.Flags[3]}</div>

        </div>
        </div>
    );
}

export default Flag
