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

            <div className="ram">{props.Con[0]}</div>
            <div className="ram">{props.Con[1]}</div>
            <div className="ram">{props.Con[2]}</div>
            <div className="ramf">{props.Con[3]}</div>

        </div>
        </div>
    );
}

export default Flag
