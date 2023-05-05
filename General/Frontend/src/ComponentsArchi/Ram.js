import React from "react";
import { useState } from "react";
import "../pages/Simulation.css";

function Ram(props) {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className="Ram">
    <div className="NomRam">Ram</div>
    <div className={`RAM ${isClicked ? "boxShadowBlue" : ""}`}>
          <div className="ram1">{props.Ram[0]}</div>
          <div className="ram2">{props.Ram[1]}</div>
          <div className="ram3">{props.Ram[2]}</div>
          <div className="ram4">{props.Ram[3]}</div>
      </div>   
    </div>
  );
}

export default Ram