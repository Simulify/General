import React from "react";
import Settingsbar from "./Settingsbar";
import { ReactSVG } from "react-svg";
import navbarpic from "../Images/navbarpic.svg";
function FormSettings(props) {
  return (
    <div className="FormSettings">
      <div className="blue-rectangle">
        <ReactSVG src={navbarpic} />
        <button className="modifybutton" type="button" onClick={props.handleModify}>
          Modifier
        </button>
        {props.isEditing && (
          <div className="TwoButtons">
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
