import React, { useState } from 'react';

const PracticeMode = () => {
  const [activeSubject, setActiveSubject] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // Frågor med korrekta svar
  const mathQuestions = [
    { id: 1, text: "Vad är derivatan av x²?", answer: "2x" },
    { id: 2, text: "Lös ekvationen: 2x + 5 = 15", answer: "5" }
  ];

  const physicsQuestions = [
    { id: 1, text: "Beräkna kraften (F) för m=5kg, a=2m/s²", answer: "10" },
    { id: 2, text: "Vad är enhet för kraft?", answer: "Newton" }
  ];

  const questions = activeSubject === 'math' ? mathQuestions : physicsQuestions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleSubmit = (e) => {
    e.preventDefault();
    const correct = userAnswer.trim() === currentQuestion.answer;
    setIsCorrect(correct);
    setShowResult(true);
  };

  const resetPractice = () => {
    setActiveSubject(null);
    setCurrentQuestionIndex(0);
    setUserAnswer('');
    setShowResult(false);
  };

  const nextQuestion = () => {
    setShowResult(false);
    setUserAnswer('');
    setCurrentQuestionIndex((prev) => (prev + 1) % questions.length);
  };

  return (
    <div className="practice-container">
      {!activeSubject ? (
        <>
          <h1>Practice Mode</h1>
          <div className="subject-buttons">
            <button onClick={() => setActiveSubject('math')}>Mattefrågor</button>
            <button onClick={() => setActiveSubject('physics')}>Fysikfrågor</button>
          </div>
        </>
      ) : (
        <div className="question-section">
          {!showResult ? (
            <>
              <h2>{activeSubject === 'math' ? 'Mattefråga' : 'Fysikfråga'}</h2>
              <p>{currentQuestion.text}</p>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  placeholder="Ditt svar..."
                />
                <button type="submit">Skicka svar</button>
              </form>
            </>
          ) : (
            <>
              <h3>{isCorrect ? 'Rätt! 🎉' : 'Fel 😢'}</h3>
              <p>Rätt svar: {currentQuestion.answer}</p>
              <div className="navigation-buttons">
                <button onClick={nextQuestion}>Nästa fråga</button>
                <button onClick={resetPractice}>Välj nytt ämne</button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PracticeMode;