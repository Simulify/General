import React, { useState, useEffect } from "react";
import FormSettings from "./FormSettings";
import Navbar from "../components/Navbar";
import { ReactSVG } from "react-svg";
import Moon from "../Images/Moon.svg";
import Sun from "../Images/Sun.svg";

//la page du mode 
const ModePage = (props) => {
    const [formValue, setFormValue] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [modeDisabled, setModeDisabled] = useState(true);

    const handleModify = () => {
        setIsEditing(true);// Active le mode modification
        setModeDisabled(false);// Active le mode
    };

    const handleSave = (event) => {
        event.preventDefault();
        console.log("Form value saved:", formValue);// Affiche la valeur du formulaire sauvegardée
        setIsEditing(false);// Désactive le mode modification
        setModeDisabled(true);// Désactive le mode
    };

    const handleCancel = () => {
        setFormValue("");// Réinitialise la valeur du formulaire
        setIsEditing(false); // Désactive le mode modification
        setModeDisabled(true);// Désactive le mode
    };

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    const setLightTheme = () => {
        setDarkMode(false);// Active le mode clair
        localStorage.setItem("theme", "light");// Stocke le thème dans le stockage local
        document.documentElement.setAttribute("data-theme", "light"); // Définit le thème clair sur l'élément racine 
    };

    const setDarkTheme = () => {
        setDarkMode(true);// Active le mode sombre
        localStorage.setItem("theme", "dark");// Stocke le thème dans le stockage local
        document.documentElement.setAttribute("data-theme", "dark");// Définit le thème sombre sur l'élément racine du DOM
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkTheme();// Applique le thème sombre s'il est enregistré dans le stockage local
        } else {
            setLightTheme(); // Applique le thème clair par défaut
        }
    }, []);

    return (
        <div className="ModePage">
            <Navbar label="Parametres"  isAuthenticated={props.isAuthenticated}/>
            <FormSettings handleModify={handleModify} handleSave={handleSave} handleCancel={handleCancel} isEditing={isEditing} />
            <div className="ModeForm">
                <label className="ModeLabel">Selectionner un mode  :</label>
                <div className="ModeContainer">

                    <div className="Inputs">
                        <div className={`theme-switch ${darkMode ? 'dark' : 'light'}`}>
                            <button 
                            className="LightButton " 
                            onClick={setLightTheme}
                            disabled={modeDisabled} >
                            <ReactSVG src={Sun} className="Sun" />
                            <span className="LightModeLabel">Light Mode </span>
                            </button>


                            <button className="DarkButton " 
                            onClick={setDarkTheme}
                            disabled={modeDisabled} >
                            <ReactSVG src={Moon} className="Moon" />
                            <span className="DarkModeLabel">Dark Mode </span>
                            </button>

                        </div>
                    </div>
                    {isEditing && (
                        <div className="TwoButtons">
                            <button className="sauvegarder" type="submit" onClick={handleSave}>
                                Sauvegarder
                            </button>
                            <button className="annuler" type="button" onClick={handleCancel}>
                                Annuler
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
};

export default ModePage;
