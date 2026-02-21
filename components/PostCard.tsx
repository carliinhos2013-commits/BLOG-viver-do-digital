
import React from 'react';
import { Post } from '../types.ts';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="group bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
          {post.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-4 text-xs text-slate-500 mb-4">
          <div className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</div>
          <div className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {post.readTime}</div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
          {post.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
          {post.excerpt}
        </p>
        <button className="flex items-center text-indigo-400 font-semibold text-sm hover:text-indigo-300 transition-colors">
          Ler Artigo Completo
          <ChevronRight className="ml-1 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
