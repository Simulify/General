import React from "react";
import "../Simulation.css";

function Flag({case1, case2, case3, case4}) {
    return (
        <div class="Flag"> 
        <div className="NomFlag">Flag</div>
        <div className="FLAG"> 
            <div className="ram">{case1}</div>
            <div className="ram">{case2}</div>
            <div className="ram">{case3}</div>
            <div className="ramf">{case4}</div>
        </div>
        </div>
    );
}

export default Flag
