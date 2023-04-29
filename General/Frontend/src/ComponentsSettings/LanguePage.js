import React, { useState } from 'react';
import FormSettings from "./FormSettings";
import { useTranslation } from 'react-i18next';
import { ReactSVG } from "react-svg";
import france from "../Images/france.svg";
import unitedStates from "../Images/united-states-of-america.svg";
import Navbar from "../components/Navbar";

function LanguePage() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        // update state when the language is changed
        i18n.changeLanguage(newLanguage);
    };

    const SAVE_BUTTON_LABEL = 'Sauvegarder';
    const CANCEL_BUTTON_LABEL = 'Annuler';

    const handleCancel = () => {
        i18n.changeLanguage(language);
        // reset language to the previous selection ( le boutton annuler )
    }

    return (
        <div className=" LanguePage ">
            <Navbar label='Parametres' />
            <FormSettings />
            <div className="LangueForm">
                <label className="LangueLabel">Selectionner votre langue :</label>
                <div className="LangueContainer">
                    <div className="Inputs">
                        
                        <button className='UsaButton' onClick={() => handleLanguageChange('en')}>
                            <ReactSVG src={unitedStates} className="unitedStates" />
                            <span className="EnglishLabel">English</span>
                        </button>

                        <button className='FranceButton' onClick={() => handleLanguageChange('fr')}>
                            <ReactSVG src={france} className="france" />
                            <span className="FrenchLabel">Français</span>
                        </button>
                    </div>

                    <div className='TwoButtons'>
                        <button className='sauvegarder' type='submit'>
                            {SAVE_BUTTON_LABEL}
                        </button>
                        <button className='annuler' type='button' onClick={handleCancel}>
                            {CANCEL_BUTTON_LABEL}
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default LanguePage;
