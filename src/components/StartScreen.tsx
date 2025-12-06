import { Play } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#46178F] via-[#5a2ca0] to-[#6e41b1] flex items-center justify-center p-4">
      <div className="text-center">
        <div className="mb-8 animate-bounce">
          <div className="w-32 h-32 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl">
            <Play className="w-16 h-16 text-[#46178F]" fill="currentColor" />
          </div>
        </div>

        <h1 className="text-6xl md:text-7xl font-black text-white mb-4 tracking-tight">
          Tech Quiz
        </h1>

        <p className="text-xl md:text-2xl text-purple-100 mb-12 font-medium">
          Teste seus conhecimentos em tecnologia!
        </p>

        <button
          onClick={onStart}
          className="bg-white text-[#46178F] px-12 py-5 rounded-full text-2xl font-bold hover:scale-110 transition-transform duration-200 shadow-2xl hover:shadow-purple-500/50"
        >
          Iniciar Quiz
        </button>

        <div className="mt-12 text-purple-100 space-y-2">
          <p className="text-lg font-semibold">📋 3 perguntas</p>
          <p className="text-lg font-semibold">⏱️ 20 segundos por pergunta</p>
          <p className="text-lg font-semibold">🏆 1000 pontos + bônus velocidade</p>
        </div>
      </div>
    </div>
  );
}
