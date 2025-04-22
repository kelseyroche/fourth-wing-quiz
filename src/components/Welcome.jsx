// import React from "react";

// const Welcome = ({ onStart }) => {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>Which Dragon Will Choose You?</h1>
//       <p style={styles.subtitle}>
//         Take the Fourth Wing personality quiz to find out your dragon and tail type.
//       </p>
//       <button style={styles.button} onClick={onStart}>
//         Start Quiz
//       </button>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
//     color: "#fff",
//     textAlign: "center",
//     padding: "0 2rem",
//   },
//   title: {
//     fontSize: "2.5rem",
//     fontWeight: "600",
//     marginBottom: "1rem",
//   },
//   subtitle: {
//     fontSize: "1.2rem",
//     marginBottom: "2rem",
//     maxWidth: "500px",
//   },
//   button: {
//     backgroundColor: "#ffc107",
//     border: "none",
//     padding: "0.8rem 2rem",
//     fontSize: "1rem",
//     borderRadius: "8px",
//     cursor: "pointer",
//     transition: "transform 0.2s ease, box-shadow 0.2s ease",
//   },
// };

// export default Welcome;

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={styles.container}
    >
      <h1 style={styles.title}>Which Dragon Will Choose You?</h1>
      <p style={styles.subtitle}>
        Take the Fourth Wing personality quiz to discover your dragon and tail type.
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
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "#fff",
    textAlign: "center",
    padding: "0 2rem",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "600",
    marginBottom: "1rem",
  },
  subtitle: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
    maxWidth: "500px",
  },
  button: {
    backgroundColor: "#ffc107",
    border: "none",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default Welcome;