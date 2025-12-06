import { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultScreen from './components/ResultScreen';
import { questions } from './data/questions';
import { QuizState } from './types/quiz';

type Screen = 'start' | 'question' | 'result';

function App() {
  const [screen, setScreen] = useState<Screen>('start');
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    score: 0,
    timeLeft: 20,
    isAnswered: false,
    selectedAnswer: null,
  });

  useEffect(() => {
    if (screen !== 'question' || quizState.isAnswered || quizState.timeLeft === 0) {
      return;
    }

    const timer = setInterval(() => {
      setQuizState((prev) => {
        if (prev.timeLeft <= 1) {
          handleNextQuestion();
          return prev;
        }
        return { ...prev, timeLeft: prev.timeLeft - 1 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [screen, quizState.isAnswered, quizState.timeLeft]);

  const handleStart = () => {
    setScreen('question');
    setQuizState({
      currentQuestion: 0,
      score: 0,
      timeLeft: 20,
      isAnswered: false,
      selectedAnswer: null,
    });
  };

  const handleAnswer = (answerIndex: number) => {
    if (quizState.isAnswered) return;

    const isCorrect = questions[quizState.currentQuestion].correctAnswer === answerIndex;
    let points = 0;

    if (isCorrect) {
      const timeBonus = Math.floor(quizState.timeLeft * 10);
      points = 1000 + timeBonus;
    }

    setQuizState((prev) => ({
      ...prev,
      selectedAnswer: answerIndex,
      isAnswered: true,
      score: prev.score + points,
    }));

    setTimeout(() => {
      handleNextQuestion();
    }, 2000);
  };

  const handleNextQuestion = () => {
    const nextQuestion = quizState.currentQuestion + 1;

    if (nextQuestion >= questions.length) {
      setScreen('result');
    } else {
      setQuizState((prev) => ({
        ...prev,
        currentQuestion: nextQuestion,
        timeLeft: 20,
        isAnswered: false,
        selectedAnswer: null,
      }));
    }
  };

  const handleRestart = () => {
    setScreen('start');
  };

  return (
    <>
      {screen === 'start' && <StartScreen onStart={handleStart} />}

      {screen === 'question' && (
        <QuestionScreen
          question={questions[quizState.currentQuestion]}
          currentQuestion={quizState.currentQuestion}
          totalQuestions={questions.length}
          timeLeft={quizState.timeLeft}
          selectedAnswer={quizState.selectedAnswer}
          isAnswered={quizState.isAnswered}
          onAnswer={handleAnswer}
        />
      )}

      {screen === 'result' && (
        <ResultScreen
          score={quizState.score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      )}
    </>
  );
}

export default App;
