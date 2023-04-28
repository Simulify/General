import React from "react";
import FormSettings from "./FormSettings";
import { useTranslation } from 'react-i18next';
import { ReactSVG } from "react-svg";
import "./LanguePage.css";
import france from "../Images/france.svg";
import unitedStates from "../Images/united-states-of-america.svg";
import Navbar from "../components/Navbar";


function LanguePage() {
    const { i18n } = useTranslation();

    const handleLanguageChange = (newLanguage) => {
        i18n.changeLanguage(newLanguage);
    };

    return (
        <div className=" LanguePage ">

            <FormSettings />
            <div className="LangueForm">
                <h3>Selectionner votre langue :</h3>
                <div className="LangueContainer">
                    <button onClick={() => handleLanguageChange('en')}>
                        <ReactSVG src={unitedStates} className="unitedStates" />
                        English
                    </button>
                    <button onClick={() => handleLanguageChange('fr')}>
                        <ReactSVG src={france} className="france" />
                        French
                    </button>
                </div>
            </div>



            <Navbar label='Parametres'/>
            <FormSettings/>
            
        </div>
    );
}

export default LanguePage;

