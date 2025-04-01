import React, { useState } from 'react';

const PracticeMode = () => {
  const [activeSubject, setActiveSubject] = useState(null); // 'math' eller 'physics'

  // Exempelfrågor (ersätt med din faktiska data)
  const mathQuestions = [
    { id: 1, text: "Vad är derivatan av x²?" },
    { id: 2, text: "Lös ekvationen: 2x + 5 = 15" }
  ];

  const physicsQuestions = [
    { id: 1, text: "Beräkna kraften som krävs för att accelerera en 5kg massa med 2m/s²" },
    { id: 2, text: "Förklara Newtons första lag" }
  ];

  return (
    <div className="practice-container">
      <h1>Practice Mode</h1>
      <p>Select a topic from old tests and practice questions with responsive feedback.</p>
      
      {/* Knappar för ämnesval */}
      <div className="subject-buttons">
        <button 
          onClick={() => setActiveSubject('math')}
          className={activeSubject === 'math' ? 'active' : ''}
        >
          Mattefrågor
        </button>
        <button 
          onClick={() => setActiveSubject('physics')}
          className={activeSubject === 'physics' ? 'active' : ''}
        >
          Fysikfrågor
        </button>
      </div>

      {/* Visar frågor baserat på valt ämne */}
      <div className="questions-container">
        {activeSubject === 'math' && (
          <div>
            <h2>Mattefrågor</h2>
            {mathQuestions.map(q => (
              <div key={q.id} className="question">
                <p>{q.text}</p>
              </div>
            ))}
          </div>
        )}

        {activeSubject === 'physics' && (
          <div>
            <h2>Fysikfrågor</h2>
            {physicsQuestions.map(q => (
              <div key={q.id} className="question">
                <p>{q.text}</p>
              </div>
            ))}
          </div>
        )}

        {!activeSubject && (
          <p>Välj ett ämne ovan för att börja öva</p>
        )}
      </div>
    </div>
  );
};

export default PracticeMode;
