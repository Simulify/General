
import React, { useState, useEffect } from "react";
import FormSettings from "./FormSettings";
import Navbar from "../components/Navbar";
import { ReactSVG } from "react-svg";
import Moon from "../Images/Moon.svg";
import Sun from "../Images/Sun.svg";


const ModePage = () => {
    const [formValue, setFormValue] = useState("");

    const handleSave = (event) => {
        event.preventDefault();
        console.log("Form value saved:", formValue);
    };

    const handleCancel = () => {
        setFormValue("");
    };

    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    const setLightTheme = () => {
        setDarkMode(false);
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    };

    const setDarkTheme = () => {
        setDarkMode(true);
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkTheme();
        } else {
            setLightTheme();
        }
    }, []);

    return (
        <div className="ModePage">
            <Navbar label="Parametres" />
            <FormSettings />
            <div className="ModeForm">
                <label className="ModeLabel">Selectionner un mode  :</label>
                <div className="ModeContainer">

                    <div className="Inputs">
                        <div className={`theme-switch ${darkMode ? 'dark' : 'light'}`}>
                            <button className="LightButton " onClick={setLightTheme}>
                            <ReactSVG src={Sun} className="Sun" />
                            <span className="LightModeLabel">Light Mode </span>
                            </button>


                            <button className="DarkButton " onClick={setDarkTheme}>
                            <ReactSVG src={Moon} className="Moon" />
                            <span className="DarkModeLabel">Dark Mode </span>
                            </button>

                        </div>
                    </div>
                    <div className='TwoButtons'>
                        <button className='sauvegarder' type='submit' onClick={handleSave}>
                            Sauvegarder
                        </button>
                        <button className='annuler' type='button' onClick={handleCancel}>
                            Annuler
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ModePage;
