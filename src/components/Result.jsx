import React from 'react';

const Result = ({ result }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Dragon Color and Tail Type</h2>
      <p style={styles.resultText}>{result}</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '400px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  resultText: {
    fontSize: '1.2rem',
    color: '#333',
  },
};

export default Result;