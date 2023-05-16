/***************************************************************************************/
import React, { useState } from "react";
import "./FAQ.css";
import Navbar from '../components/Navbar';
import { ReactComponent as Point } from '../Images/point.svg';
import { ReactComponent as Fleche } from '../Images/Dropdown.svg';
/***************************************************************************************/
// Tableau des questions et réponses
const questions = [
  {
    id: 1,
    question: (<div className="q1">Qu'est-ce que Simulify et comment ça fonctionne ?</div>),
    reponse: (
      <div>Simulify est une plateforme pédagogique basée sur l'architecture de Von Neumann qui permet d'apprendre la structure machine
      </div>)
  },
  {
    id: 2,
    question: (<div className="q2">Quelles sont les fonctionnalités offertes par Simulify ?</div>),
    reponse: (<div >Simulify vous permet d'écrire, simuler et visualiser vos programmes de manière interactive</div>)
  },
  {
    id: 3,
    question: (
      <div className="q3">Quelles ressources complémentaires sont disponibles<br/> sur Simulify ?</div>),
    reponse: (<div>Sur Simulify, vous trouverez des ressources complémentaires telles que des explications détaillées, des simulations graphiques pour faciliter la compréhension des concepts difficiles, ainsi que des quiz interactifs pour tester vos connaissances.
    </div>)
  },
  {
    id: 4,
    question: (
      <div className="q4">Comment puis-je créer un compte sur Simulify et me <br/> connecter à mon compte ?</div>),
    reponse: (<div>Pour créer un compte sur Simulify, cliquez sur l'icone utilisateur en haut à droite et remplissez le formulaire d'inscription avec vos informations.
    </div>)
  },
  {
    id: 5,
    question: (<div className="q5">Qui sommes nous ?</div>),
    reponse: (<div>Nous sommes 6 étudiantes en 2CP à ESI Alger et réalisatrices de Simulify :
      <br/><br/>1- ALISMAIL Dyna Hayem (Chef d'équipe)
      <br/>2- AOUININE Lylia
      <br/>3- DEHILI Hind
      <br/>4- DINARI Yasmine
      <br/>5- MALEK Amina
      <br/>6- REZZOUG Aicha
      <br/><br/>Encadré par : Mr Dahamni et Mme Charabi.</div>)
  }
];

export default function FAQ(props) {
  const [reponseVisible, setReponseVisible] = useState(null);
  const handleClickQuestion = (id) => { // Gestion du clic sur une question
    if (reponseVisible === id) {
      // Si la réponse est déjà visible, la masquer
      setReponseVisible(null);
    } else {
      // Sinon, afficher la réponse correspondante
      setReponseVisible(id);
    }
  };

 return (
  <div className="FAQ">
    <Navbar label="Aide"  isAuthenticated={props.isAuthenticated}/>
    <p className='p'>Vous avez des questions? Vous pouvez retrouver leurs réponses dans notre FAQ.</p>

    <div className="questions">
     {questions.map(({ id, question }) => (
      <div
       key={id}
       className={`question ${reponseVisible === id ? "active" : ""}`}
       onClick={() => handleClickQuestion(id)}>
        <Point className="point"/>
        {question}
        <Fleche className={`fleche ${id}`} />
      </div>
     ))}
    </div>

    <div className="reponses">
     {questions.map(({ id, reponse }) => (
      <div
       key={id}
       className={`reponse ${reponseVisible === id ? "active" : ""}`}>
        {reponseVisible === id && reponse}
      </div>
     ))}
    </div>
  </div>
 );
}