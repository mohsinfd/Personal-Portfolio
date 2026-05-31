import React from 'react';
import { Target } from 'lucide-react';
import { SITE_DATA } from '../data/site';
import { SectionHeader } from './ui';

export const HowIWork = () => (
  <section id="how-i-work" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 lg:gap-16">
        <div>
          <SectionHeader
            icon={Target}
            title={SITE_DATA.howIWork.headline}
            subtitle={SITE_DATA.howIWork.subheading}
            eyebrow="02 / Principles"
          />
          {SITE_DATA.howIWork.closingLine && (
            <p className="hidden lg:block mt-12 text-xl font-serif italic leading-relaxed text-zinc-700 dark:text-zinc-300">
              "{SITE_DATA.howIWork.closingLine}"
            </p>
          )}
        </div>

        <div className="border-y border-zinc-200 dark:border-zinc-800">
          {SITE_DATA.howIWork.principles.map((principle, index) => (
            <article key={principle.title} className="grid grid-cols-1 md:grid-cols-[96px_220px_1fr] gap-4 md:gap-8 py-7 border-b last:border-b-0 border-zinc-200 dark:border-zinc-800">
              <div className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 leading-snug">
                {principle.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {principle.description}
              </p>
            </article>
          ))}
        </div>

        {SITE_DATA.howIWork.closingLine && (
          <p className="lg:hidden text-xl font-serif italic leading-relaxed text-zinc-700 dark:text-zinc-300">
            "{SITE_DATA.howIWork.closingLine}"
          </p>
        )}
      </div>
    </div>
  </section>
);
