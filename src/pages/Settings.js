import React from 'react';
import '../App.css';
import Form from "../ComponentsSettings/Form";
import "./Settings.css";
import Settingsbar from '../ComponentsSettings/Settingsbar';
import ProfilePage from '../ComponentsSettings/ProfilePage';
import ModePage from '../ComponentsSettings/ModePage';
import MotDePassePage from '../ComponentsSettings/MotDePassePage';
import LanguePage from '../ComponentsSettings/LanguePage';
import Navbar from '../components/Navbar';
import "../ComponentsSettings/MotDePassePage.css" ; 



function Settings() {

  return (
    
      <div className='Settings'>

       <h1>Paramètres </h1>
        <Navbar />
        <Form/>
        <MotDePassePage/>
        
        

       


      </div>
      
  );
};



export default Settings;