import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../components/Navbar';

import { ReactComponent as Image3} from '../Images/slide3.svg';
import { ReactComponent as Image2} from '../Images/slide2.svg';

import { ReactComponent as CircleClair} from '../Images/Ellipse 7.svg';
import { ReactComponent as Processor} from '../Images/Group 9.svg';
import { ReactComponent as Image1} from '../Images/Logo.svg';

function Home () {
  const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {  
  const slider = document.querySelector(".slider");
  const interval = setInterval(() => {
    setCurrentImage(prevImage => {
      if (prevImage === 2) {
        slider.style.transform = `translateX(0%)`;
        return 0;
      } else {
        slider.style.transform = `translateX(-${(prevImage + 1) * 33.33}%)`;
        return prevImage + 1;
      }
    });
  }, 3000);
  return () => clearInterval(interval);
}, []);


  return (


    <div className="hero"> 
      <Navbar label="Page d'acceuil" />   
      <div className="right">
        <div className="right-image"><Processor/></div>
      <div className="slider2-container">
      {currentImage === 0 && <Image1 className="current-image" style={{ width: "11%", height: "auto" }} />}
      {currentImage === 1 && <Image2 className="current-image" style={{ width: "17%", height: "auto" }} />}
      {currentImage === 2 && <Image3 className="current-image" style={{ width: "17%", height: "auto" }} />}
      {currentImage === 2 && <Image1 className="next-image" />}
      {currentImage === 0 && <Image2 className="next-image" />}
      {currentImage === 1 && <Image3 className="next-image" />}
      {currentImage === 0 && <Image3 className="previous-image" />}
      {currentImage === 1 && <Image1 className="previous-image" />}
      {currentImage === 2 && <Image2 className="previous-image" />}
    </div>
    </div>
      
      <div className="left">
      <div className="slider-container">
      <div className="slider">
        <div className="slide">
          <h1>Explorez le plaisir <br /> d'apprendre avec Simulify !</h1>
          <p>Notre site web propose une machine pédagogique <br />

          à deux adresses suivant l'architecture de Von <br />
          Neumann, ce site est le résultat de notre travail <br />
          durant le projet de deuxième année cycle <br />
          préparatoire</p>
        </div>
        <div className="slide">
          <h1>Ecrivez et simulez vos <br /> programmes</h1>
          <p> Notre plateforme d'apprentissage interactive vous <br />
          permet d'écrire et de simuler vos programmes <br />
          facilement. Grâce à notre fonction de simulation, <br />
          vous pouvez visualiser vos programmes en action</p>
        </div>
        <div className="slide">
          <h1>Explications, Quiz et <br /> Ressources !</h1>
          <p> Notre plateforme offre des simulations graphiques <br />
          pour faciliter la compréhension des concepts <br />
          difficiles, ainsi que des quiz interactifs pour tester <br />
          vos connaissances. Nous avons également <br />
          rassemblé des ressources complémentaires </p>
        </div>
        
         </div>
      </div>
      <div className={`slid ${currentImage === 0 ? "active" : ""} clair1`}><CircleClair/></div>
      <div className={`slid ${currentImage === 1 ? "active" : ""} clair2`}><CircleClair/></div>
      <div className={`slid ${currentImage === 2 ? "active" : ""} clair3`}><CircleClair/></div> 
      <a href="./simulation" className="button">Simuler</a>
      </div> 
      </div>
  );
};
export default Home;