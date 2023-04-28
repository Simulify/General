import React from 'react';
import '../App.css';
import './Livres.css';
import Navbar from '../components/Navbar';
import ButtonLivre from '../ComponentsRevision/ButtonLivre';

function VideoPage() {

  return(

      <div className='VideoPage'>

           <Navbar label="Videos"/>
           <div className='containerVideos'>
               <ButtonLivre label="Video 1" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
               <ButtonLivre label="Video 2" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
               <ButtonLivre label="Video 3" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>
               <ButtonLivre label="Video 4" p1="Ligne1" p2="Ligne2" p3="Ligne3"/>       
           </div>

     </div>); 
}


export default VideoPage