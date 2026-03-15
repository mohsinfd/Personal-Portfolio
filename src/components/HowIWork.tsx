import React from 'react';
import { Target, Layers, Zap, Code2, LineChart, ArrowUpDown } from 'lucide-react';
import { SITE_DATA } from '../data/site';
import { SectionHeader } from './ui';

const getPrincipleIcon = (index: number) => {
  switch (index) {
    case 0: return Layers;
    case 1: return Zap;
    case 2: return Code2;
    case 3: return LineChart;
    case 4: return ArrowUpDown;
    default: return Target;
  }
};

export const HowIWork = () => (
  <section id="how-i-work" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader 
        icon={Target}
        title={SITE_DATA.howIWork.headline} 
        subtitle={SITE_DATA.howIWork.subheading}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {SITE_DATA.howIWork.principles.map((p, i) => {
          const Icon = getPrincipleIcon(i);
          return (
            <div key={i} className="group bg-white dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 dark:group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">{p.title}</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{p.description}</p>
            </div>
          );
        })}
      </div>
      {SITE_DATA.howIWork.closingLine && (
        <div className="mt-20 text-center relative max-w-3xl mx-auto">
          <div className="absolute top-1/2 left-0 w-12 h-px bg-zinc-300 dark:bg-zinc-700" />
          <div className="absolute top-1/2 right-0 w-12 h-px bg-zinc-300 dark:bg-zinc-700" />
          <p className="text-xl font-serif italic text-zinc-700 dark:text-zinc-300 px-8">
            "{SITE_DATA.howIWork.closingLine}"
          </p>
        </div>
      )}
    </div>
  </section>
);
