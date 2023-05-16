/***************************************************************************************/
import React from 'react';
import '../App.css';
import './RessourcesExplication.css';
import Navbar from '../components/Navbar';
import ButtonRessource from '../ComponentsRevision/ButtonRessource';
/***************************************************************************************/

function LivresPage (props) {
 return(
  <div className='LivresPage'>
     <Navbar label="Livres"  isAuthenticated={props.isAuthenticated}/>
    <div className='containerLivres'>       
       <ButtonRessource label="Assembly Language for x86 Processors" p2="By Kip R. Irvine. Published by Pearson Education, Inc." p1="Includes exercises and projects to reinforce learning" lien ="https://www.amazon.com/Assembly-Language-x86-Processors-7th/dp/0133769402"/>
       <ButtonRessource label="The Art of Assembly Language" p1="Programming for PC and Linux Computers" p2="By Randall Hyde. Published by No Starch Press"  lien ="https://www.amazon.com/Art-Assembly-Language-2nd/dp/1593272073"/>
       <ButtonRessource label="Programming from the Ground Up" p1="An Introduction to Programming Using Linux Assembly Language" p2="By Jonathan Bartlett. Published by Bartlett Publishing" p3="" lien ="https://www.amazon.com/Programming-Ground-Up-Jonathan-Bartlett/dp/0975283847"/>
       <ButtonRessource label="Computer Systems: A Programmer's Perspective" p2="By Randal E. Bryant and David R. O'Hallaron. Published by Pearson Education, Inc." p1="Includes material on Assembly Language and Computer Architecture" lien ="https://www.amazon.com/Computer-Systems-Programmers-Perspective-3rd/dp/013409266X"/>
     </div>
  </div>
 ); 
}

export default LivresPage
