import React from 'react';
import '../App.css';
import FormSettings from "../ComponentsSettings/FormSettings";
import "./Settings.css";
import Navbar from '../components/Navbar';
import "../ComponentsSettings/MotDePassePage.css";
function Settings() {

  return (
    <div className='Settings'>
      <Navbar label="Paramètres" />
      <FormSettings/>
    </div>

  );
};



export default Settings;