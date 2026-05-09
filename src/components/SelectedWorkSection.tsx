import React from 'react';
import { ArrowUpRight, Briefcase, Building2, Gamepad2, Network, Rocket } from 'lucide-react';
import { WORK_DATA } from '../data/work';
import { SectionHeader } from './ui';

const getCardVisuals = (id: string) => {
  switch (id) {
    case 'bankkaro': return { Icon: Building2, accent: 'text-blue-600 dark:text-blue-400', tag: 'Consumer fintech / platform', asset: '/assets/work-bankkaro.svg', alt: 'BankKaro and great.cards product system diagram for spend signals, recommendation logic, and bank API rails' };
    case 'fanclash': return { Icon: Gamepad2, accent: 'text-violet-600 dark:text-violet-400', tag: 'Live gaming / retention', asset: '/assets/work-fanclash.svg', alt: 'FanClash product diagram showing live fantasy loops, engagement signals, and scoring systems' };
    case 'systems-at-scale': return { Icon: Network, accent: 'text-emerald-600 dark:text-emerald-400', tag: 'Regulated systems / scale', asset: '/assets/work-systems.svg', alt: 'Systems at scale diagram for KYC, risk, data, operations, UX, and support rails' };
    case 'founder-builder': return { Icon: Rocket, accent: 'text-orange-600 dark:text-orange-400', tag: 'Founder / operator', asset: '/assets/work-founder.svg', alt: 'Founder builder diagram connecting supply, product, operations, and business model work' };
    default: return { Icon: Briefcase, accent: 'text-zinc-600 dark:text-zinc-400', tag: 'Selected work', asset: '/assets/hero-systems-map.svg', alt: 'Selected product leadership work diagram' };
  }
};

const problemTypes = [
  'unclear user decisions',
  'weak rails under polished surfaces',
  'partner and API constraints',
  'teams needing structure before certainty',
  'systems where UX, GTM, and operations are inseparable'
];

export const SelectedWorkSection = () => (
  <section id="work" className="py-24 bg-white dark:bg-zinc-950 transition-colors relative">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <SectionHeader
          icon={Briefcase}
          title="Selected Work"
          subtitle="A few environments where the useful work was not just making screens better, but making the underlying system more legible."
        />
      </div>

      <div className="mb-14 border-y border-zinc-200 dark:border-zinc-800 py-6">
        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-zinc-400 dark:text-zinc-500">Recurring problems</h3>
          <div className="flex flex-wrap gap-2">
            {problemTypes.map((problem) => (
              <span key={problem} className="px-3 py-1.5 rounded-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400">
                {problem}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {WORK_DATA.map((cs, index) => {
          const { Icon, accent, tag, asset, alt } = getCardVisuals(cs.id || '');
          return (
            <article key={cs.id} className="group grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950 overflow-hidden transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg">
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900/45 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{String(index + 1).padStart(2, '0')}</span>
                  <Icon className={`w-5 h-5 ${accent}`} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">{tag}</p>
                <h3 className="text-2xl font-bold font-serif text-zinc-950 dark:text-zinc-50 leading-tight">{cs.title}</h3>
                {cs.links && cs.links.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {cs.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 rounded-md px-2.5 py-1.5 bg-white dark:bg-zinc-950">
                        {link.label} <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
                <div className="mt-8 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
                  <img
                    src={asset}
                    alt={alt}
                    className="w-full aspect-[16/10] object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="p-6 lg:p-8">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">Context</p>
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{cs.rootProblem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">Product Belief</p>
                    <p className="text-sm leading-relaxed text-zinc-800 dark:text-zinc-200 font-serif italic">"{cs.productBelief}"</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-1 xl:grid-cols-[1fr_0.85fr] gap-8">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">What changed</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {cs.built?.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          <span className="mt-2 h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">Why it mattered</p>
                    <p className="text-sm leading-relaxed font-medium text-zinc-800 dark:text-zinc-200">{cs.whyItMattered}</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
