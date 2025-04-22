

// import React from 'react';
// import '../App.css';

// // Assume you have images in the assets folder named accordingly
// const dragonImages = {
//   "Brown_Clubtail": "brown_clubtail.png",
//   "Orange_Scorpiontail": "orange_scorpiontail.png",
//   "Green_Swordtail": "green_swordtail.png",
//   "Red_Daggertail": "red_daggertail.png",
//   "Black_Morningstartail": "black_morningstartail.png",
//   "Blue_Daggertail": "blue_daggertail.png",
//   "Gold_Feathertail": "gold_feathertail.png",
//   // Add more combinations as needed
// };

// const Result = ({ result }) => {
//   const [dragonColor, tailType] = result.split(', ').map(item => item.split(': ')[1]);

//   // Construct the key for the dragonImages object
//   const dragonKey = `${dragonColor}_${tailType}`;

//   return (
//     <div style={styles.container}>
//       <h2 className="bold-text" style={styles.title}>Your Dragon Color and Tail Type</h2>
//       <p className="regular-text" style={styles.resultText}>{result}</p>
//       {dragonImages[dragonKey] && (
//         <img 
//           src={require(`../assets/${dragonImages[dragonKey]}`)} 
//           alt={`${dragonColor} ${tailType}`} 
//           style={styles.dragonImage}
//         />
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '20px',
//     textAlign: 'center',
//     backgroundColor: '#cdaf86', // Updated to gold color
//     borderRadius: '10px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     margin: '20px auto',
//     maxWidth: '400px',
//   },
//   title: {
//     fontSize: '1.5rem',
//     marginBottom: '10px',
//   },
//   resultText: {
//     fontSize: '1.2rem',
//     color: '#333',
//   },
//   dragonImage: {
//     marginTop: '20px',
//     maxWidth: '100%',
//     height: 'auto',
//   },
// };

// export default Result;

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// import React from 'react';
// import '../App.css';

// const Result = ({ result }) => {
//   // Parse the result to get the dragon color and tail type
//   const [dragonColor, tailType] = result.split(', ').map(item => item.split(': ')[1].toLowerCase());

//   // Construct the path to the image file
//   const imagePath = `../assets/${dragonColor}/${tailType}.png`;

//   return (
//     <div style={styles.container}>
//       <h2 className="bold-text" style={styles.title}>Your Dragon Color and Tail Type</h2>
//       <p className="regular-text" style={styles.resultText}>{result}</p>
//       <img 
//         src={require(`${imagePath}`)} 
//         alt={`${dragonColor} ${tailType}`} 
//         style={styles.dragonImage}
//       />
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: '20px',
//     textAlign: 'center',
//     backgroundColor: '#cdaf86', // Gold color
//     borderRadius: '10px',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//     margin: '20px auto',
//     maxWidth: '400px',
//   },
//   title: {
//     fontSize: '1.5rem',
//     marginBottom: '10px',
//   },
//   resultText: {
//     fontSize: '1.2rem',
//     color: '#333',
//   },
//   dragonImage: {
//     marginTop: '20px',
//     maxWidth: '100%',
//     height: 'auto',
//   },
// };

// export default Result;

import React from 'react';
import '../App.css';

const Result = ({ result }) => {
  const [dragonColor, tailType] = result.split(', ').map(item => item.split(': ')[1]);

  // Build the image path dynamically
  const imagePath = `/assets/${dragonColor.toLowerCase()}/${tailType.toLowerCase()}.png`;

  return (
    <div style={styles.container}>
      <h2 className="bold-text" style={styles.title}>Your Dragon Color and Tail Type</h2>
      <p className="regular-text" style={styles.resultText}>{result}</p>
      <img 
        src={imagePath} 
        alt={`${dragonColor} ${tailType}`} 
        style={styles.dragonImage}
        onError={(e) => { e.target.style.display = 'none'; }} // hide image if not found
      />
    </div>
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
    marginTop: '20px',
    maxWidth: '100%',
    height: 'auto',
  },
};

export default Result;