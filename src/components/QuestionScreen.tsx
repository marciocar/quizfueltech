import { Clock } from 'lucide-react';
import { Question } from '../types/quiz';

interface QuestionScreenProps {
  question: Question;
  currentQuestion: number;
  totalQuestions: number;
  timeLeft: number;
  selectedAnswer: number | null;
  isAnswered: boolean;
  onAnswer: (answerIndex: number) => void;
}

const optionColors = [
  { bg: 'bg-red-500', hover: 'hover:bg-red-600', ring: 'ring-red-500' },
  { bg: 'bg-blue-500', hover: 'hover:bg-blue-600', ring: 'ring-blue-500' },
  { bg: 'bg-yellow-500', hover: 'hover:bg-yellow-600', ring: 'ring-yellow-500' },
  { bg: 'bg-green-500', hover: 'hover:bg-green-600', ring: 'ring-green-500' },
];

const optionShapes = [
  '△',
  '◆',
  '○',
  '□',
];

export default function QuestionScreen({
  question,
  currentQuestion,
  totalQuestions,
  timeLeft,
  selectedAnswer,
  isAnswered,
  onAnswer,
}: QuestionScreenProps) {
  const progress = (timeLeft / 20) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#46178F] via-[#5a2ca0] to-[#6e41b1] flex flex-col p-4">
      <div className="max-w-5xl w-full mx-auto flex-1 flex flex-col py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white text-xl font-bold">
              Pergunta {currentQuestion + 1} de {totalQuestions}
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white text-xl font-bold">{timeLeft}s</span>
            </div>
          </div>

          <div className="h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
            {question.question}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {question.options.map((option, index) => {
            const colors = optionColors[index];
            const isSelected = selectedAnswer === index;
            const isCorrect = question.correctAnswer === index;
            const showResult = isAnswered && isSelected;

            let buttonClasses = `${colors.bg} ${colors.hover} text-white`;

            if (showResult) {
              if (isCorrect) {
                buttonClasses = 'bg-green-600 ring-4 ring-green-300 scale-105';
              } else {
                buttonClasses = 'bg-red-600 ring-4 ring-red-300 scale-95 opacity-75';
              }
            } else if (isAnswered && isCorrect) {
              buttonClasses = 'bg-green-600 ring-4 ring-green-300 scale-105';
            }

            return (
              <button
                key={index}
                onClick={() => !isAnswered && onAnswer(index)}
                disabled={isAnswered}
                className={`${buttonClasses} p-6 rounded-2xl shadow-xl transition-all duration-300 disabled:cursor-not-allowed transform hover:scale-105 flex items-center justify-between gap-4 text-left`}
              >
                <div className="flex items-center gap-4 flex-1">
                  <span className="text-5xl font-bold opacity-70">
                    {optionShapes[index]}
                  </span>
                  <span className="text-xl md:text-2xl font-bold">{option}</span>
                </div>
                {showResult && (
                  <span className="text-3xl">
                    {isCorrect ? '✓' : '✗'}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
