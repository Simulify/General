import React from 'react';
import '../App.css';
import FormSettings from "../ComponentsSettings/FormSettings";
import "./Settings.css";

import MotDePassePage from '../ComponentsSettings/MotDePassePage';

import Navbar from '../components/Navbar';
import "../ComponentsSettings/MotDePassePage.css" ; 



function Settings() {

  return (
    
      <div className='Settings'>

      
        <Navbar label ="Paramètres"/>
        <FormSettings/>
        

        <a href="/Settings/MotDePassePage" className="mdp">Mot De Passe </a>
        
        

       


      </div>
      
  );
};



export default Settings;