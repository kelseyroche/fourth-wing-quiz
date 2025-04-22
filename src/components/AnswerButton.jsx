import React from 'react';

const AnswerButton = ({ text, onClick }) => (
  <button onClick={onClick}>
    {text}
  </button>
);
