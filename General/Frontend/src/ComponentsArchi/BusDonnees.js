import React, { useState } from "react";
import "../pages/Simulation.css";

function BusDonnees() {

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  }

  return (
    <div className={`BusDonnees ${isClicked ? "boxShadowBlue" : ""}`}
      onClick={handleClick}>
      Bus de données 
      
    </div>
  );
}

export default BusDonnees