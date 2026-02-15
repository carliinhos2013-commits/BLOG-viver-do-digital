
import { Post, MarketingData } from './types';

export const BLOG_POSTS: Post[] = [
  {
    id: '1',
    title: 'Como sair do zero e faturar seus primeiros R$ 10.000',
    excerpt: 'Um guia passo a passo para iniciantes no marketing de afiliados e infoprodutos.',
    content: 'O mercado digital não é uma corrida de 100 metros, é uma maratona...',
    category: 'Estratégia',
    author: 'Carlos Guerra',
    date: '15 Mai 2024',
    image: 'https://picsum.photos/seed/digital1/800/450',
    readTime: '8 min'
  },
  {
    id: '2',
    title: 'O Segredo do Copywriting que Converte no Instagram',
    excerpt: 'Descubra os gatilhos mentais que os grandes players usam para vender todos os dias.',
    content: 'Atenção, Interesse, Desejo e Ação. O clássico AIDA ainda domina o jogo...',
    category: 'Copywriting',
    author: 'Carlos Guerra',
    date: '12 Mai 2024',
    image: 'https://picsum.photos/seed/copy/800/450',
    readTime: '6 min'
  },
  {
    id: '3',
    title: 'Trafégo Pago: Facebook Ads vs Google Ads em 2024',
    excerpt: 'Qual plataforma escolher para o seu tipo de negócio? Analisamos os prós e contras.',
    content: 'Muitos me perguntam: Carlos, onde invisto meu dinheiro primeiro?',
    category: 'Tráfego',
    author: 'Carlos Guerra',
    date: '10 Mai 2024',
    image: 'https://picsum.photos/seed/ads/800/450',
    readTime: '12 min'
  }
];

export const MOCK_ANALYTICS: MarketingData[] = [
  { month: 'Jan', vendas: 4000, leads: 2400, conversao: 12 },
  { month: 'Fev', vendas: 3000, leads: 1398, conversao: 15 },
  { month: 'Mar', vendas: 2000, leads: 9800, conversao: 10 },
  { month: 'Abr', vendas: 2780, leads: 3908, conversao: 18 },
  { month: 'Mai', vendas: 1890, leads: 4800, conversao: 22 },
  { month: 'Jun', vendas: 2390, leads: 3800, conversao: 25 },
];
