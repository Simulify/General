
import React from "react";
import Settingsbar from "./Settingsbar";
import { ReactSVG } from "react-svg";
import navbarpic from "../Images/navbarpic.svg";
function FormSettings() {
    return (
        <div className=" FormSettings ">
          <div className="blue-rectangle">
               <ReactSVG src={navbarpic}/>
               <button className="modifybutton">Modifier</button>
          </div>  
          <Settingsbar />
        </div>

    );

}
export default FormSettings;

