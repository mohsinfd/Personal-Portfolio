import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_DATA, CS_SKINS_DATA } from '../data/personal';
import { CSSkin } from '../types';

export const SkinCard = ({ skin }: { skin: CSSkin; key?: React.Key }) => (
  <div className="min-w-[85vw] md:min-w-0 snap-center group relative bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 hover:bg-zinc-900/80 hover:border-zinc-700/50 transition-all duration-500 flex flex-col h-full backdrop-blur-sm">
    <div className="flex justify-between items-start mb-6">
      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-zinc-950/50 px-3 py-1.5 rounded-full border border-zinc-800/50">
        {skin.category}
      </span>
      <div className="text-right">
        <div className="text-xs font-mono text-zinc-400">{skin.wear}</div>
        <div className="text-[10px] font-mono text-zinc-600 mt-1">Float: {skin.float}</div>
      </div>
    </div>
    
    <div className="relative aspect-[4/3] w-full mb-8 overflow-hidden rounded-xl bg-zinc-950/50 border border-zinc-800/30 flex items-center justify-center p-4">
      <img 
        src={skin.imageUrl} 
        alt={skin.name} 
        referrerPolicy="no-referrer"
        className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out drop-shadow-2xl"
      />
    </div>

    <div className="mt-auto">
      <h3 className="text-sm font-bold font-mono text-zinc-200 mb-3 group-hover:text-white transition-colors">{skin.name}</h3>
      <p className="text-xs text-zinc-500 leading-relaxed font-serif italic">"{skin.caption}"</p>
    </div>
  </div>
);

export const CS2Collection = () => {
  return (
    <section id="cs2-collection" className="py-24 bg-zinc-950 text-zinc-50 overflow-hidden relative border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">CS2 Collection</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              {PERSONAL_DATA.csSkinsDescription}
            </p>
          </div>
          <Link to="/cs2-collection" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors group border border-zinc-800 hover:border-zinc-600 px-6 py-3 rounded-full bg-zinc-900/50 backdrop-blur-sm">
            View the full collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CS_SKINS_DATA.map((skin) => (
            <SkinCard key={skin.name} skin={skin} />
          ))}
        </div>
      </div>
    </section>
  );
};
