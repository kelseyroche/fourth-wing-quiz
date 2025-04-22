import React, { useState } from 'react';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const questions = [
    {
      id: 1,
      text: "In a crisis, what’s your instinctive response?",
      answers: [
        { text: "Stay calm and assess", traits: ["intelligent", "cunning"] },
        { text: "Charge in to fix it", traits: ["passionate", "ruthless"] },
        { text: "Think outside the box", traits: ["bold", "magical"] },
        { text: "Support others quietly", traits: ["loyal", "strong"] }
      ]
    },
    // Add more questions here...
  ];

  const handleAnswerClick = (traits) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: traits
    }));
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (currentQuestionIndex >= questions.length) {
    return <div>Results: {JSON.stringify(answers)}</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>{currentQuestion.text}</h2>
      <ul>
        {currentQuestion.answers.map((answer, index) => (
          <li key={index}>
            <button onClick={() => handleAnswerClick(answer.traits)}>
              {answer.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;