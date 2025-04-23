import React from 'react';
import '../App.css';

const AnswerButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="regular-text" style={styles.button}>
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
    backgroundColor: '#cdaf86',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default AnswerButton;