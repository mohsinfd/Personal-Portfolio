import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Code, Zap, Eye, ChevronDown } from 'lucide-react';
import { DEMOS_DATA } from '../data/demos';
import { SITE_DATA } from '../data/site';

export const EngineeringDemos = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? DEMOS_DATA : DEMOS_DATA.slice(0, 3);

  return (
    <section id="demos" className="py-24 bg-zinc-900 dark:bg-zinc-950 text-white transition-colors overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-6 h-6 text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">Engineering & Demos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Things I build to make the work move</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Public repos, prototypes, docs, and experiments that helped clarify a product, unlock a conversation, or make a system more concrete than a deck could.
            </p>
          </div>
          <a 
            href={SITE_DATA.github} 
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-black px-8 py-4 rounded-2xl font-bold transition-all text-sm backdrop-blur-sm border border-white/10"
          >
            <Github className="w-5 h-5 transition-transform group-hover:scale-110" /> See All Repositories
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:bg-indigo-500/5 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/10">
                    <Code className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-end">
                     <div className="flex gap-1.5">
                        {project.tech.slice(0, 2).map(t => (
                          <span key={t} className="text-[9px] font-mono text-indigo-400/60">#{t}</span>
                        ))}
                     </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-mono mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-8 h-12 overflow-hidden line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mb-8 p-5 bg-black/40 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                     <Zap className="w-3 h-3 text-indigo-400" />
                     <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-[0.2em]">Context</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed italic font-serif">"{project.subtitle}"</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <a 
                  href={project.repoUrl} 
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Eye className="w-4 h-4" /> {project.cta}
                </a>
                <div className="flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                   <span className="text-[9px] text-zinc-600 font-mono uppercase">Public</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {DEMOS_DATA.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2"
            >
              {showAll ? 'Show Less' : 'More Experiments'} <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
