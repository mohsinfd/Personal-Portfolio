import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Briefcase, Github, Linkedin, Mail } from 'lucide-react';
import { SITE_DATA } from '../data/site';

export const Hero = () => (
  <section id="top" className="pt-32 pb-20 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-tight mb-6 text-zinc-900 dark:text-zinc-50">
          {SITE_DATA.name}
        </h1>
        <p className="text-xl lg:text-2xl text-zinc-800 dark:text-zinc-200 mb-4 font-medium">
          {SITE_DATA.role}
        </p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
          {SITE_DATA.philosophy}
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-10 py-4 border-y border-zinc-200 dark:border-zinc-800">
          {SITE_DATA.proofStrip.map((proof, index) => (
            <React.Fragment key={index}>
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{proof}</span>
              {index < SITE_DATA.proofStrip.length - 1 && (
                <span className="text-zinc-300 dark:text-zinc-700 hidden sm:inline">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="flex flex-wrap items-center gap-6 mb-12">
          <a href="#resume" className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-6 py-3 rounded-xl font-medium transition-transform hover:scale-105">
            <FileText className="w-4 h-4" /> View Resume
          </a>
          <a href="#work" className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 px-6 py-3 rounded-xl font-medium transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800">
            <Briefcase className="w-4 h-4" /> Selected Work
          </a>
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400">
          <a href={SITE_DATA.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href={SITE_DATA.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href={`mailto:${SITE_DATA.email}`} className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <Mail className="w-4 h-4" /> Email
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);
