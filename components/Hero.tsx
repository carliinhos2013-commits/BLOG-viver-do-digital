
import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-indigo-500/10 to-transparent blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20 bg-indigo-500/10 mb-8 animate-pulse">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2"></span>
            Domine o mercado digital em 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Liberdade financeira através do <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">Marketing de Elite</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Aprenda as estratégias que transformaram Carlos Guerra em uma referência nacional. Construa seu império digital começando do absoluto zero.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onStart}
              className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center transition-all shadow-xl shadow-indigo-600/20 group"
            >
              Começar Jornada Agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold flex items-center justify-center transition-all">
              <Play className="mr-2 w-5 h-5 text-indigo-400 fill-indigo-400" />
              Ver Depoimentos
            </button>
          </div>

          <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-slate-500 text-sm">
            <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-indigo-500" /> +50k Alunos</div>
            <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-indigo-500" /> Mentoria VIP</div>
            <div className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-indigo-500" /> Acesso Vitalício</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
