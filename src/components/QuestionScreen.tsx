import { Clock, Zap } from 'lucide-react';
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
  { bg: 'bg-red-600', hover: 'hover:bg-red-700', glow: 'shadow-red-600/50' },
  { bg: 'bg-blue-600', hover: 'hover:bg-blue-700', glow: 'shadow-blue-600/50' },
  { bg: 'bg-yellow-500', hover: 'hover:bg-yellow-600', glow: 'shadow-yellow-500/50' },
  { bg: 'bg-green-600', hover: 'hover:bg-green-700', glow: 'shadow-green-600/50' },
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
    <div className="min-h-screen bg-black flex flex-col p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-600/5"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-red-600/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-6xl w-full mx-auto flex-1 flex flex-col py-6">
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-gradient-to-r from-gray-900 to-black border border-red-600/40 px-6 py-3 transform -skew-x-6">
              <div className="transform skew-x-6 text-white text-xl font-black uppercase tracking-wider">
                <span className="text-red-600">{currentQuestion + 1}</span> / {totalQuestions}
              </div>
            </div>

            <div className="flex items-center gap-3 bg-gradient-to-r from-gray-900 to-black border border-red-600/40 px-6 py-3 transform -skew-x-6">
              <div className="transform skew-x-6 flex items-center gap-2">
                <Clock className="w-6 h-6 text-red-600" />
                <span className="text-white text-2xl font-black">{timeLeft}</span>
                <span className="text-gray-400 text-sm font-bold uppercase">seg</span>
              </div>
            </div>
          </div>

          <div className="relative h-2 bg-gray-900 border border-red-600/20 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transition-all duration-1000 ease-linear"
              style={{ width: `${progress}%` }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="relative mb-8 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600/0 via-red-600/30 to-red-600/0 blur-xl group-hover:via-red-600/50 transition-all"></div>
          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-red-600/40 p-8 md:p-10 transform -skew-x-1">
            <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-red-600"></div>
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-red-600"></div>

            <h2 className="transform skew-x-1 text-2xl md:text-4xl font-black text-white text-center uppercase tracking-tight leading-tight">
              {question.question}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {question.options.map((option, index) => {
            const colors = optionColors[index];
            const isSelected = selectedAnswer === index;
            const isCorrect = question.correctAnswer === index;
            const showResult = isAnswered && isSelected;

            let buttonClasses = `${colors.bg} ${colors.hover} ${colors.glow}`;

            if (showResult) {
              if (isCorrect) {
                buttonClasses = 'bg-gradient-to-br from-green-600 to-green-700 ring-4 ring-green-500/50 scale-105 shadow-green-600/50';
              } else {
                buttonClasses = 'bg-gradient-to-br from-gray-800 to-gray-900 ring-4 ring-red-600/50 scale-95 opacity-75 shadow-red-600/50';
              }
            } else if (isAnswered && isCorrect) {
              buttonClasses = 'bg-gradient-to-br from-green-600 to-green-700 ring-4 ring-green-500/50 scale-105 shadow-green-600/50';
            }

            return (
              <button
                key={index}
                onClick={() => !isAnswered && onAnswer(index)}
                disabled={isAnswered}
                className={`${buttonClasses} relative p-6 shadow-2xl transition-all duration-300 disabled:cursor-not-allowed transform hover:scale-105 hover:-translate-y-1 flex items-center justify-between gap-4 text-left border-2 border-white/10 overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 group-hover:from-white/10 group-hover:to-white/5 transition-all"></div>

                <div className="relative flex items-center gap-4 flex-1">
                  <div className="w-16 h-16 flex items-center justify-center bg-black/30 border-2 border-white/20">
                    <span className="text-4xl font-black text-white/90">
                      {optionShapes[index]}
                    </span>
                  </div>
                  <span className="text-lg md:text-xl font-black text-white uppercase tracking-wide leading-tight">
                    {option}
                  </span>
                </div>

                {showResult && (
                  <div className="relative">
                    <Zap
                      className={`w-10 h-10 ${isCorrect ? 'text-white' : 'text-red-600'}`}
                      fill="currentColor"
                    />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
