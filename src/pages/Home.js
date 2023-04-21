import React from 'react';
import './Home.css';
import { ReactComponent as CircleDark} from '../Images/Ellipse 6.svg';
import { ReactComponent as CircleClair} from '../Images/Ellipse 7.svg';
import { ReactComponent as Processor} from '../Images/Group 9.svg';
import { ReactComponent as Logo} from '../Images/Logo.svg';

function Home () {
  return (
    <div class="hero">        
      <h2>Page d'accueil</h2>  
      <div class="right-image"><Processor/></div>
      <div class="right-image1"><Logo/></div>       
      <div class="left">        
        <h1>Explorez le plaisir <br /> d'apprendre avec Simulify !</h1>
        <p>Notre site web propose une machine pédagogique <br />
          à deux adresses suivant l'architecture de Von <br />
          Neumann, ce site est le résultat de notre travail <br />
          durant le projet de deuxième année cycle <br />
          préparatoire</p>
        <a href="/" className='Dark'><CircleDark/></a>
        <a href="/" className='Clair1'><CircleClair/></a>
        <a href="/" className='Clair2'><CircleClair/></a> 
        <a href="./simulation" className="button">Simuler</a>
      </div>
    </div>
  );
};



export default Home;