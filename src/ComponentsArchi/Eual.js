import React from "react";
import "../Simulation.css";

function Eual({case1, case2, case3, case4}) {
    return (
        <div class="Eual"> 
            <div className="eual">{case1}</div>
            <div className="eual">{case2}</div>
            <div className="eual">{case3}</div>
            <div className="eualf">{case4}</div>
        </div>
    );
}

export default Eual
