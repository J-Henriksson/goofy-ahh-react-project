import React, { useState } from 'react';
import styles from './PracticeMode.module.css';

// Sample questions for demo (you can add more later)
const practiceQuestions = {
  math: [
    {
      id: 1,
      text: "What is the derivative of x²?",
      options: ["2x", "x", "x²", "1"],
      answer: "2x",
    },
    {
      id: 2,
      text: "Solve: 2x + 5 = 15. What is x?",
      options: ["5", "10", "15", "2"],
      answer: "5",
    },
  ],
  physics: [
    {
      id: 1,
      text: "What is the unit of force?",
      options: ["Newton", "Joule", "Watt", "Pascal"],
      answer: "Newton",
    },
    {
      id: 2,
      text: "What is Newton's second law?",
      options: ["F = ma", "E = mc²", "F = m/a", "p = mv"],
      answer: "F = ma",
    },
  ],
};

const PracticeMode = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');

  // When a topic button is clicked, update the selected topic and pick a question.
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setFeedback('');
    setSelectedOption('');
    // Pick a random question from the chosen topic.
    const questions = practiceQuestions[topic];
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const checkAnswer = () => {
    if (!currentQuestion) return;
    if (selectedOption === currentQuestion.answer) {
      setFeedback('Correct!');
    } else {
      setFeedback(`Incorrect. The correct answer is ${currentQuestion.answer}.`);
    }
  };

  const nextQuestion = () => {
    if (!selectedTopic) return;
    const questions = practiceQuestions[selectedTopic];
    const randomIndex = Math.floor(Math.random() * questions.length);
    setCurrentQuestion(questions[randomIndex]);
    setSelectedOption('');
    setFeedback('');
  };

  return (
    <div className={styles.container}>
      {/* Topic Buttons remain visible at the top */}
      <div className={styles.topicSelection}>
        <button
          onClick={() => handleTopicSelect('math')}
          className={`${styles.topicButton} ${selectedTopic === 'math' ? styles.selected : ''}`}
        >
          Math
        </button>
        <button
          onClick={() => handleTopicSelect('physics')}
          className={`${styles.topicButton} ${selectedTopic === 'physics' ? styles.selected : ''}`}
        >
          Physics
        </button>
      </div>

      {/* Interactive multiple-choice layout appears if a topic is selected */}
      {selectedTopic && currentQuestion && (
        <div className={styles.questionContainer}>
          <h2 className={styles.questionText}>{currentQuestion.text}</h2>
          <div className={styles.options}>
            {currentQuestion.options.map((option) => (
              <label key={option} className={styles.optionLabel}>
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                  className={styles.radioInput}
                />
                {option}
              </label>
            ))}
          </div>
          <div className={styles.buttonContainer}>
            <button onClick={checkAnswer} className={styles.button}>
              Submit Answer
            </button>
            <button onClick={nextQuestion} className={styles.button}>
              Next Question
            </button>
          </div>
          {feedback && <div className={styles.feedback}>{feedback}</div>}
        </div>
      )}
    </div>
  );
};

export default PracticeMode;
