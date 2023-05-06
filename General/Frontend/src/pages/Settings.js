import React from 'react';
import '../App.css';
import FormSettings from "../ComponentsSettings/FormSettings";
import "./Settings.css";
import Navbar from '../components/Navbar';

function Settings() {
  return (
    <div className='Settings'>
      <Navbar label="Paramètres" />
      <FormSettings/>
    </div>
  );
};

export default Settings;
