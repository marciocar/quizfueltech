import { Trophy, RotateCcw } from 'lucide-react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export default function ResultScreen({
  score,
  totalQuestions,
  onRestart,
}: ResultScreenProps) {
  const maxScore = totalQuestions * 1200;
  const percentage = (score / maxScore) * 100;

  let message = '';
  let emoji = '';

  if (percentage >= 80) {
    message = 'Incrível! Você é um expert!';
    emoji = '🏆';
  } else if (percentage >= 60) {
    message = 'Muito bem! Bom conhecimento!';
    emoji = '🌟';
  } else if (percentage >= 40) {
    message = 'Bom trabalho! Continue praticando!';
    emoji = '👍';
  } else {
    message = 'Continue estudando!';
    emoji = '📚';
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#46178F] via-[#5a2ca0] to-[#6e41b1] flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-2xl mb-6 animate-bounce">
              <Trophy className="w-16 h-16 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Quiz Finalizado!
            </h1>

            <p className="text-2xl md:text-3xl text-gray-700 font-bold mb-2">
              {message} {emoji}
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#46178F] to-[#6e41b1] rounded-2xl p-8 mb-8">
            <div className="text-6xl md:text-7xl font-black text-white mb-2">
              {score.toLocaleString()}
            </div>
            <div className="text-xl md:text-2xl text-purple-100 font-semibold">
              pontos
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-gray-900">
                {percentage.toFixed(0)}%
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Aproveitamento
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-3xl font-bold text-gray-900">
                {totalQuestions}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                Perguntas
              </div>
            </div>
          </div>

          <button
            onClick={onRestart}
            className="bg-gradient-to-r from-[#46178F] to-[#6e41b1] text-white px-10 py-4 rounded-full text-xl font-bold hover:scale-110 transition-transform duration-200 shadow-xl hover:shadow-purple-500/50 flex items-center gap-3 mx-auto"
          >
            <RotateCcw className="w-6 h-6" />
            Jogar Novamente
          </button>
        </div>
      </div>
    </div>
  );
}
