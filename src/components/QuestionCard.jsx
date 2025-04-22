// import React from 'react';
// import AnswerButton from './AnswerButton';

// const QuestionCard = ({ question, onAnswer }) => (
//   <div>
//     <h2>{question.text}</h2>
//     <ul>
//       {question.answers.map((answer, index) => (
//         <li key={index}>
//           <AnswerButton text={answer.text} onClick={() => onAnswer(answer.traits)} />
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// // Ensure this line is present
// export default QuestionCard;

import React from 'react';
import AnswerButton from './AnswerButton';

const QuestionCard = ({ question, onAnswer }) => (
  <div>
    <h2>{question.text}</h2>
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