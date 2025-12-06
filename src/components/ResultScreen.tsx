import { Trophy, RotateCcw, Zap, Award } from 'lucide-react';

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
  let status = '';

  if (percentage >= 80) {
    message = 'Performance Excepcional';
    status = 'EXPERT';
  } else if (percentage >= 60) {
    message = 'Ótimo Desempenho';
    status = 'AVANÇADO';
  } else if (percentage >= 40) {
    message = 'Bom Resultado';
    status = 'INTERMEDIÁRIO';
  } else {
    message = 'Continue Treinando';
    status = 'INICIANTE';
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-600/5"></div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 blur-3xl rounded-full animate-pulse"></div>

      <div className="relative z-10 max-w-4xl w-full">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 via-red-600/40 to-red-600/20 blur-2xl"></div>

          <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-red-600/40 p-8 md:p-12">
            <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-red-600"></div>
            <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-red-600"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-red-600"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-red-600"></div>

            <div className="text-center">
              <div className="mb-8">
                <div className="relative inline-block mb-6">
                  <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-700 opacity-75 blur-2xl animate-pulse"></div>
                  <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-2xl transform -skew-x-6">
                    <Trophy className="w-16 h-16 text-white" />
                  </div>
                </div>

                <div className="mb-6">
                  <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 px-8 py-2 transform -skew-x-6 mb-4">
                    <div className="transform skew-x-6 text-white text-sm font-black uppercase tracking-widest">
                      {status}
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-white mb-3 uppercase tracking-tight">
                  Quiz Finalizado
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-bold uppercase tracking-wide">
                  {message}
                </p>
              </div>

              <div className="relative mb-8 group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600/50 to-red-700/50 blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-gradient-to-r from-red-600 to-red-700 p-8 md:p-10 transform -skew-x-3 border-2 border-red-500">
                  <div className="transform skew-x-3">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Zap className="w-8 h-8 text-white" fill="currentColor" />
                      <div className="text-6xl md:text-7xl font-black text-white">
                        {score.toLocaleString()}
                      </div>
                      <Zap className="w-8 h-8 text-white" fill="currentColor" />
                    </div>
                    <div className="text-xl md:text-2xl text-red-100 font-black uppercase tracking-wider">
                      Pontos
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-gradient-to-br from-gray-900 to-black border border-red-600/30 p-6 transform -skew-x-3 hover:border-red-600/60 transition-all">
                  <div className="transform skew-x-3">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Award className="w-6 h-6 text-red-600" />
                      <div className="text-4xl font-black text-white">
                        {percentage.toFixed(0)}%
                      </div>
                    </div>
                    <div className="text-gray-400 font-bold uppercase text-sm tracking-wider">
                      Aproveitamento
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black border border-red-600/30 p-6 transform -skew-x-3 hover:border-red-600/60 transition-all">
                  <div className="transform skew-x-3">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Trophy className="w-6 h-6 text-red-600" />
                      <div className="text-4xl font-black text-white">
                        {totalQuestions}
                      </div>
                    </div>
                    <div className="text-gray-400 font-bold uppercase text-sm tracking-wider">
                      Perguntas
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={onRestart}
                className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white px-12 py-5 text-xl font-black uppercase hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-red-600/50 transform -skew-x-6 overflow-hidden mx-auto inline-block"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="relative flex items-center gap-3 justify-center transform skew-x-6">
                  <RotateCcw className="w-6 h-6" />
                  Jogar Novamente
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
