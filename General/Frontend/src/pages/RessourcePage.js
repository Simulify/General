/***************************************************************************************/
import React from 'react';
import '../App.css';
import './Ressources.css';
import { ReactComponent as Videos } from '../Images/Videos.svg';
import { ReactComponent as Livres } from '../Images/Livres.svg';
import { ReactComponent as Sites } from '../Images/Sites.svg';
import Navbar from '../components/Navbar';
/***************************************************************************************/

function RessourcePage(props) {

    return (
        <div className='RessourcePage'>
            <Navbar label="Ressources" isAuthenticated={props.isAuthenticated} />

            <div className='ContainerRessources'>
                 {/* ---------------------------------------------------------------------------------- */}
                <div className='Videos'>
                    <Videos className='VideoIcone' />
                    <a href="/revision/ressource/videos" className='ButtonRessources'>Vidéos</a>
                </div>
                {/* ---------------------------------------------------------------------------------- */}
                <div className='Livres'>
                    <Livres className='LivresIcone' />
                    <a href="/revision/ressources/livres" className='ButtonRessources'>Livres</a>
                </div>
                {/* ---------------------------------------------------------------------------------- */}
                <div className='Sites'>
                    <Sites className='SitesIcone' />
                    <a href="/revision/ressources/sites" className='ButtonRessources'>Sites</a>
                </div>
                {/* ---------------------------------------------------------------------------------- */}
            </div>

        </div>);
};


export default RessourcePage;