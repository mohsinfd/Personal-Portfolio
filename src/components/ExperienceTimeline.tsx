import React from 'react';
import { Milestone } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/experience';
import { Experience } from '../types';
import { SectionHeader } from './ui';

const TimelineItem = ({ experience }: { experience: Experience; key?: React.Key }) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0 group">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 group-last:bg-transparent"></div>
      <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-zinc-950 ${experience.isCurrent ? 'bg-indigo-600 dark:bg-indigo-400' : 'bg-zinc-300 dark:bg-zinc-700'}`}></div>

      <div className="rounded-lg p-4 -ml-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              {experience.role}
              {experience.isCurrent && (
                <span className="text-[10px] bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">
                  Current
                </span>
              )}
            </h3>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{experience.company}</p>
          </div>
          <div className="flex flex-col md:items-end">
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">{experience.period}</span>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-tighter">{experience.location}</span>
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-2xl">
          {experience.description[0]}
        </p>
      </div>
    </div>
  );
};

export const ExperienceTimeline = () => {
  const categories = [
    "Platform Leadership",
    "Systems & Scale",
    "Founder / Builder"
  ];

  return (
    <section id="experience" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader 
          icon={Milestone}
          title="Career Arc" 
          subtitle="A compact timeline. The resume carries the details."
        />
        <div className="mt-10 space-y-12">
          {categories.map((category) => {
            const categoryExperiences = EXPERIENCE_DATA.filter(exp => exp.category === category);
            if (categoryExperiences.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8 flex items-center gap-4">
                  {category}
                  <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow"></div>
                </h3>
                <div>
                  {categoryExperiences.map((exp) => (
                    <TimelineItem key={exp.company + exp.period} experience={exp} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
