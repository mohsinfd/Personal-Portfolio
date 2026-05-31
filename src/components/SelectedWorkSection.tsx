import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Briefcase, Building2, Gamepad2, Network, Rocket } from 'lucide-react';
import { WORK_DATA } from '../data/work';
import { SectionHeader } from './ui';

const getCardVisuals = (id: string) => {
  switch (id) {
    case 'bankkaro': return { Icon: Building2, accent: 'text-blue-600 dark:text-blue-400', accentBar: 'bg-blue-500', tag: 'Consumer fintech / platform', asset: '/assets/work-bankkaro.svg', alt: 'BankKaro and great.cards artifact showing API docs, recommendation logic, and lender API flows', proofRow: ['API flows', 'great.cards', 'SBI + Axis', 'whitelabel demos'] };
    case 'fanclash': return { Icon: Gamepad2, accent: 'text-violet-600 dark:text-violet-400', accentBar: 'bg-violet-500', tag: 'Live gaming / retention', asset: '/assets/work-fanclash.svg', alt: 'FanClash artifact showing live fantasy loops, scoring signals, and retention rhythm', proofRow: ['live loops', 'retention', 'scoring data', 'CV engine'] };
    case 'systems-at-scale': return { Icon: Network, accent: 'text-emerald-600 dark:text-emerald-400', accentBar: 'bg-emerald-500', tag: 'Regulated systems / scale', asset: '/assets/work-scale.svg', alt: 'Proof grid artifact for scale work across KYC, loyalty, SaaS, and internal tools', proofRow: ['150+ countries', '700M+ profiles', 'KYC', 'internal tools'] };
    case 'founder-builder': return { Icon: Rocket, accent: 'text-orange-600 dark:text-orange-400', accentBar: 'bg-orange-500', tag: 'Founder / operator', asset: '/assets/work-founder.svg', alt: 'Founder artifact showing supply, operations, and customer experience triangle', proofRow: ['200+ hotels', 'web + mobile', 'supply', 'post-sale'] };
    default: return { Icon: Briefcase, accent: 'text-zinc-600 dark:text-zinc-400', accentBar: 'bg-zinc-500', tag: 'Selected work', asset: '', alt: '', proofRow: [] };
  }
};

export const SelectedWorkSection = () => (
  <section id="work" className="py-24 bg-white dark:bg-zinc-950 transition-colors relative">
    <div className="max-w-6xl mx-auto px-6 relative z-10">
      <div className="max-w-3xl">
        <SectionHeader
          icon={Briefcase}
          title="Selected Work"
          subtitle="Fintech, gaming, scale, and founder work, kept short."
          eyebrow="01 / Work"
        />
      </div>

      <div className="space-y-5">
        {WORK_DATA.map((cs, index) => {
          const { Icon, accent, accentBar, tag, asset, alt, proofRow } = getCardVisuals(cs.id || '');
          return (
            <motion.article
              key={cs.id}
              className="group relative grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-950 overflow-hidden transition-colors hover:border-zinc-300 dark:hover:border-zinc-700"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.42, delay: index * 0.04, ease: 'easeOut' }}
            >
              <span className={`absolute left-0 top-0 h-1 w-full lg:h-full lg:w-1 ${accentBar}`} />
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900/50 border-b lg:border-b-0 lg:border-r border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{String(index + 1).padStart(2, '0')}</span>
                  <Icon className={`w-5 h-5 ${accent}`} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">{tag}</p>
                <h3 className="text-2xl font-bold font-serif text-zinc-950 dark:text-zinc-50 leading-tight">{cs.title}</h3>
                {cs.links && cs.links.length > 0 && (
                  <div className="mt-8 flex flex-wrap gap-2">
                    {cs.links.map((link) => (
                      <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 py-1.5 text-[11px] font-bold text-zinc-700 transition-colors hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white">
                        {link.label} <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
                {asset ? (
                  <div className="mt-8 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-transform duration-300 ease-out group-hover:-translate-y-1">
                    <img
                      src={asset}
                      alt={alt}
                      className="w-full aspect-[16/10] object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                ) : null}
              </div>

              <div className="p-6 lg:p-8">
                <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 max-w-2xl">
                  {cs.rootProblem}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {proofRow.map((item) => (
                    <span key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-400">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-7 grid grid-cols-1 xl:grid-cols-[1fr_0.8fr] gap-8">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">What changed</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                      {cs.built?.slice(0, 4).map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                          <span className="mt-2 h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500 mb-3">Why it matters</p>
                    <p className="text-sm leading-relaxed font-medium text-zinc-800 dark:text-zinc-200">{cs.whyItMattered}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>
);
