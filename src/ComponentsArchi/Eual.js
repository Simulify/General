import React from "react";
import "../Simulation.css";

function Eual(props) {
    return (
        <div class="Eual"> 
            <div className="eual">{props.case1}</div>
            <div className="eual">{props.case2}</div>
            <div className="eual">{props.case3}</div>
            <div className="eualf">{props.case4}</div>
        </div>
    );
}

export default Eual
