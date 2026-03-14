import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Milestone, ChevronRight, ChevronDown } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/experience';
import { Experience } from '../types';
import { SectionHeader } from './ui';

const TimelineItem = ({ experience, index }: { experience: Experience; index: number; key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 group-last:bg-transparent"></div>
      <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-zinc-950 transition-colors ${experience.isCurrent ? 'bg-indigo-600 dark:bg-indigo-400 shadow-[0_0_0_4px_rgba(79,70,229,0.1)] dark:shadow-[0_0_0_4px_rgba(129,140,248,0.1)]' : 'bg-zinc-300 dark:bg-zinc-700'}`}></div>

      <div 
        className={`cursor-pointer group/item transition-all rounded-2xl p-4 -ml-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 ${isOpen ? 'bg-zinc-50 dark:bg-zinc-900/50' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors flex items-center gap-2">
              {experience.role}
              {experience.isCurrent && <span className="text-[10px] bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Current</span>}
            </h3>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{experience.company}</p>
          </div>
          <div className="flex flex-col md:items-end">
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">{experience.period}</span>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-tighter">{experience.location}</span>
          </div>
        </div>

        <motion.div 
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="pt-4 space-y-3">
            {experience.description.map((bullet, i) => (
              <div key={i} className="flex gap-3 text-sm text-zinc-500 dark:text-zinc-400 leading-loose">
                <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-1" />
                <p>{bullet}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="mt-2 flex justify-center md:hidden">
          <ChevronDown className={`w-4 h-4 text-zinc-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
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

  let globalIndex = 0;

  return (
    <section id="experience" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader 
          icon={Milestone}
          title="Career Arc" 
        />
        <div className="mt-12 space-y-16">
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
                  {categoryExperiences.map((exp) => {
                    const currentIndex = globalIndex++;
                    return <TimelineItem key={exp.company + exp.period} experience={exp} index={currentIndex} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
