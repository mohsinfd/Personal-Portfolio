import React from 'react';
import { Briefcase, ChevronRight, ExternalLink, Building2, Gamepad2, Network, Rocket } from 'lucide-react';
import { WORK_DATA } from '../data/work';
import { Card, SectionHeader } from './ui';

const getCardVisuals = (id: string) => {
  switch (id) {
    case 'bankkaro': return { Icon: Building2, color: 'text-blue-500 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-500/10' };
    case 'fanclash': return { Icon: Gamepad2, color: 'text-violet-500 dark:text-violet-400', bg: 'bg-violet-50 dark:bg-violet-500/10' };
    case 'systems-at-scale': return { Icon: Network, color: 'text-emerald-500 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-500/10' };
    case 'founder-builder': return { Icon: Rocket, color: 'text-orange-500 dark:text-orange-400', bg: 'bg-orange-50 dark:bg-orange-500/10' };
    default: return { Icon: Briefcase, color: 'text-indigo-500 dark:text-indigo-400', bg: 'bg-indigo-50 dark:bg-indigo-500/10' };
  }
};

export const SelectedWorkSection = () => (
  <section id="work" className="py-24 bg-white dark:bg-zinc-950 transition-colors relative">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <SectionHeader 
        icon={Briefcase}
        title="Selected Work" 
      />
      <div className="mt-10 mb-16 bg-zinc-50 dark:bg-zinc-900/40 rounded-3xl p-8 lg:p-10 border border-zinc-200/80 dark:border-zinc-800/80 max-w-4xl shadow-sm">
        <h3 className="text-xl font-bold font-serif text-zinc-900 dark:text-zinc-100 mb-6">The problems I'm usually drawn to:</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm text-zinc-600 dark:text-zinc-400">
          <li className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/80 mt-1.5 flex-shrink-0" />
            <span>Complex decisions that are hard to make legible for users</span>
          </li>
          <li className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/80 mt-1.5 flex-shrink-0" />
            <span>Products whose visible UX is weaker than the underlying opportunity</span>
          </li>
          <li className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/80 mt-1.5 flex-shrink-0" />
            <span>Systems that need cleaner rails before they need more features</span>
          </li>
          <li className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/80 mt-1.5 flex-shrink-0" />
            <span>Categories where interaction models are stale, shallow, or copied from elsewhere</span>
          </li>
          <li className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/80 mt-1.5 flex-shrink-0" />
            <span>High-ambiguity builds that need both structure and momentum</span>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {WORK_DATA.map((cs) => {
          const { Icon, color, bg } = getCardVisuals(cs.id || '');
          return (
            <Card key={cs.id} className="group relative overflow-hidden flex flex-col h-full hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
              
              {/* Visual Header / Logo Placeholder */}
              <div className={`w-full h-32 ${bg} mb-6 rounded-t-lg flex items-center justify-center transition-colors duration-300`}>
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm transform group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-8 h-8 ${color}`} />
                </div>
              </div>

              <div className="px-2 flex-grow flex flex-col pb-2">
                <h3 className="text-2xl font-bold mb-6 font-serif group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-zinc-900 dark:text-zinc-100">{cs.title}</h3>
                
                <div className="space-y-6 flex-grow flex flex-col">
                  {/* Root Problem */}
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2">Root Problem</h4>
                    <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">{cs.rootProblem}</p>
                  </div>
                  
                  {/* Product Belief */}
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2">Product Belief</h4>
                    <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed italic border-l-2 border-indigo-400 dark:border-indigo-500/70 pl-3 py-0.5">"{cs.productBelief}"</p>
                  </div>

                  {/* What I Built */}
                  <div>
                    <h4 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-3">What I Built</h4>
                    <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2.5 leading-relaxed">
                      {cs.built?.map((a, i) => (
                        <li key={i} className="flex gap-3 items-start">
                          <ChevronRight className="w-3.5 h-3.5 text-indigo-400 dark:text-indigo-500 flex-shrink-0 mt-0.5" />
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Why it Mattered */}
                  <div className="pt-2 mt-auto">
                    <h4 className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-2">Why It Mattered</h4>
                    <div className="text-sm font-medium text-indigo-950 dark:text-indigo-100/90 leading-relaxed bg-indigo-50/60 dark:bg-indigo-900/10 p-4 rounded-xl border border-indigo-100/50 dark:border-indigo-800/30">
                      {cs.whyItMattered}
                    </div>
                  </div>
                </div>

                {cs.links && cs.links.length > 0 && (
                  <div className="flex gap-4 pt-6 mt-6 border-t border-zinc-100 dark:border-zinc-800/60">
                    {cs.links.map((link) => (
                      <a key={link.label} href={link.href} className="text-xs font-bold flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors bg-indigo-50 dark:bg-indigo-900/20 px-3 py-1.5 rounded-md">
                        {link.label} <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  </section>
);
