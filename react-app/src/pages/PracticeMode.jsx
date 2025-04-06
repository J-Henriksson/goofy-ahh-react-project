import React, { useState } from 'react';
import styles from './PracticeMode.module.css';
import { practiceQuestions } from '../data/practiceQuestions';

const PracticeMode = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [remainingQuestions, setRemainingQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');

  // When a topic button is clicked, set the selected topic and reset remaining questions.
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setFeedback('');
    setSelectedOption('');
    // Make a copy of the topic questions so we can remove questions as they are shown.
    const topicQuestions = [...practiceQuestions[topic]];
    setRemainingQuestions(topicQuestions);
    // Pick a random question from the copied list.
    const randomIndex = Math.floor(Math.random() * topicQuestions.length);
    const question = topicQuestions[randomIndex];
    // Remove that question so it won't be repeated.
    topicQuestions.splice(randomIndex, 1);
    setRemainingQuestions(topicQuestions);
    setCurrentQuestion(question);
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
    // Use the current remaining questions; if empty, reset to full list.
    let topicQuestions = [...remainingQuestions];
    if (topicQuestions.length === 0) {
      topicQuestions = [...practiceQuestions[selectedTopic]];
    }
    const randomIndex = Math.floor(Math.random() * topicQuestions.length);
    const question = topicQuestions[randomIndex];
    topicQuestions.splice(randomIndex, 1);
    setRemainingQuestions(topicQuestions);
    setCurrentQuestion(question);
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
            <button className={styles.button}>Show Solution</button>
          </div>
          {feedback && <div className={styles.feedback}>{feedback}</div>}
        </div>
      )}
    </div>
  );
};

export default PracticeMode;
