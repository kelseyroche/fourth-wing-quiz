import React, { useState } from 'react';
import { motion } from 'framer-motion';
import QuestionCard from './QuestionCard';
import Result from './Result';
import '../App.css';

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userTraits, setUserTraits] = useState([]);
  const [showResult, setShowResult] = useState(false);

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
    {
        id: 2,
        text: "Your leadership style is:",
        answers: [
          { text: "Strategic and calculated", traits: ["intelligent", "cunning", "agile"] },
          { text: "Bold and aggressive", traits: ["passionate", "ruthless", "deadly"] },
          { text: "Unpredictable and exciting", traits: ["bold", "deadly"] },
          { text: "Supportive and steady", traits: ["loyal", "strong"] },
          { text: "Compassionate and intuitive", traits: ["empathetic", "magical"] }
        ]
      },
      {
        id: 3,
        text: "What kind of power would you want most?",
        answers: [
          { text: "Mental sharpness", traits: ["intelligent", "cunning"] },
          { text: "Raw strength", traits: ["passionate", "ruthless"] },
          { text: "Elemental or magical gifts", traits: ["magical", "empathetic"] },
          { text: "Agility and speed", traits: ["agile"] },
          { text: "Poison or stealth", traits: ["deadly"] }
        ]
      },
      {
        id: 4,
        text: "How do you handle betrayal?",
        answers: [
          { text: "Cut them off and move on", traits: ["ruthless", "passionate"] },
          { text: "Strategize and play the long game", traits: ["intelligent", "cunning"] },
          { text: "Explode in the moment", traits: ["bold", "deadly"] },
          { text: "Forgive, but don’t forget", traits: ["loyal", "empathetic"] }
        ]
      },
      {
        id: 5,
        text: "Your ideal weekend looks like:",
        answers: [
          { text: "Reading, learning, reflecting", traits: ["intelligent", "cunning"] },
          { text: "Hiking, climbing, or combat training", traits: ["passionate", "ruthless"] },
          { text: "Planning a prank or surprise", traits: ["bold"] },
          { text: "Hanging with close friends", traits: ["loyal", "strong"] },
          { text: "Healing, journaling, or helping others", traits: ["empathetic", "magical"] }
        ]
      },
      {
        id: 6,
        text: "You walk into a room of strangers. What's your move?",
        answers: [
          { text: "Observe before engaging", traits: ["intelligent", "cunning"] },
          { text: "Command attention immediately", traits: ["bold", "passionate"] },
          { text: "Break the tension with humor", traits: ["bold", "magical"] },
          { text: "Stick close to a familiar face", traits: ["loyal", "empathetic"] }
        ]
      },
      {
        id: 7,
        text: "Which environment would you thrive in?",
        answers: [
          { text: "Library or research lab", traits: ["intelligent"] },
          { text: "War zone or battlefield", traits: ["ruthless", "strong"] },
          { text: "Mystical forest or ancient ruins", traits: ["magical"] },
          { text: "Community center or family home", traits: ["loyal", "empathetic"] }
        ]
      },
      {
        id: 8,
        text: "A rival underestimates you. What do you do?",
        answers: [
          { text: "Outsmart them quietly", traits: ["cunning", "intelligent"] },
          { text: "Prove them wrong—loudly", traits: ["bold", "passionate"] },
          { text: "Ignore them—they’ll see eventually", traits: ["loyal", "strong"] },
          { text: "Get revenge creatively", traits: ["deadly", "magical"] }
        ]
      },
      {
        id: 9,
        text: "What’s your greatest strength?",
        answers: [
          { text: "My mind", traits: ["intelligent"] },
          { text: "My loyalty", traits: ["loyal", "empathetic"] },
          { text: "My guts", traits: ["bold", "ruthless"] },
          { text: "My adaptability", traits: ["cunning", "agile"] }
        ]
      },
      {
        id: 10,
        text: "If someone you love is in danger, what do you do?",
        answers: [
          { text: "Run in, no hesitation", traits: ["passionate", "strong"] },
          { text: "Make a plan first", traits: ["intelligent", "cunning"] },
          { text: "Get help and act fast", traits: ["loyal", "empathetic"] },
          { text: "Eliminate the threat", traits: ["deadly", "ruthless"] }
        ]
      },
      {
        id: 11,
        text: "Pick a weapon:",
        answers: [
          { text: "Sword", traits: ["bold", "strong"] },
          { text: "Poison", traits: ["deadly", "cunning"] },
          { text: "Magic", traits: ["magical", "empathetic"] },
          { text: "Your mind", traits: ["intelligent", "strategic"] }
        ]
      },
      {
        id: 12,
        text: "What role do you play in a team?",
        answers: [
          { text: "The strategist", traits: ["intelligent", "cunning"] },
          { text: "The frontline fighter", traits: ["strong", "ruthless"] },
          { text: "The wildcard", traits: ["bold", "deadly"] },
          { text: "The heart of the group", traits: ["empathetic", "loyal"] }
        ]
      },
      {
        id: 13,
        text: "You’re given a secret mission. What’s your priority?",
        answers: [
          { text: "Gather intel first", traits: ["intelligent", "agile"] },
          { text: "Act quickly before anyone notices", traits: ["cunning", "bold"] },
          { text: "Make sure no one gets hurt", traits: ["empathetic", "loyal"] },
          { text: "Neutralize all threats", traits: ["ruthless", "deadly"] }
        ]
      },
      {
        id: 14,
        text: "How do others describe you?",
        answers: [
          { text: "Wise and thoughtful", traits: ["intelligent", "empathetic"] },
          { text: "Fierce and loyal", traits: ["loyal", "strong"] },
          { text: "Brilliant but unpredictable", traits: ["bold", "cunning"] },
          { text: "Scary but effective", traits: ["ruthless", "deadly"] }
        ]
      },
      {
        id: 15,
        text: "Pick a motto:",
        answers: [
          { text: "Knowledge is power", traits: ["intelligent", "cunning"] },
          { text: "Strike fast, strike hard", traits: ["ruthless", "deadly"] },
          { text: "Protect what matters", traits: ["loyal", "empathetic"] },
          { text: "Surprise is the best weapon", traits: ["bold", "magical"] }
        ]
      }
    // Add more questions here...
  ];

  const traitToColor = {
    loyal: ["Brown"],
    bold: ["Orange", "Red"],
    intelligent: ["Green", "Black"],
    passionate: ["Red"],
    cunning: ["Black"],
    ruthless: ["Blue"],
    empathetic: ["Gold"],
    magical: ["Gold", "Black"],
    agile: ["Red", "Green"],
    strong: ["Blue"],
    deadly: ["Black"]
  };

  const traitToTail = {
    strong: "Clubtail",
    agile: "Daggertail", 
    deadly: "Scorpiontail",
    cunning: "Swordtail", 
    bold: "Daggertail"
    // add more here!!!!!
  };
  

  const handleAnswer = (traits) => {
    setUserTraits((prev) => [...prev, ...traits]);
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const colorCount = {};
    const tailCount = {};
  
    userTraits.forEach(trait => {
      const color = traitToColor[trait];
      const tail = traitToTail[trait];
  
      if (color) {
        const colors = Array.isArray(color) ? color : [color];
        colors.forEach(c => {
          colorCount[c] = (colorCount[c] || 0) + 1;
        });
      }
  
      if (tail) {
        tailCount[tail] = (tailCount[tail] || 0) + 1;
      }
    });
  
    const getTopTrait = (traitObj) => {
      let max = 0;
      let topTrait = "Unknown";
      for (const key in traitObj) {
        if (traitObj[key] > max) {
          max = traitObj[key];
          topTrait = key;
        }
      }
      return topTrait;
    };
  
    const dragonColor = getTopTrait(colorCount);
    const tailType = getTopTrait(tailCount);
  
    return `Dragon Color: ${dragonColor}, Tail Type: ${tailType}`;
  };

  return (
    <div className="container">
      {showResult ? (
        <Result result={calculateResult()} />
      ) : (
        <motion.div
          key={currentQuestionIndex} 
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Quiz;