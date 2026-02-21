
import React from 'react';
import { BLOG_POSTS } from './constants.tsx';
import { LayoutDashboard, Rocket, DollarSign, Smartphone, Zap, Activity, Shield, Menu, User } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
      
      {/* SIDEBAR (Desktop) */}
      <aside className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col sticky top-0 h-screen overflow-y-auto">
        <div className="p-6 border-b border-slate-100">
          <h1 className="font-extrabold text-blue-600 text-xl tracking-tighter">CARLOS GUERRA</h1>
          <p className="text-[10px] text-slate-400 uppercase tracking-[3px] font-bold mt-1">Evolução Digital</p>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center p-3 rounded-lg bg-blue-50 text-blue-600 font-bold transition-all">
            <LayoutDashboard className="w-5 h-5 mr-3" />
            Dashboard
          </a>
          
          <div className="pt-6 pb-2 px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Eixos Técnicos</div>
          <a href="#" className="flex items-center p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all font-medium">
            <Rocket className="w-5 h-5 mr-3 text-slate-400" /> Marketing
          </a>
          <a href="#" className="flex items-center p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all font-medium">
            <DollarSign className="w-5 h-5 mr-3 text-slate-400" /> Monetização
          </a>
          <a href="#" className="flex items-center p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all font-medium">
            <Smartphone className="w-5 h-5 mr-3 text-slate-400" /> Redes Sociais
          </a>
          
          <div className="pt-6 pb-2 px-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Eixos Mentais</div>
          <a href="#" className="flex items-center p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all font-medium">
            <Zap className="w-5 h-5 mr-3 text-amber-500" /> Energia
          </a>
          <a href="#" className="flex items-center p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all font-medium">
            <Activity className="w-5 h-5 mr-3 text-emerald-500" /> Frequência
          </a>
          <a href="#" className="flex items-center p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-blue-600 transition-all font-medium">
            <Shield className="w-5 h-5 mr-3 text-indigo-500" /> Disciplina
          </a>
        </nav>
        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-900 rounded-xl p-4 text-center">
             <p className="text-white text-xs font-bold mb-2">Mentoria Fechada</p>
             <button className="w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2 rounded-lg transition">Aplicar Agora</button>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Header de Saudação */}
        <header className="bg-white border-b border-slate-200 p-6 flex justify-between items-center sticky top-0 z-20 shadow-sm">
          <div className="flex items-center">
            <div className="md:hidden mr-4 text-slate-500">
              <Menu className="w-6 h-6" />
            </div>
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white font-bold mr-3 text-sm shadow-lg shadow-blue-500/30">
              CG
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase font-semibold tracking-wide">Bem-vindo à sua</p>
              <h2 className="font-bold text-slate-800 text-lg leading-none">Evolução Digital</h2>
            </div>
          </div>
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 flex items-center">
            <User className="w-4 h-4 mr-2" />
            Área do Aluno
          </button>
        </header>

        <div className="p-6 md:p-8 space-y-8 overflow-y-auto">
          {/* Hero Section (Estilo Marçal) */}
          <section>
            <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-blue-900/20 overflow-hidden relative group">
              
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>

              <div className="md:w-3/5 z-10 relative">
                <span className="inline-block bg-blue-500/20 border border-blue-400/30 backdrop-blur-md text-blue-200 text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest mb-6">
                  Crescimento Exponencial
                </span>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
                  Domine a sua <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Frequência Digital.</span>
                </h1>
                <p className="text-blue-200 text-lg max-w-lg font-medium leading-relaxed">
                  Marketing, Energia e Disciplina: A tríade que separa quem fatura de quem apenas assiste.
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 hover:bg-white/15 transition cursor-default">
                    <p className="text-2xl font-black">100%</p>
                    <p className="text-[10px] uppercase tracking-wider opacity-70 font-semibold">Foco em Resultados</p>
                  </div>
                  <div className="bg-blue-600/30 backdrop-blur-md px-6 py-4 rounded-2xl border border-blue-400/30 hover:bg-blue-600/40 transition cursor-default">
                    <p className="text-2xl font-black">ATIVA</p>
                    <p className="text-[10px] uppercase tracking-wider opacity-70 font-semibold">Sua Frequência</p>
                  </div>
                </div>
              </div>
              
              {/* Foto do Carlos Guerra */}
              <div className="md:w-2/5 mt-10 md:mt-0 flex justify-center relative z-10">
                <div className="relative">
                   <div className="absolute inset-0 bg-blue-500 blur-[60px] opacity-40 rounded-full"></div>
                   <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" 
                    alt="Carlos Guerra" 
                    className="relative z-10 w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-white/10 shadow-2xl transform group-hover:scale-105 transition duration-700"
                   />
                   <div className="absolute bottom-4 right-4 bg-white text-blue-900 text-xs font-black px-4 py-2 rounded-lg shadow-lg z-20">
                     MENTOR
                   </div>
                </div>
              </div>
            </div>
          </section>

          {/* Grid de Termos (Os seus Pilares) */}
          <section>
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-slate-400 text-xs font-bold uppercase tracking-[4px]">Pilares do Sucesso</h3>
               <div className="h-[1px] bg-slate-200 flex-1 ml-4"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🔥", title: "Energia", desc: "Vitalidade Máxima" },
                { icon: "🧬", title: "Frequência", desc: "Constância Real" },
                { icon: "🛡️", title: "Disciplina", desc: "Execução Diária" },
                { icon: "📈", title: "Monetização", desc: "Escala de Lucro" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
                  <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">{item.icon}</span>
                  <h4 className="font-bold text-slate-800 mt-4 text-sm uppercase tracking-wide">{item.title}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-1 uppercase">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Feed de Conteúdo (Estilo Blog Marçal) */}
          <section>
            <div className="flex justify-between items-end mb-8">
              <div>
                 <h3 className="text-2xl font-bold text-slate-900 border-l-4 border-blue-600 pl-4 leading-none">Últimos Insights</h3>
                 <p className="text-slate-400 text-sm mt-2 pl-5">Conteúdo técnico e mental para sua jornada.</p>
              </div>
              <button className="text-blue-600 font-bold text-sm hover:text-blue-800 transition flex items-center">
                Ver biblioteca completa <span className="ml-1">→</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article key={post.id} className="group cursor-pointer flex flex-col h-full">
                  <div className="rounded-2xl overflow-hidden mb-5 bg-slate-200 aspect-[4/3] relative shadow-md group-hover:shadow-xl transition-all duration-300">
                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors z-10"></div>
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition duration-700 ease-out" 
                    />
                    <div className="absolute top-4 left-4 z-20">
                       <span className="bg-white/90 backdrop-blur text-blue-700 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-sm">
                         {post.category}
                       </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-3 space-x-2">
                       <span>{post.date}</span>
                       <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                       <span>{post.readTime}</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors mb-3">
                      {post.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                       <div className="flex items-center">
                          <div className="w-6 h-6 bg-slate-200 rounded-full overflow-hidden mr-2">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" className="w-full h-full object-cover" />
                          </div>
                          <span className="text-xs font-bold text-slate-700">{post.author}</span>
                       </div>
                       <span className="text-blue-600 text-xs font-bold group-hover:translate-x-1 transition-transform">Ler agora →</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;
