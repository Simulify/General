import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { quizData } from "./QuizApp";
import Navbar from '../components/Navbar';
import { ReactComponent as QuizImg } from '../Images/Quiz.svg';
import { ReactComponent as Crt } from '../Images/Correct.svg';
import { ReactComponent as Fx } from '../Images/Faux.svg';
import "./Quiz.css";

const Quiz = () => {
  const { category } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [canAnswer, setCanAnswer] = useState(true);
  const quizzes = quizData.find((data) => data.category === category).quizzes;
  const totalQuestions = quizzes.length;
  const [showPopup, setShowPopup] = useState(false); // state to show/hide popup
  const [popupScore, setPopupScore] = useState(0); // state for popup score

  const handleAnswerSelect = (answer) => {
    if (canAnswer) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmit = () => {
    if (canAnswer && selectedAnswer !== null) {
      if (selectedAnswer === quizzes[currentQuestion].answer) {
        setScore(score + 1);
        setIsCorrectAnswer(true);
        setShowResult(true);
        setCanAnswer(false);
        setTimeout(() => {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedAnswer(null);
          setShowResult(false);
          setCanAnswer(true);
        }, 1500);
      } else {
        setIsCorrectAnswer(false);
        setShowResult(true);
        setSelectedAnswer(null);
      }
    }
  };

  const handleSkipQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setCanAnswer(true);
  };

  const handleShowPopup = () => {
    setShowPopup(true);
    setPopupScore(score);
  };

  const handleHidePopup = () => {
    setShowPopup(false);
  };

  if (currentQuestion === totalQuestions) {
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
  <Navbar label={`Quiz > ${category}`} />
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