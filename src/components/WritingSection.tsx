import React from 'react';
import { BookOpen } from 'lucide-react';
import { WRITING_DATA } from '../data/writing';
import { SectionHeader } from './ui';

export const WritingSection = () => (
  <section id="notes" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors">
    <div className="max-w-4xl mx-auto px-6">
      <SectionHeader
        icon={BookOpen}
        title="Notes on Product and Systems"
        subtitle="Draft notes from product memos, build logs, and systems work. For now, the work sections carry the argument."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {WRITING_DATA.map((post) => (
          <article key={post.title} className="bg-white dark:bg-zinc-950 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <span className="inline-flex mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800 rounded-md px-2 py-1">
              Drafting
            </span>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-3">{post.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{post.tldr}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
