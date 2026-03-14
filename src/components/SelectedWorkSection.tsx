import React from 'react';
import { Briefcase, ChevronRight, ExternalLink } from 'lucide-react';
import { WORK_DATA } from '../data/work';
import { Card, SectionHeader } from './ui';

export const SelectedWorkSection = () => (
  <section id="work" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader 
        icon={Briefcase}
        title="Selected Work" 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {WORK_DATA.map((cs) => (
          <Card key={cs.id} className="group relative overflow-hidden flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-3 font-serif group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-zinc-900 dark:text-zinc-100">{cs.title}</h3>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-6 leading-loose">{cs.thesis}</p>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div>
                <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-tighter mb-2">What I did & Why it mattered</h4>
                <ul className="text-sm text-zinc-500 dark:text-zinc-400 space-y-3 leading-relaxed">
                  {cs.bullets.map((a, i) => (
                    <li key={i} className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {cs.links && cs.links.length > 0 && (
              <div className="flex gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {cs.links.map((link) => (
                  <a key={link.label} href={link.href} className="text-xs font-bold flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                    {link.label} <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  </section>
);
