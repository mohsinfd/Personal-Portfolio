import React from 'react';
import { Target } from 'lucide-react';
import { SITE_DATA } from '../data/site';
import { SectionHeader } from './ui';

export const HowIWork = () => (
  <section id="how-i-work" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader 
        icon={Target}
        title={SITE_DATA.howIWork.headline} 
        subtitle={SITE_DATA.howIWork.subheading}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {SITE_DATA.howIWork.principles.map((p, i) => (
          <div key={i} className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
              <span className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-sm">0{i+1}</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{p.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
      {SITE_DATA.howIWork.closingLine && (
        <div className="mt-16 text-center">
          <p className="text-lg font-serif italic text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            "{SITE_DATA.howIWork.closingLine}"
          </p>
        </div>
      )}
    </div>
  </section>
);
