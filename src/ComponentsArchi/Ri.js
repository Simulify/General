import React from "react";
import "../Simulation.css";

function Ri(props) {
    return (
        <div class="Ri">
            <div className="ri">{props.case1}</div>
            <div className="ri">{props.case2}</div>
            <div className="ri">{props.case3}</div>
            <div className="ri4">{props.case4}</div>
        </div>
    );
}

export default Ri