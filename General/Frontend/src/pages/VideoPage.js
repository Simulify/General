import React from 'react';
import '../App.css';
import './RessourcesExplication.css';
import Navbar from '../components/Navbar';
import ButtonRessource from '../ComponentsRevision/ButtonRessource';

/***************************************************************************************/
 // Définit la fonction de composant VideosPage avec les propriétés passées en paramètre
function VideosPage (props) {
return( // Retourne l'élément JSX suivant

  <div className='VideosPage'>
     <Navbar label="Vidéos"  isAuthenticated={props.isAuthenticated}/>
    <div className='containerVideos'>
       <ButtonRessource label="Introduction to Assembly Language" 
       //--------------------------------------------------------------------------------------
         p1="Cette série de vidéos sur la chaîne YouTube de Derek Banas fournit une introduction complète à l'assembleur, couvrant les concepts de base et les opérations de base." 
       //--------------------------------------------------------------------------------------
         p2="La série est conçue pour les débutants et ne nécessite aucune expérience préalable en programmation."
         lien="https://www.youtube.com/watch?v=ViNnfoE56V8" 
       />
       <ButtonRessource label="Computer Organization and Assembly Language Programming"
        p1="Cette série de vidéos sur la chaîne YouTube de Neso Academy se concentre sur l'architecture des ordinateurs et l'assembleur pour les processeurs x86."
        //--------------------------------------------------------------------------------------
        p2="Les sujets abordés incluent la mémoire, les registres, les instructions de base, les structures de contrôle de flux et l'optimisation de code."
         lien="https://www.youtube.com/watch?v=KPuhNKR2EWo" 
       />
       <ButtonRessource label="Assembly Programming Tutorial" 
         p1="Cette série de vidéos sur la chaîne YouTube de Eduonix Learning Solutions fournit une introduction pratique à l'assembleur pour les processeurs x86."
        //--------------------------------------------------------------------------------------
         p2="Les sujets abordés incluent les instructions arithmétiques et logiques, les boucles, les fonctions et l'accès à la mémoire."
         lien="https://www.youtube.com/watch?v=VQAKkuLL31g" 
       />
       <ButtonRessource label="Assembly Programming Tutorial for Beginners" 
        p1="Cette série de vidéos sur la chaîne YouTube de ProgrammingKnowledge est conçue pour les débutants qui souhaitent apprendre l'assembleur."
        //--------------------------------------------------------------------------------------
        p2="Les sujets abordés incluent les opérations arithmétiques, les opérations logiques, les boucles et les tableaux."
         lien="https://www.youtube.com/watch?v=75gBFiFtAb8" 
       />
     </div>
  </div>
 ); 
}
export default VideosPage