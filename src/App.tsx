import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
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
import { SelectedWork } from './types';
import { Hero } from './components/Hero';
import { SelectedWorkSection } from './components/SelectedWorkSection';
import { HowIWork } from './components/HowIWork';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EngineeringDemos } from './components/EngineeringDemos';
import { WritingSection } from './components/WritingSection';
import { OutsideWork } from './components/OutsideWork';
import { CS2Collection } from './components/CS2Collection';

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
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    return () => {
      lenis.destroy();
    };
  }, []);

  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (location.pathname === '/cs2-collection') {
      setIsDark(true);
    }
  }, [location.pathname]);

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
