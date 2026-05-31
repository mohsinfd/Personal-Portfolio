import React, { useState } from 'react';
import { ChevronDown, ExternalLink, Github, Terminal } from 'lucide-react';
import { DEMOS_DATA } from '../data/demos';
import { SITE_DATA } from '../data/site';

export const EngineeringDemos = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? DEMOS_DATA : DEMOS_DATA.slice(0, 3);

  return (
    <section id="demos" className="py-24 bg-zinc-950 text-white transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-5 h-5 text-zinc-400" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Artifacts</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6">Artifacts from the workbench</h2>
          </div>
          <div className="lg:pt-12">
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Public docs, prototypes, and tools that made an idea easier to test, explain, or operate.
            </p>
            <a
              href={SITE_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-white/15 bg-white/5 hover:bg-white hover:text-zinc-950 text-white px-5 py-3 rounded-lg font-bold transition-all text-sm"
            >
              <Github className="w-4 h-4" /> See all repositories
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {visibleProjects.map((project) => (
            <article key={project.title} className="bg-zinc-950 p-6 md:p-7 flex flex-col min-h-[280px]">
              <div className="flex items-start justify-between gap-4 mb-7">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 border border-white/10 rounded-md px-2.5 py-1.5">
                  {project.artifactType}
                </span>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span key={tech} className="text-[10px] font-mono text-zinc-500">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl font-bold font-serif text-zinc-50 mb-3">{project.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed mb-7">{project.description}</p>

              <div className="mt-auto">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-zinc-200 hover:text-white transition-colors"
                >
                  {project.cta} <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {DEMOS_DATA.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm font-bold text-zinc-300 hover:text-white transition-colors flex items-center gap-2"
            >
              {showAll ? 'Show fewer artifacts' : 'Show more artifacts'} <ChevronDown className={`w-4 h-4 transition-transform ${showAll ? 'rotate-180' : ''}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
