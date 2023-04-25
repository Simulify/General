import React from 'react';
import '../App.css';
import Form from "../ComponentsSettings/Form";
import "./Settings.css";

import MotDePassePage from '../ComponentsSettings/MotDePassePage';

import Navbar from '../components/Navbar';
import "../ComponentsSettings/MotDePassePage.css" ; 



function Settings() {

  return (
    
      <div className='Settings'>

      
        <Navbar label ="Paramètres"/>
        <Form/>
        <MotDePassePage/>
        
        

       


      </div>
      
  );
};



export default Settings;