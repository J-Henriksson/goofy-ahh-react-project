import React, { useState } from 'react';
import styles from './PracticeMode.module.css';
import { practiceQuestions } from '../data/practiceQuestions';

const PracticeMode = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setFeedback('');
    setSelectedOption('');
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

      {selectedTopic && currentQuestion && (
        <div className={styles.questionContainer}>
          <h2 className={styles.questionText}>{currentQuestion.text}</h2>
          {currentQuestion.image && (
            <div className={styles.imageContainer}>
              <img
                src={currentQuestion.image}
                alt="Question illustration"
                className={styles.questionImage}
              />
            </div>
          )}
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
