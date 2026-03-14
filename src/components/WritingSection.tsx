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
        subtitle="Thoughts on building, scaling, and the craft of product management."
      />
      <div className="space-y-6 mt-12">
        {WRITING_DATA.length > 0 ? (
          WRITING_DATA.map((post, i) => (
            <a key={i} href={post.href !== "#" ? post.href : undefined} className="block group">
              <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 transition-all hover:border-indigo-500/30 hover:shadow-md">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">{post.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{post.tldr}</p>
              </div>
            </a>
          ))
        ) : (
          <div className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 italic">Writing in progress. Publishing soon.</p>
          </div>
        )}
      </div>
    </div>
  </section>
);
