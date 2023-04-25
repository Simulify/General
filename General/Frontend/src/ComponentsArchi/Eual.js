import React from "react";
import { useState } from "react";
import "../pages/Simulation.css";

function Eual({case1, case2, case3, case4}) {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className={`Eual ${isClicked ? "boxShadowBlue" : ""}`}
        onClick={handleClick}>
            <div className="eual">{case1}</div>
            <div className="eual">{case2}</div>
            <div className="eual">{case3}</div>
            <div className="eualf">{case4}</div>
        </div>
    );
}

export default Eual
