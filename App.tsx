
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PostCard from './components/PostCard';
import AIAssistant from './components/AIAssistant';
import MarketingCharts from './components/MarketingCharts';
import { View } from './types';
import { BLOG_POSTS } from './constants';
import { Mail, Github, Instagram, Linkedin, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.HOME);

  const renderContent = () => {
    switch (currentView) {
      case View.HOME:
        return (
          <>
            <Hero onStart={() => setCurrentView(View.BLOG)} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-white">Artigos em Destaque</h2>
                <button onClick={() => setCurrentView(View.BLOG)} className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center">
                  Ver todos <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {BLOG_POSTS.map(post => <PostCard key={post.id} post={post} />)}
              </div>
            </div>
            
            <section className="bg-indigo-600/5 py-24 border-y border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">Pronto para viver do digital?</h2>
                <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                  Junte-se a mais de 50.000 pessoas que estão mudando de vida com o método Guerra.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <input 
                    type="email" 
                    placeholder="Seu melhor e-mail" 
                    className="w-full sm:w-80 px-6 py-4 bg-slate-900 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all">
                    Quero me Inscrever
                  </button>
                </div>
              </div>
            </section>
          </>
        );

      case View.BLOG:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <h1 className="text-4xl font-bold text-white mb-12">Blog do Carlos Guerra</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[...BLOG_POSTS, ...BLOG_POSTS].map((post, idx) => (
                <PostCard key={`${post.id}-${idx}`} post={post} />
              ))}
            </div>
          </div>
        );

      case View.AI_GEN:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <AIAssistant />
          </div>
        );

      case View.ANALYTICS:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="flex items-center mb-12">
              <h1 className="text-4xl font-bold text-white">Dashboard de Elite</h1>
              <div className="ml-4 px-3 py-1 bg-indigo-500/20 text-indigo-400 text-xs font-bold rounded-full uppercase tracking-tighter">
                Live Data
              </div>
            </div>
            <MarketingCharts />
          </div>
        );

      case View.ABOUT:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://picsum.photos/seed/carlos/600/800" 
                  alt="Carlos Guerra" 
                  className="rounded-3xl shadow-2xl border border-white/10"
                />
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-white">Quem é Carlos Guerra?</h1>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Com mais de 10 anos de experiência no mercado digital, Carlos Guerra não é apenas um mentor, mas um estrategista que já gerou múltiplos 7 dígitos para seus clientes e projetos próprios.
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Sua missão é democratizar o conhecimento de alto nível sobre marketing digital, ajudando pessoas comuns a construírem negócios sólidos e escaláveis na internet.
                </p>
                <div className="pt-6 space-y-4">
                  <div className="flex items-center text-slate-300">
                    <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-3" />
                    Especialista em Tráfego de Alta Performance
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-3" />
                    Copywriter com foco em conversão direta
                  </div>
                  <div className="flex items-center text-slate-300">
                    <CheckCircleIcon className="w-5 h-5 text-indigo-500 mr-3" />
                    Mentor de mais de 50.000 alunos ao redor do mundo
                  </div>
                </div>
                <div className="flex space-x-4 pt-6">
                  <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors"><Instagram className="w-6 h-6" /></button>
                  <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors"><Linkedin className="w-6 h-6" /></button>
                  <button className="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-colors"><Github className="w-6 h-6" /></button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentView={currentView} setView={setCurrentView} />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold">V</span>
                </div>
                <span className="text-xl font-bold text-white">Viver do Digital</span>
              </div>
              <p className="text-slate-500 max-w-sm mb-6">
                Transformando o mercado digital através de educação de elite e estratégias validadas no campo de batalha.
              </p>
              <div className="flex space-x-6">
                <Mail className="w-5 h-5 text-slate-600 hover:text-indigo-400 cursor-pointer" />
                <Instagram className="w-5 h-5 text-slate-600 hover:text-indigo-400 cursor-pointer" />
                <Linkedin className="w-5 h-5 text-slate-600 hover:text-indigo-400 cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Plataforma</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li className="hover:text-indigo-400 cursor-pointer">Cursos e Mentorias</li>
                <li className="hover:text-indigo-400 cursor-pointer">Blog de Estratégias</li>
                <li className="hover:text-indigo-400 cursor-pointer">Comunidade VIP</li>
                <li className="hover:text-indigo-400 cursor-pointer">IA Assistant</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li className="hover:text-indigo-400 cursor-pointer">Termos de Uso</li>
                <li className="hover:text-indigo-400 cursor-pointer">Políticas de Privacidade</li>
                <li className="hover:text-indigo-400 cursor-pointer">Cookies</li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-slate-600 text-xs">
            © 2024 Viver do Digital - Carlos Guerra. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Simple icon wrapper
const CheckCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default App;
