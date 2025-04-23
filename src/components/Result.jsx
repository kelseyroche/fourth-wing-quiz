import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

// Import images
import brownFeathertail from '../assets/brown/feathertail.png';
import brownClubtail from '../assets/brown/clubtail.png';
import brownDaggertail from '../assets/brown/daggertail.png';
import brownSwordtail from '../assets/brown/swordtail.png';
import brownScorpiontail from '../assets/brown/scorpiontail.png';
import orangeFeathertail from '../assets/orange/feathertail.png';
import orangeClubtail from '../assets/orange/clubtail.png';
import orangeDaggertail from '../assets/orange/daggertail.png';
import orangeSwordtail from '../assets/orange/swordtail.png';
import orangeScorpiontail from '../assets/orange/scorpiontail.png';
import redFeathertail from '../assets/red/feathertail.png';
import redClubtail from '../assets/red/clubtail.png';
import redDaggertail from '../assets/red/daggertail.png';
import redSwordtail from '../assets/red/swordtail.png';
import redScorpiontail from '../assets/red/scorpiontail.png';
import greenFeathertail from '../assets/green/feathertail.png';
import greenClubtail from '../assets/green/clubtail.png';
import greenDaggertail from '../assets/green/daggertail.png';
import greenSwordtail from '../assets/green/swordtail.png';
import greenScorpiontail from '../assets/green/scorpiontail.png';
import blackFeathertail from '../assets/black/feathertail.png';
import blackClubtail from '../assets/black/clubtail.png';
import blackDaggertail from '../assets/black/daggertail.png';
import blackSwordtail from '../assets/black/swordtail.png';
import blackScorpiontail from '../assets/black/scorpiontail.png';
import blueFeathertail from '../assets/blue/feathertail.png';
import blueClubtail from '../assets/blue/clubtail.png';
import blueDaggertail from '../assets/blue/daggertail.png';
import blueSwordtail from '../assets/blue/swordtail.png';
import blueScorpiontail from '../assets/blue/scorpiontail.png';
import goldFeathertail from '../assets/gold/feathertail.png';
import goldClubtail from '../assets/gold/clubtail.png';
import goldDaggertail from '../assets/gold/daggertail.png';
import goldSwordtail from '../assets/gold/swordtail.png';
import goldScorpiontail from '../assets/gold/scorpiontail.png';

// Map dragon color and tail type to image paths
const dragonImages = {
  "Brown_Feathertail": brownFeathertail,
  "Brown_Clubtail": brownClubtail,
  "Brown_Daggertail": brownDaggertail,
  "Brown_Swordtail": brownSwordtail,
  "Brown_Scorpiontail": brownScorpiontail,
  "Orange_Feathertail": orangeFeathertail,
  "Orange_Clubtail": orangeClubtail,
  "Orange_Daggertail": orangeDaggertail,
  "Orange_Swordtail": orangeSwordtail,
  "Orange_Scorpiontail": orangeScorpiontail,
  "Red_Feathertail": redFeathertail,
  "Red_Clubtail": redClubtail,
  "Red_Daggertail": redDaggertail,
  "Red_Swordtail": redSwordtail,
  "Red_Scorpiontail": redScorpiontail,
  "Green_Feathertail": greenFeathertail,
  "Green_Clubtail": greenClubtail,
  "Green_Daggertail": greenDaggertail,
  "Green_Swordtail": greenSwordtail,
  "Green_Scorpiontail": greenScorpiontail,
  "Black_Feathertail": blackFeathertail,
  "Black_Clubtail": blackClubtail,
  "Black_Daggertail": blackDaggertail,
  "Black_Swordtail": blackSwordtail,
  "Black_Scorpiontail": blackScorpiontail,
  "Blue_Feathertail": blueFeathertail,
  "Blue_Clubtail": blueClubtail,
  "Blue_Daggertail": blueDaggertail,
  "Blue_Swordtail": blueSwordtail,
  "Blue_Scorpiontail": blueScorpiontail,
  "Gold_Feathertail": goldFeathertail,
  "Gold_Clubtail": goldClubtail,
  "Gold_Daggertail": goldDaggertail,
  "Gold_Swordtail": goldSwordtail,
  "Gold_Scorpiontail": goldScorpiontail,
};

const Result = ({ result }) => {
  const navigate = useNavigate();
  const [dragonColor, tailType] = result.split(', ').map(item => item.split(': ')[1]);

  const dragonKey = `${dragonColor}_${tailType}`;

  return (
    <>
      <div style={styles.container}>
        <h2 className="bold-text" style={styles.title}>Your Dragon Color and Tail Type</h2>
        <p className="regular-text" style={styles.resultText}>{result}</p>
      </div>
      {dragonImages[dragonKey] && (
        <img 
          src={dragonImages[dragonKey]} 
          alt={`${dragonColor} ${tailType}`} 
          style={styles.dragonImage}
        />
      )}
      <button style={styles.button} onClick={() => navigate('/')}>
        Start Over
      </button>
    </>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#cdaf86',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '400px',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  resultText: {
    fontSize: '1.2rem',
    color: '#333',
  },
  dragonImage: {
    display: 'block',
    margin: '20px auto',
    maxWidth: '80%', 
    height: 'auto',
  },
  button: {
    display: 'block',
    margin: '20px auto',
    padding: '15px 30px', 
    backgroundColor: '#cdaf86',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.2rem', 
    fontFamily: 'Optimus Princeps', 
    transition: 'background-color 0.3s ease',
  },
};

export default Result;