import React from 'react';

const AnswerButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} style={styles.button}>
      {text}
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    margin: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#ffc107',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default AnswerButton;