import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Briefcase, Github, Linkedin, Mail } from 'lucide-react';
import { SITE_DATA } from '../data/site';

export const Hero = () => (
  <section id="top" className="pt-32 pb-20 px-6 bg-zinc-50 dark:bg-zinc-950 transition-colors relative overflow-hidden">
    {/* Subtle animated background gradient */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start justify-between">
        {/* Left Column (Text) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:w-3/5"
        >
          <h1 className="text-5xl lg:text-7xl font-bold font-serif leading-tight mb-6 text-zinc-900 dark:text-zinc-50 tracking-tight">
            {SITE_DATA.name}
          </h1>
          <p className="text-xl lg:text-2xl text-zinc-800 dark:text-zinc-200 mb-6 font-medium">
            {SITE_DATA.role}
          </p>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-2xl">
            {SITE_DATA.philosophy}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            {SITE_DATA.proofStrip.map((proof, index) => (
              <div key={index} className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{proof}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a href="#resume" className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-7 py-3.5 rounded-xl font-medium transition-transform hover:-translate-y-0.5 shadow-lg shadow-zinc-900/10 dark:shadow-white/10">
              <FileText className="w-4 h-4" /> View Resume
            </a>
            <a href="#work" className="inline-flex items-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 px-7 py-3.5 rounded-xl font-medium transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:-translate-y-0.5">
              <Briefcase className="w-4 h-4" /> Selected Work
            </a>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href={SITE_DATA.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Github className="w-5 h-5" /> <span className="hidden sm:inline">GitHub</span>
            </a>
            <a href={SITE_DATA.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Linkedin className="w-5 h-5" /> <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href={`mailto:${SITE_DATA.email}`} className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              <Mail className="w-5 h-5" /> <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column (Image Placeholder) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-2/5 flex justify-center lg:justify-end w-full max-w-md lg:max-w-none"
        >
          <div className="relative w-full aspect-square max-w-[400px]">
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border border-zinc-200 dark:border-zinc-800 scale-105" />
            <div className="absolute inset-0 rounded-full border border-zinc-100 dark:border-zinc-900 scale-110" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-4 border-white dark:border-zinc-950 shadow-2xl flex items-center justify-center group">
              {/* Abstract Unsplash Placeholder for "Systems/Fintech" vibe */}
              <img 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" 
                alt="Profile Placeholder"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Optional overlay text if image fails or to act as a placeholder label
              <div className="absolute inset-0 flex items-center justify-center bg-zinc-900/40 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <span className="font-medium">Update LinkedIn Photo</span>
              </div> */}
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <div className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Building Fintech<br/><span className="text-xs text-zinc-500 font-normal">Available for new roles</span></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
