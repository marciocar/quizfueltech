import { Play, Zap } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-red-600/5"></div>

      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 text-center max-w-4xl w-full">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-red-700 opacity-75 blur-2xl animate-pulse"></div>
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-2xl transform -skew-x-6">
              <Zap className="w-16 h-16 text-white" fill="currentColor" />
            </div>
          </div>
        </div>

        <div className="mb-6 relative">
          <div className="absolute -left-8 top-1/2 w-24 h-1 bg-gradient-to-r from-transparent to-red-600 transform -skew-y-12"></div>
          <div className="absolute -right-8 top-1/2 w-24 h-1 bg-gradient-to-l from-transparent to-red-600 transform skew-y-12"></div>

          <h1 className="text-7xl md:text-8xl font-black text-white mb-2 tracking-tighter uppercase">
            Tech Quiz
          </h1>
          <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-red-600 to-transparent"></div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-bold uppercase tracking-wide">
          Teste seus conhecimentos em tecnologia
        </p>

        <button
          onClick={onStart}
          className="group relative bg-gradient-to-r from-red-600 to-red-700 text-white px-16 py-6 text-2xl font-black uppercase hover:scale-105 transition-all duration-200 shadow-2xl hover:shadow-red-600/50 transform -skew-x-6 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
          <span className="relative flex items-center gap-3 justify-center">
            <Play className="w-7 h-7" fill="currentColor" />
            Iniciar Quiz
          </span>
        </button>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-red-600/30 p-6 transform -skew-x-3 hover:border-red-600/60 transition-colors">
            <div className="transform skew-x-3">
              <div className="text-4xl font-black text-red-600 mb-2">03</div>
              <div className="text-gray-400 font-bold uppercase text-sm tracking-wider">Perguntas</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-red-600/30 p-6 transform -skew-x-3 hover:border-red-600/60 transition-colors">
            <div className="transform skew-x-3">
              <div className="text-4xl font-black text-red-600 mb-2">20s</div>
              <div className="text-gray-400 font-bold uppercase text-sm tracking-wider">Por pergunta</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-red-600/30 p-6 transform -skew-x-3 hover:border-red-600/60 transition-colors">
            <div className="transform skew-x-3">
              <div className="text-4xl font-black text-red-600 mb-2">1000</div>
              <div className="text-gray-400 font-bold uppercase text-sm tracking-wider">Pontos + Bônus</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
