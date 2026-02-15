
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { MOCK_ANALYTICS } from '../constants';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

const MarketingCharts: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-emerald-500/10 rounded-lg"><DollarSign className="w-6 h-6 text-emerald-400" /></div>
            <span className="text-emerald-400 text-xs font-bold">+24%</span>
          </div>
          <p className="text-slate-400 text-sm">Faturamento Total</p>
          <h4 className="text-2xl font-bold text-white">R$ 124.500</h4>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-indigo-500/10 rounded-lg"><Users className="w-6 h-6 text-indigo-400" /></div>
            <span className="text-indigo-400 text-xs font-bold">+12%</span>
          </div>
          <p className="text-slate-400 text-sm">Leads Gerados</p>
          <h4 className="text-2xl font-bold text-white">8.243</h4>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-purple-500/10 rounded-lg"><Target className="w-6 h-6 text-purple-400" /></div>
            <span className="text-purple-400 text-xs font-bold">65% ROI</span>
          </div>
          <p className="text-slate-400 text-sm">Taxa de Conversão</p>
          <h4 className="text-2xl font-bold text-white">18.4%</h4>
        </div>
        <div className="bg-slate-900 p-6 rounded-2xl border border-white/5">
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-orange-500/10 rounded-lg"><TrendingUp className="w-6 h-6 text-orange-400" /></div>
            <span className="text-orange-400 text-xs font-bold">Recorde</span>
          </div>
          <p className="text-slate-400 text-sm">Crescimento Mensal</p>
          <h4 className="text-2xl font-bold text-white">42.8%</h4>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-8 rounded-3xl border border-white/5 h-[400px]">
          <h3 className="text-lg font-bold text-white mb-8">Evolução de Faturamento</h3>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_ANALYTICS}>
              <defs>
                <linearGradient id="colorVendas" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '12px' }}
                itemStyle={{ color: '#fff' }}
              />
              <Area type="monotone" dataKey="vendas" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorVendas)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-slate-900 p-8 rounded-3xl border border-white/5 h-[400px]">
          <h3 className="text-lg font-bold text-white mb-8">Performance de Leads</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MOCK_ANALYTICS}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
              <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #ffffff10', borderRadius: '12px' }}
              />
              <Bar dataKey="leads" fill="#a855f7" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default MarketingCharts;
