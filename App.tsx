import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, Link } from 'react-router-dom';
import CollectionPage from './CollectionPage';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronRight, 
  ChevronDown,
  ExternalLink, 
  Copy, 
  CheckCircle2, 
  Briefcase, 
  User, 
  Target,
  FileText,
  MapPin,
  Sun,
  Moon,
  Milestone,
  Zap,
  Code,
  Users,
  Eye,
  Terminal,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { SITE_DATA } from './data/site';
import { WORK_DATA } from './data/work';
import { EXPERIENCE_DATA } from './data/experience';
import { DEMOS_DATA } from './data/demos';
import { PERSONAL_DATA, CS_SKINS_DATA } from './data/personal';
import { WRITING_DATA } from './data/writing';
import { RESUME_TXT } from './constants';
import { Experience } from './types';

// --- Theme Implementation ---

const ThemeToggle = () => {
  const { isDark, toggleTheme } = React.useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-700"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
};

// --- Reusable Components ---

const Badge = ({ children, className = "" }: { children?: React.ReactNode; className?: string; key?: React.Key }) => (
  <span className={`px-3 py-1 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 ${className}`}>
    {children}
  </span>
);

const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string; subtitle?: string; icon?: any }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-2">
      {Icon && <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-serif">{title}</h2>
    </div>
    {subtitle && <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl">{subtitle}</p>}
  </div>
);

const Card = ({ children, className = "" }: { children?: React.ReactNode; className?: string; key?: React.Key }) => (
  <div className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 ${className}`}>
    {children}
  </div>
);

const NavLink = ({ href, children, active }: { href: string; children?: React.ReactNode; active?: boolean }) => (
  <a 
    href={href} 
    className={`text-sm font-medium transition-colors hover:text-indigo-600 dark:hover:text-indigo-400 ${active ? 'text-indigo-600 dark:text-indigo-400' : 'text-zinc-500 dark:text-zinc-400'}`}
  >
    {children}
  </a>
);

// --- Sections ---

const Hero = () => (
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
          <a href={SITE_DATA.github} target="_blank" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href={SITE_DATA.linkedin} target="_blank" className="flex items-center gap-2 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
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

const SelectedWorkSection = () => (
  <section id="work" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader 
        icon={Briefcase}
        title="Selected Work" 
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {WORK_DATA.map((cs) => (
          <Card key={cs.id} className="group relative overflow-hidden flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-3 font-serif group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors text-zinc-900 dark:text-zinc-100">{cs.title}</h3>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">{cs.thesis}</p>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div>
                <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-600 uppercase tracking-tighter mb-2">What I did & Why it mattered</h4>
                <ul className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2">
                  {cs.bullets.map((a, i) => (
                    <li key={i} className="flex gap-2">
                      <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {cs.links && cs.links.length > 0 && (
              <div className="flex gap-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                {cs.links.map((link) => (
                  <a key={link.label} href={link.href} className="text-xs font-bold flex items-center gap-1 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                    {link.label} <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const HowIWork = () => (
  <section id="how-i-work" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader 
        icon={Target}
        title={SITE_DATA.howIWork.headline} 
        subtitle={SITE_DATA.howIWork.subheading}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {SITE_DATA.howIWork.principles.map((p, i) => (
          <div key={i} className="bg-white dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <div className="w-10 h-10 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
              <span className="text-indigo-600 dark:text-indigo-400 font-mono font-bold text-sm">0{i+1}</span>
            </div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">{p.title}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{p.description}</p>
          </div>
        ))}
      </div>
      {SITE_DATA.howIWork.closingLine && (
        <div className="mt-16 text-center">
          <p className="text-lg font-serif italic text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            "{SITE_DATA.howIWork.closingLine}"
          </p>
        </div>
      )}
    </div>
  </section>
);

const TimelineItem = ({ experience, index }: { experience: Experience; index: number; key?: React.Key }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-800 group-last:bg-transparent"></div>
      <div className={`absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white dark:border-zinc-950 transition-colors ${experience.isCurrent ? 'bg-indigo-600 dark:bg-indigo-400 shadow-[0_0_0_4px_rgba(79,70,229,0.1)] dark:shadow-[0_0_0_4px_rgba(129,140,248,0.1)]' : 'bg-zinc-300 dark:bg-zinc-700'}`}></div>

      <div 
        className={`cursor-pointer group/item transition-all rounded-2xl p-4 -ml-4 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 ${isOpen ? 'bg-zinc-50 dark:bg-zinc-900/50' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover/item:text-indigo-600 dark:group-hover/item:text-indigo-400 transition-colors flex items-center gap-2">
              {experience.role}
              {experience.isCurrent && <span className="text-[10px] bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold">Current</span>}
            </h3>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{experience.company}</p>
          </div>
          <div className="flex flex-col md:items-end">
            <span className="text-xs font-mono text-zinc-400 dark:text-zinc-500">{experience.period}</span>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-600 uppercase tracking-tighter">{experience.location}</span>
          </div>
        </div>

        <motion.div 
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          className="overflow-hidden"
        >
          <div className="pt-4 space-y-3">
            {experience.description.map((bullet, i) => (
              <div key={i} className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <ChevronRight className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                <p>{bullet}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="mt-2 flex justify-center md:hidden">
          <ChevronDown className={`w-4 h-4 text-zinc-300 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </div>
    </div>
  );
};

const ExperienceTimeline = () => {
  const categories = [
    "Platform Leadership",
    "Systems & Scale",
    "Founder / Builder"
  ];

  let globalIndex = 0;

  return (
    <section id="experience" className="py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeader 
          icon={Milestone}
          title="Career Arc" 
        />
        <div className="mt-12 space-y-16">
          {categories.map((category) => {
            const categoryExperiences = EXPERIENCE_DATA.filter(exp => exp.category === category);
            if (categoryExperiences.length === 0) return null;

            return (
              <div key={category}>
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-8 flex items-center gap-4">
                  {category}
                  <div className="h-px bg-zinc-200 dark:bg-zinc-800 flex-grow"></div>
                </h3>
                <div>
                  {categoryExperiences.map((exp) => {
                    const currentIndex = globalIndex++;
                    return <TimelineItem key={exp.company + exp.period} experience={exp} index={currentIndex} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const EngineeringDemos = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? DEMOS_DATA : DEMOS_DATA.slice(0, 3);

  return (
    <section id="demos" className="py-24 bg-zinc-900 dark:bg-zinc-950 text-white transition-colors overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] -z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-6 h-6 text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-indigo-400">Engineering & Demos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Prototypes & Repos</h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Public repos, prototypes, docs, and demos I’ve used to accelerate alignment, pressure-test ideas, and unblock real product work.
            </p>
          </div>
          <a 
            href={SITE_DATA.github} 
            target="_blank"
            className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white text-white hover:text-black px-8 py-4 rounded-2xl font-bold transition-all text-sm backdrop-blur-sm border border-white/10"
          >
            <Github className="w-5 h-5 transition-transform group-hover:scale-110" /> See All Repositories
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="group bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between hover:bg-indigo-500/5 transition-all duration-300"
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/10">
                    <Code className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col items-end">
                     <div className="flex gap-1.5">
                        {project.tech.slice(0, 2).map(t => (
                          <span key={t} className="text-[9px] font-mono text-indigo-400/60">#{t}</span>
                        ))}
                     </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-mono mb-3 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-8 h-12 overflow-hidden line-clamp-2">
                  {project.description}
                </p>
                
                <div className="mb-8 p-5 bg-black/40 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                     <Zap className="w-3 h-3 text-indigo-400" />
                     <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-[0.2em]">Context</span>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed italic font-serif">"{project.subtitle}"</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <a 
                  href={project.repoUrl} 
                  target="_blank"
                  className="text-xs font-bold flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Eye className="w-4 h-4" /> {project.cta}
                </a>
                <div className="flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></div>
                   <span className="text-[9px] text-zinc-600 font-mono uppercase">Public</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {DEMOS_DATA.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2"
            >
              {showAll ? 'Show Less' : 'More Experiments'} <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const WritingSection = () => (
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
            <a key={i} href={post.href} className="block group">
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

const OutsideWork = () => (
  <section id="personal" className="py-24 bg-white dark:bg-zinc-950 transition-colors overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">
      <SectionHeader 
        icon={User}
        title="Outside Work" 
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-12">
          <div>
            <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 font-serif">
              {PERSONAL_DATA.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const SkinCard = ({ skin }: { skin: CSSkin }) => (
  <div className="min-w-[85vw] md:min-w-0 snap-center group relative bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 hover:bg-zinc-900/80 hover:border-zinc-700/50 transition-all duration-500 flex flex-col h-full backdrop-blur-sm">
    <div className="flex justify-between items-start mb-6">
      <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-zinc-950/50 px-3 py-1.5 rounded-full border border-zinc-800/50">
        {skin.category}
      </span>
      <div className="text-right">
        <div className="text-xs font-mono text-zinc-400">{skin.wear}</div>
        <div className="text-[10px] font-mono text-zinc-600 mt-1">Float: {skin.float}</div>
      </div>
    </div>
    
    <div className="relative aspect-[4/3] w-full mb-8 overflow-hidden rounded-xl bg-zinc-950/50 border border-zinc-800/30 flex items-center justify-center p-4">
      <img 
        src={skin.imageUrl} 
        alt={skin.name} 
        className="w-full h-full object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out drop-shadow-2xl"
      />
    </div>

    <div className="mt-auto">
      <h3 className="text-sm font-bold font-mono text-zinc-200 mb-3 group-hover:text-white transition-colors">{skin.name}</h3>
      <p className="text-xs text-zinc-500 leading-relaxed font-serif italic">"{skin.caption}"</p>
    </div>
  </div>
);

const CS2Collection = () => {
  return (
    <section id="cs2-collection" className="py-24 bg-zinc-950 text-zinc-50 overflow-hidden relative border-t border-zinc-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 opacity-50"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">CS2 Collection</h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              {PERSONAL_DATA.csSkinsDescription}
            </p>
          </div>
          <Link to="/cs2-collection" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-300 hover:text-white transition-colors group border border-zinc-800 hover:border-zinc-600 px-6 py-3 rounded-full bg-zinc-900/50 backdrop-blur-sm">
            View the full collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8 md:pb-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {CS_SKINS_DATA.map((skin) => (
            <SkinCard key={skin.name} skin={skin} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ResumeSection = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(RESUME_TXT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="resume" className="py-24 bg-zinc-50 dark:bg-zinc-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeader 
            icon={FileText}
            title="Full Resume" 
            subtitle="Optimized for ATS. Focused on results."
          />
          <div className="flex gap-3 mb-10">
            <button 
              onClick={copyToClipboard}
              className="inline-flex items-center gap-2 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all border border-zinc-200 dark:border-zinc-800"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              {copied ? 'Copied' : 'Copy Text'}
            </button>
            <a 
              href={SITE_DATA.cv} 
              className="inline-flex items-center gap-2 bg-indigo-600 dark:bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all shadow-sm"
            >
              <Download className="w-4 h-4" /> Download PDF
            </a>
          </div>
        </div>
        <Card className="bg-white dark:bg-zinc-950 p-8 border-dashed dark:border-zinc-800">
          <pre className="whitespace-pre-wrap font-mono text-sm text-zinc-700 dark:text-zinc-400 leading-6 max-h-[600px] overflow-y-auto scrollbar-hide">
            {RESUME_TXT}
          </pre>
        </Card>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold font-serif mb-4 text-zinc-900 dark:text-zinc-50">{SITE_DATA.name}</h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-sm mb-6">
            Building consumer fintech products with an evidence-first approach. Let's build something valuable together.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex gap-4">
              <a href={`mailto:${SITE_DATA.email}`} className="p-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
                <Mail className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
              </a>
              <a href={SITE_DATA.linkedin} target="_blank" className="p-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
                <Linkedin className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
              </a>
              <a href={SITE_DATA.github} target="_blank" className="p-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
                <Github className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
              </a>
            </div>
            <div className="w-px h-8 bg-zinc-200 dark:bg-zinc-800 ml-2"></div>
            <ThemeToggle />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#work" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400">Selected Work</a></li>
            <li><a href="#how-i-work" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400">How I Work</a></li>
            <li><a href="#experience" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400">Experience</a></li>
            <li><a href="#demos" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400">Demos</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-6">Location</h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-indigo-400" /> {SITE_DATA.location}
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-400 dark:text-zinc-600 gap-4">
        <p>© {new Date().getFullYear()} {SITE_DATA.name}. All rights reserved.</p>
        <p>Built with React, Framer Motion & Tailwind CSS.</p>
      </div>
    </div>
  </footer>
);

const PortfolioContent = () => {
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-serif font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50">
            MD.
          </a>
          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#work" active={activeSection === 'work'}>Work</NavLink>
            <NavLink href="#how-i-work" active={activeSection === 'how-i-work'}>How I Work</NavLink>
            <NavLink href="#experience" active={activeSection === 'experience'}>Experience</NavLink>
            <NavLink href="#demos" active={activeSection === 'demos'}>Demos</NavLink>
            <NavLink href="#notes" active={activeSection === 'notes'}>Notes</NavLink>
            <NavLink href="#personal" active={activeSection === 'personal'}>Personal</NavLink>
            <NavLink href="#resume" active={activeSection === 'resume'}>Resume</NavLink>
            <div className="w-px h-4 bg-zinc-200 dark:bg-zinc-800"></div>
            <ThemeToggle />
          </div>
          <a 
            href={`mailto:${SITE_DATA.email}`} 
            className="hidden sm:inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-zinc-800 dark:hover:bg-white transition-all shadow-sm"
          >
            Contact
          </a>
          <div className="md:hidden">
             <ThemeToggle />
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <SelectedWorkSection />
        <HowIWork />
        <ExperienceTimeline />
        <EngineeringDemos />
        <WritingSection />
        <OutsideWork />
        <CS2Collection />
        <ResumeSection />
      </main>

      <Footer />

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:hidden">
        <div className="bg-zinc-900/90 dark:bg-zinc-100/90 text-white dark:text-zinc-900 px-6 py-2.5 rounded-full shadow-2xl backdrop-blur-md text-[10px] font-bold uppercase tracking-widest flex gap-4 border border-white/10 dark:border-black/10">
          <a href="#work">Work</a>
          <a href="#demos">Demos</a>
          <a href="#resume">CV</a>
        </div>
      </div>
    </div>
  );
};

export default function Portfolio() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Routes>
        <Route path="/" element={<PortfolioContent />} />
        <Route path="/cs2-collection" element={<CollectionPage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
});
