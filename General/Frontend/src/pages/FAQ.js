import React, { useState } from "react";
import "./FAQ.css";
import Navbar from '../components/Navbar';
import { ReactComponent as Point } from '../Images/point.svg';
import { ReactComponent as Fleche } from '../Images/Dropdown.svg';

const questions = [
  {
    id: 1,
    question: "Qu'est-ce que Simulify et comment ça fonctionne ?",
    reponse: "Simulify est une plateforme pédagogique basée sur l'architecture de Von Neumann qui permet d'apprendre la structure machine"
  },
  {
    id: 2,
    question: "Quelles sont les fonctionnalités offertes par Simulify ?",
    reponse: "Simulify vous permet d'écrire, simuler et visualiser vos programmes de manière interactive."
  },
  {
    id: 3,
    question: " Quelles ressources complémentaires sont disponibles sur Simulify ?",
    reponse: "Sur Simulify, vous trouverez des ressources complémentaires telles que des explications détaillées, des simulations graphiques pour faciliter la compréhension des concepts difficiles, ainsi que des quiz interactifs pour tester vos connaissances."
  },
  {
    id: 4,
    question: "Comment puis-je créer un compte sur Simulify et me connecter à mon compte ?",
    reponse: "Pour créer un compte sur Simulify, cliquez sur l'icone utilisateur en haut à droite et remplissez le formulaire d'inscription avec vos informations."
  },
  {
    id: 5,
    question: "Qui sommes nous ?",
    reponse: "Nous sommes actuellemnt 6 étudiantes en 2CP à ESI Alger et les réalisatrices du site web simulify dans le cadre de notre projet 2CP encadré par Mr Dahamni et Mme Charabi, que nous souhaitons que Simulify vous srea utile pour vos études : Alismail Dyna , Dinari Yasmine , Auoinine Lylia , Malek Amina , Rezzoug Aicha et Dehili Hind "
  }
];

export default function FAQ() {
  const [reponseVisible, setReponseVisible] = useState(null);
  const handleClickQuestion = (id) => {
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
    <Navbar label="Aide"/>
    <p className='p'>Vous avez des questions? Vous pouvez retrouver leurs réponses dans notre FAQ.</p>

    <div className="questions">
     {questions.map(({ id, question }) => (
      <div
       key={id}
       className={`question ${reponseVisible === id ? "active" : ""}`}
       onClick={() => handleClickQuestion(id)}>
        <Point className="point"/>
        {question}
        <Fleche className="fleche"/>
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