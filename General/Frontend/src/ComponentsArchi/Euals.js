import React from "react";
import "../pages/Simulation.css";
import Eual from "./Eual";
function Euals(props) {
    return (
        <div className="Euals"> 
           <Eual className={props.case[4]} nom="1" case1={props.case[0]} case2={props.case[1]} case3={props.case[2]} case4={props.case[3]}/>
           <Eual nom="2" case1="0" case2="0" case3="0" case4="0"/>
        </div>
    );
}

export default Euals
