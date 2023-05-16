/***************************************************************************************/
import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { quizData } from "./QuizApp";
import Navbar from '../components/Navbar';
import { ReactComponent as QuizImg } from '../Images/Quiz.svg';
import { ReactComponent as Crt } from '../Images/Correct.svg';
import { ReactComponent as Fx } from '../Images/Faux.svg';
import "./Quiz.css";
/***************************************************************************************/

const Quiz = (props) => {
  const { category } = useParams(); // Récupère la catégorie à partir des paramètres de l'URL
  const [currentQuestion, setCurrentQuestion] = useState(0); // État de la question actuelle
  const [score, setScore] = useState(0); // État du score
  const [selectedAnswer, setSelectedAnswer] = useState(null); // État de la réponse sélectionnée par l'utilisateur
  const [showResult, setShowResult] = useState(false); // État pour afficher le résultat de la question
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false); // État pour indiquer si la réponse est correcte ou non
  const [canAnswer, setCanAnswer] = useState(true); // État pour autoriser ou empêcher l'utilisateur de répondre
  const quizzes = quizData.find((data) => data.category === category).quizzes; // Sélectionne les quiz de la catégorie correspondante
  const totalQuestions = quizzes.length; // Nombre total de questions
  const [showPopup, setShowPopup] = useState(false); // État pour afficher/cacher la fenêtre contextuelle (popup)
  const [popupScore, setPopupScore] = useState(0); // État pour le score dans la fenêtre contextuelle

  const handleAnswerSelect = (answer) => {
    if (canAnswer) {
      setSelectedAnswer(answer); // Sélectionne la réponse choisie par l'utilisateur
    }
  };

  
  const handleSubmit = () => {
    if (canAnswer && selectedAnswer !== null) {
      if (selectedAnswer === quizzes[currentQuestion].answer) {
        setScore(score + 1); // Incrémente le score si la réponse est correcte
        setIsCorrectAnswer(true); // Définit l'état de la réponse comme correcte
        setShowResult(true); // Affiche le résultat de la question
        setCanAnswer(false); // Empêche l'utilisateur de répondre à nouveau
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1); // Passe à la question suivante
          setSelectedAnswer(null); // Réinitialise la réponse sélectionnée
          setShowResult(false); // Cache le résultat de la question
          setCanAnswer(true); // Autorise l'utilisateur à répondre à la prochaine question
        }, 1500);
      } else {
        setIsCorrectAnswer(false); // Définit l'état de la réponse comme incorrecte
        setShowResult(true); // Affiche le résultat de la question
        setSelectedAnswer(null); // Réinitialise la réponse sélectionnée
      }
    }
  };
  const handleSkipQuestion = () => {
    setCurrentQuestion(currentQuestion + 1); // Passe à la question suivante
    setSelectedAnswer(null); // Réinitialise la réponse sélectionnée
    setCanAnswer(true); // Autorise l'utilisateur à répondre à la prochaine question
  };
  const handleShowPopup = () => {
    setShowPopup(true);
    setPopupScore(score);
  };

  const handleHidePopup = () => {
    setShowPopup(false); // Cache la fenêtre contextuelle (popup)
  };

  if (currentQuestion === totalQuestions) {  // Si toutes les questions ont été répondues
    return (
      <div className="overlay">
        <div className="result-container">
          <h2>Votre score final est : {score}/{totalQuestions}</h2>
          <button className="restart-button" onClick={() => {setCurrentQuestion(0);setScore(0);setSelectedAnswer(null);}}>
          Rejouer</button>
          <a href="/revision/quiz" className="sort-button">Sortir</a>
        </div>
      </div>
    );
  }
 return (
  <div className="quiz-container">
  <Navbar label={`Quiz > ${category}`}  isAuthenticated={props.isAuthenticated} />
  <h1 >{quizzes[currentQuestion].question}</h1>
  <ul className="quizs">
    {quizzes[currentQuestion].options.map((option) => (
     <li key={option}>
      <label>
       <input
        type="radio"
        name="answer"
        value={option}
        checked={selectedAnswer === option}
        onChange={() => handleAnswerSelect(option)}/>
       <span className="checkmark"></span>
       {option}
      </label>
     </li>
    ))}
  </ul>
  <button className={`submit-button ${((!canAnswer) || (selectedAnswer === null)) ? "disabled" : ""}`} onClick={handleSubmit} disabled={!canAnswer || selectedAnswer === null}>
  Soumettre</button>
  {showResult && isCorrectAnswer && (<><p className="result-text correct">Correct!</p><Crt className="crt-img" /></>)}
  {showResult && !isCorrectAnswer && (<><p className="result-text incorrect">Faux!</p><Fx className="fx-img" /></>)}
  <button className="skip-button" onClick={handleSkipQuestion}>Passer</button>
  <p className="score-counter">Score: {score}</p>
  <p className="question-counter"> {currentQuestion + 1} / {totalQuestions}</p>
  <QuizImg className="quiz-img"/>
  </div>
 );
};

export default Quiz;