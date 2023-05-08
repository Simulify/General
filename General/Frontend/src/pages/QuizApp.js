import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ReactComponent as Fleche } from '../Images/Dropdown.svg';
import { ReactComponent as QuizImg } from '../Images/Quiz.svg';
import './Quiz.css';


export const quizData = [
  {
    category: "Categorie1",
    quizzes: [
      {
        question: "Question 1",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 1"
      },
      {
        question: "Question 2",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 3"
      },
      {
        question: "Question 3",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 2"
      }
    ]
  },
  {
    category: "Categorie2",
    quizzes: [
      {
        question: "Question 1",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 1"
      },
      {
        question: "Question 2",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 3"
      },
      {
        question: "Question 3",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 2"
      }
    ]
  },
  {
    category: "Categorie3",
    quizzes: [
      {
        question: "Question 1",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 1"
      },
      {
        question: "Question 2",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 3"
      },
      {
        question: "Question 3",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 2"
      }
    ]
  },
  {
    category: "Categorie4",
    quizzes: [
      {
        question: "Question 1",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 1"
      },
      {
        question: "Question 2",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 3"
      },
      {
        question: "Question 3",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 2"
      }
    ]
  },
  {
    category: "Categorie5",
    quizzes: [
      {
        question: "Question 1",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 1"
      },
      {
        question: "Question 2",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 3"
      },
      {
        question: "Question 3",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 2"
      }
    ]
  },
  {
    category: "Categorie6",
    quizzes: [
      {
        question: "Question 1",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 1"
      },
      {
        question: "Question 2",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 3"
      },
      {
        question: "Question 3",
        options: ["Réponse 1", "Réponse 2", "Réponse 3"],
        answer: "Réponse 2"
      }
    ]
  }
];

const QuizApp = (props) => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    navigate(`/revision/quiz/${category}`);
  };

  return (
    <div className="quizz">
    <Navbar label="Catégories"  isAuthenticated={props.isAuthenticated}/>
      <p className="p">Choisissez une catégorie</p>
      <ul className="categories">
        {quizData.map((data) => (
          <li key={data.category}>
            <button className="category-button" onClick={() => handleCategorySelect(data.category)}>
              {data.category}
              <Fleche className="flech"/>
            </button>
          </li>
        ))}
      </ul>
    <QuizImg className="quiz-img"/>
    </div>
  );
};

export default QuizApp;