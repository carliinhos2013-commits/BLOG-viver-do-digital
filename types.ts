
export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export enum View {
  HOME = 'HOME',
  BLOG = 'BLOG',
  AI_GEN = 'AI_GEN',
  ABOUT = 'ABOUT',
  ANALYTICS = 'ANALYTICS'
}

export interface MarketingData {
  month: string;
  vendas: number;
  leads: number;
  conversao: number;
}
