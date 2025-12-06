export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizState {
  currentQuestion: number;
  score: number;
  timeLeft: number;
  isAnswered: boolean;
  selectedAnswer: number | null;
}
