/***************************************************************************************/
import React from 'react';
import '../App.css';
import './RessourcesExplication.css';
import Navbar from '../components/Navbar';
import ButtonRessource from '../ComponentsRevision/ButtonRessource';
/***************************************************************************************/

function SitesPage(props) {
  return (
    <div className='SitesPage'>
      <Navbar label='Sites' isAuthenticated={props.isAuthenticated} />
      <div className='containerSites'>
        <ButtonRessource
          label="Cours de l'ESI"
          p1='Le Tresor ESI'
          p2=" Il propose des cours, des TD, des EMD et des résumés sur les différents modules enseignés dans l'ESI, y compris le module Sys2."
          lien='https://tresor.cse.club/'
        />
        {/*------------------------------------------------------------------------------------------------------*/}
        <ButtonRessource
          label='x86 Assembly Language Reference Manual'
          p1='On Intel website'
          p2='Detailed documentation on x86 assembly language. Includes information on instruction set, registers, and more'
          lien='https://www.felixcloutier.com/x86/'
        />
        {/*------------------------------------------------------------------------------------------------------*/}
        <ButtonRessource
          label='Assembly Language Programming Resources'
          p1='On NASM (Netwide Assembler) website'
          p2='Includes a wide range of resources for learning assembly language programming. Includes documentation, tutorials, and more'
          lien='https://www.nasm.us/resources/'
        />
        {/*------------------------------------------------------------------------------------------------------*/}
        <ButtonRessource
          label='Introduction to Assembly Language'
          p1='On Tutorials Point website'
          p2='Provides an introduction to assembly language programming. Includes examples and exercises to practice'
          lien='https://www.tutorialspoint.com/assembly_programming/assembly_introduction.htm'
        />
        {/*------------------------------------------------------------------------------------------------------*/}
      </div>
    </div>
  );
}

export default SitesPage;
