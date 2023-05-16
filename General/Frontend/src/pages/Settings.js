/***************************************************************************************/
import React from 'react';
import '../App.css';
import FormSettings from "../ComponentsSettings/FormSettings";
import "./Settings.css";
import Navbar from '../components/Navbar';
/***************************************************************************************/
// la page des parametres
function Settings(props) {
  return (
    <div className='Settings'  >
      <Navbar label="Paramètres" isAuthenticated={props.isAuthenticated} /> 
      <FormSettings/>
    </div>
  );
};

export default Settings;
