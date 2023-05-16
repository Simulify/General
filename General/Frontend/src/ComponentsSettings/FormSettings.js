import React from "react";
import Settingsbar from "./Settingsbar";
import { ReactSVG } from "react-svg";
import navbarpic from "../Images/navbarpic.svg";
//------------------------------------------------------------------------------------
function FormSettings(props) {
  return (
    <div className="FormSettings">
      <div className="blue-rectangle">
        <ReactSVG src={navbarpic} />
        {/* le boutton modifeir  */}
        <button className="modifybutton" type="button" onClick={props.handleModify}>
          Modifier
        </button>
        {/* l'utilisateur ne peut pas modifier s'il ne clique pas sur le boutton modifier  */}
        {props.isEditing && (
          <div className="TwoButtons">
            {/* le boutton suavegarder  */}
            <button className="sauvegarder" type="submit">
              Sauvegarder
            </button>
            <button className="annuler" type="button" onClick={props.handleCancel}>
              Annuler
            </button>
          </div>
        )}
      </div>
      <Settingsbar />
    </div>
  );
}


export default FormSettings;
