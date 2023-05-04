import React, { useState } from "react";
import "./FAQ.css";
import Navbar from '../components/Navbar';
import { ReactComponent as Point } from '../Images/point.svg';
import { ReactComponent as Fleche } from '../Images/Dropdown.svg';

const questions = [
  {
    id: 1,
    question: "Question1",
    reponse: "Réponse1."
  },
  {
    id: 2,
    question: "Question2",
    reponse: "Réponse2."
  },
  {
    id: 3,
    question: "Question3",
    reponse: "Réponse3."
  },
  {
    id: 4,
    question: "Question4",
    reponse: "Réponse4."
  },
  {
    id: 5,
    question: "Question5",
    reponse: "Réponse5."
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