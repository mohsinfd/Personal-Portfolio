import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Download, Github, Linkedin, Mail, NotebookText } from 'lucide-react';
import { SITE_DATA } from '../data/site';

const currentNotes = [
  { label: 'Cards + loans', text: 'recommendation logic, calculators, lender APIs' },
  { label: 'Partner work', text: 'docs, demos, whitelabel launches' },
  { label: 'Build mode', text: 'quick prototypes before the idea becomes a roadmap' }
];

export const Hero = () => (
  <section id="top" className="pt-24 sm:pt-28 pb-20 px-5 sm:px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.65fr)] gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.24em] text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {SITE_DATA.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-serif leading-[1.02] lg:leading-[0.96] mb-7 text-zinc-950 dark:text-zinc-50 tracking-tight">
            {SITE_DATA.heroHeadline}
          </h1>
          <p className="text-lg lg:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-3xl">
            {SITE_DATA.philosophy}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 mb-10 overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900/50">
            {SITE_DATA.proofStrip.map((proof, index) => (
              <div
                key={proof.title}
                className={`p-4 sm:p-5 border-zinc-200 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 ${
                  index < 2 ? 'sm:border-b' : ''
                } ${
                  index % 2 === 0 ? 'sm:border-r' : ''
                } ${index < SITE_DATA.proofStrip.length - 1 ? 'border-b' : ''} ${
                  index === 2 ? 'sm:border-b-0' : ''
                }`}
              >
                <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50 mb-2">
                  {proof.title}
                </h2>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {proof.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a href="#work" className="inline-flex items-center gap-2 bg-zinc-950 dark:bg-zinc-100 text-white dark:text-zinc-950 px-6 py-3 rounded-lg font-medium transition-colors hover:bg-zinc-800 dark:hover:bg-white shadow-sm">
              <Briefcase className="w-4 h-4" /> View Selected Work
            </a>
            <a href={SITE_DATA.cv} className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 px-6 py-3 rounded-lg font-medium transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800">
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>

          <div className="flex items-center gap-7 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href={SITE_DATA.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
            <a href={SITE_DATA.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href={`mailto:${SITE_DATA.email}`} className="flex items-center gap-2 hover:text-zinc-950 dark:hover:text-zinc-100 transition-colors">
              <Mail className="w-4 h-4" /> Email
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="quiet-pulse w-full overflow-hidden bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm"
        >
          <div className="bg-zinc-50 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 p-3">
            <img
              src="/assets/hero-systems-map.svg"
              alt="Diagram of Mohsin Dingankar's product leadership system connecting user signals, product logic, partner APIs, and launch proof"
              className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-white"
              loading="eager"
            />
          </div>
          <div className="px-6 py-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-400 dark:text-zinc-500 mb-2">Operating Brief</p>
              <h2 className="text-xl font-bold font-serif text-zinc-950 dark:text-zinc-50">Current focus</h2>
            </div>
            <NotebookText className="w-5 h-5 text-zinc-400" />
          </div>
          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {currentNotes.map((note) => (
              <div key={note.label} className="grid grid-cols-1 sm:grid-cols-[92px_1fr] gap-2 sm:gap-4 px-5 sm:px-6 py-5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{note.label}</div>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{note.text}</p>
              </div>
            ))}
          </div>
          <p className="px-6 py-5 text-sm font-serif italic text-zinc-600 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
            "{SITE_DATA.microLine}"
          </p>
        </motion.aside>
      </div>
    </div>
  </section>
);
