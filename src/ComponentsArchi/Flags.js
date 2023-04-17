import React from "react";
import "../Simulation.css";

function Flags(props) {
    return (
        <div class="Flags"> 
            <div className="ram">{props.case1}</div>
            <div className="ram">{props.case2}</div>
            <div className="ram">{props.case3}</div>
            <div className="ramf">{props.case4}</div>
        </div>
    );
}

export default Flags
