import React from "react";
import Settingsbar from "./Settingsbar";
import { ReactSVG } from "react-svg";
import Userpic from "../Images/Userpic.svg";
function FormSettings() {
    return (
        <div className=" FormSettings ">
          <div className="blue-rectangle">
          <ReactSVG src={Userpic}/>
          <button className="modifybutton">Modifier</button>
          </div>  
          <Settingsbar />
        </div>

    );

}
export default FormSettings;

