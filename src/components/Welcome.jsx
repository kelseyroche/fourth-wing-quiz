import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import '../App.css'; 
import dragonLogo from '../assets/dragon_logo.png'; 

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="welcome-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img src={dragonLogo} alt="Dragon Logo" style={styles.logo} />

      <h1 className="bold-text" style={styles.title}>WELCOME TO THRESHING</h1>
      <p className="regular-text" style={styles.subtitle}>
        Congrats on making it this far, first year. Let's find out which dragon will choose you.
      </p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={styles.button}
        onClick={() => navigate("/quiz")}
      >
        Start Quiz
      </motion.button>
    </motion.div>
  );
};

const styles = {
  logo: {
    width: '150px',
    marginBottom: '20px',
  },
  title: {
    fontSize: "2.5rem",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    maxWidth: "500px",
  },
  button: {
    backgroundColor: "#cdaf86",
    border: "none",
    padding: "0.8rem 2rem",
    fontSize: "1.2rem", 
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontFamily: 'Optimus Princeps', 
    color: '#000', 
  },
};

export default Welcome;