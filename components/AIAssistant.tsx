
import React, { useState } from 'react';
import { generateMarketingStrategy } from '../services/geminiService.ts';
import { Zap, Sparkles, Loader2, Send } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [niche, setNiche] = useState('');
  const [target, setTarget] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!niche || !target) return;
    
    setLoading(true);
    const strategy = await generateMarketingStrategy(niche, target);
    setResult(strategy);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
      <div className="p-8 md:p-12">
        <div className="flex items-center mb-8">
          <div className="p-3 bg-indigo-500/20 rounded-2xl mr-4">
            <Zap className="w-8 h-8 text-indigo-400" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">Mentor Digital IA</h2>
            <p className="text-slate-400">Receba uma estratégia personalizada do Carlos Guerra em segundos.</p>
          </div>
        </div>

        <form onSubmit={handleGenerate} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Qual seu nicho?</label>
              <input 
                type="text" 
                placeholder="Ex: Fitness, Infoprodutos, Dropshipping..."
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">Quem é seu público?</label>
              <input 
                type="text" 
                placeholder="Ex: Mães empreendedoras, Jovens de 18-24..."
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                required
              />
            </div>
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full py-5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white rounded-xl font-bold flex items-center justify-center transition-all disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                Carlos está pensando...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-3" />
                Gerar Estratégia de Elite
              </>
            )}
          </button>
        </form>

        {result && (
          <div className="mt-12 p-8 bg-indigo-500/5 border border-indigo-500/20 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center mb-4 text-indigo-400 font-bold uppercase tracking-widest text-xs">
              <span className="w-8 h-[2px] bg-indigo-400 mr-3"></span>
              Sua Estratégia Carlos Guerra
            </div>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed whitespace-pre-line">
              {result}
            </div>
            <div className="mt-8 flex justify-end">
              <button className="text-slate-500 hover:text-white transition-colors flex items-center text-sm font-medium">
                Compartilhar insights <Send className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AIAssistant;
