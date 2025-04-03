import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PracticeMode = () => {
  const { subject, year } = useParams();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Frågor
  const questions = {
    math: {
      2021: [
        { id: 1, text: "Vad är derivatan av x²?", answer: "2x" },
        { id: 2, text: "Lös 2x + 5 = 15", answer: "5" }
      ],
      // ... fler år
    },
    physics: {
      2021: [
        { id: 1, text: "Vad är enheten för kraft?", answer: "Newton" }
      ]
    }
  };

  const currentQuestion = questions[subject]?.[year]?.[currentQuestionIndex];

  return (
    <div style={{
      marginLeft: '20px', // Kompenserar för hamburgarmeny
      padding: '20px',
      maxWidth: '800px',
      margin: '80px auto 0 auto', // Top margin för menyn
    }}>
      {/* ... (resten av din befintliga PracticeMode-logik) ... */}
    </div>
  );
};

export default PracticeMode;