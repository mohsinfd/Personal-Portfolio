import React from 'react';
import { BookOpen } from 'lucide-react';
import { WRITING_DATA } from '../data/writing';
import { SectionHeader } from './ui';

export const WritingSection = () => (
  <section id="notes" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors">
    <div className="max-w-5xl mx-auto px-6">
      <SectionHeader
        icon={BookOpen}
        title="Notes on Product and Systems"
        subtitle="Drafts I plan to turn into essays. For now, they stay as notes."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
        {WRITING_DATA.map((post) => (
          <article
            key={post.title}
            className="bg-white dark:bg-zinc-950 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500">
                {post.status}
              </span>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600">
                Field note
              </span>
            </div>

            <h3 className="text-xl font-bold font-serif text-zinc-950 dark:text-zinc-50 mb-3 leading-snug">
              {post.title}
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{post.tldr}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
