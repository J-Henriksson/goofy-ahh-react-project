import React, { useState, useEffect } from 'react';
import styles from './PracticeMode.module.css';
import { practiceQuestions } from '../data/practiceQuestions';

// Helper to get unique categories for a given topic.
const getUniqueCategories = (topic) => {
  const allCats = practiceQuestions[topic].flatMap((q) => q.category);
  return Array.from(new Set(allCats));
};

const PracticeMode = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [remainingQuestions, setRemainingQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedOption, setSelectedOption] = useState('');
  const [feedback, setFeedback] = useState('');

  // When a topic is selected, initialize state with all unique categories.
  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
    setFeedback('');
    setSelectedOption('');
    setCurrentQuestion(null);
    setRemainingQuestions([]);
    const uniqueCats = getUniqueCategories(topic);
    // By default, all categories are selected.
    setSelectedCategories(uniqueCats);
  };

  // Toggle category selection. If it's the only one selected, do nothing.
  const toggleCategory = (cat) => {
    if (selectedCategories.includes(cat)) {
      if (selectedCategories.length === 1) {
        // Prevent unselecting the last category.
        return;
      }
      setSelectedCategories(selectedCategories.filter((c) => c !== cat));
    } else {
      setSelectedCategories([...selectedCategories, cat]);
    }
  };

  // useEffect: whenever selectedTopic or selectedCategories change, reinitialize questions.
  useEffect(() => {
    if (selectedTopic) {
      // Filter questions for the selected topic by the selected categories.
      const filteredQuestions = practiceQuestions[selectedTopic].filter((q) =>
        q.category.some((cat) => selectedCategories.includes(cat))
      );
      if (filteredQuestions.length > 0) {
        const pool = [...filteredQuestions];
        const randomIndex = Math.floor(Math.random() * pool.length);
        const q = pool[randomIndex];
        pool.splice(randomIndex, 1);
        setRemainingQuestions(pool);
        setCurrentQuestion(q);
      } else {
        setRemainingQuestions([]);
        setCurrentQuestion(null);
      }
      // Reset current selection and feedback.
      setSelectedOption('');
      setFeedback('');
    }
  }, [selectedTopic, selectedCategories]);

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
    if (!selectedTopic || selectedCategories.length === 0) return;
    // Get the pool of eligible questions.
    let pool = practiceQuestions[selectedTopic].filter((q) =>
      q.category.some((cat) => selectedCategories.includes(cat))
    );
    if (remainingQuestions.length > 0) {
      pool = [...remainingQuestions];
    }
    if (pool.length === 0) {
      // Reset if we've exhausted the pool.
      pool = practiceQuestions[selectedTopic].filter((q) =>
        q.category.some((cat) => selectedCategories.includes(cat))
      );
    }
    const randomIndex = Math.floor(Math.random() * pool.length);
    const q = pool[randomIndex];
    pool.splice(randomIndex, 1);
    setRemainingQuestions(pool);
    setCurrentQuestion(q);
    setSelectedOption('');
    setFeedback('');
  };

  // Compute unique categories for rendering the category buttons.
  const uniqueCategories = selectedTopic ? getUniqueCategories(selectedTopic) : [];

  return (
    <div className={styles.container}>
      {/* Topic Selection */}
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

      {/* Category Selection: show buttons for each category; all are selected by default */}
      {selectedTopic && (
        <div className={styles.categorySelection}>
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => toggleCategory(cat)}
              className={`${styles.categoryButton} ${selectedCategories.includes(cat) ? styles.selectedCategory : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Question Interface */}
      {selectedTopic && currentQuestion ? (
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
      ) : selectedTopic ? (
        <div className={styles.questionContainer}>
          <h2 className={styles.questionText}>
            No questions found for the selected categories.
          </h2>
        </div>
      ) : null}
    </div>
  );
};

export default PracticeMode;
