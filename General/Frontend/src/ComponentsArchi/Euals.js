import React from "react";
import "../pages/Simulation.css";
import Eual from "./Eual";
function Euals(props) {
    return (
        <div className="Euals"> 
           <Eual nom="1" case={props.case1}/>
           <Eual nom="2" case={props.case2}/>
        </div>
    );
}

export default Euals
