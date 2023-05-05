import React from "react";
import { useState } from "react";
import "../pages/Simulation.css";

function Eual(props) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div id={`Eual${props.nom}`} className={`Eual ${isClicked ? "boxShadowBlue" : ""}`}
        onClick={handleClick}>
            <div className="eual">{props.case[0]}</div>
            <div id={`eual2`} className="eual">{props.case[1]}</div>
            <div className="eual">{props.case[2]}</div>
            <div className="eualf">{props.case[3]}</div>
        </div>
    );
}

export default Eual
