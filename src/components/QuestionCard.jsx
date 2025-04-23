import React from 'react';
import AnswerButton from './AnswerButton';
import '../App.css';

const QuestionCard = ({ question, onAnswer }) => (
  <div className="container">
    <h2 className="bold-text">{question.text}</h2>
    <ul>
      {question.answers.map((answer, index) => (
        <li key={index}>
          <AnswerButton text={answer.text} onClick={() => onAnswer(answer.traits)} />
        </li>
      ))}
    </ul>
  </div>
);

export default QuestionCard;