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
        subtitle="Short field notes on product judgment, messy systems, APIs, decision products, and the work underneath the interface."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
        {WRITING_DATA.map((post) => (
          <article
            key={post.title}
            className="bg-white dark:bg-zinc-950 p-6 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500">
                {post.status}
              </span>
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-600">
                Drafting
              </span>
            </div>

            <h3 className="text-xl font-bold font-serif text-zinc-950 dark:text-zinc-50 mb-3 leading-snug">
              {post.title}
            </h3>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{post.tldr}</p>
          </article>
        ))}
      </div>

      <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-500 max-w-2xl">
        These are being shaped from product memos, build logs, and real work. For now, the work sections carry the argument.
      </p>
    </div>
  </section>
);
