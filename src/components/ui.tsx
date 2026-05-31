import React from 'react';

export const Badge = ({ children, className = "" }: { children?: React.ReactNode; className?: string; key?: React.Key }) => (
  <span className={`px-3 py-1 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 ${className}`}>
    {children}
  </span>
);

export const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string; subtitle?: string; icon?: any }) => (
  <div className="mb-10 max-w-3xl">
    <div className="flex items-center gap-3 mb-3">
      {Icon && (
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-white text-indigo-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-indigo-400">
          <Icon className="w-4 h-4" />
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-serif">{title}</h2>
    </div>
    {subtitle && <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl leading-relaxed">{subtitle}</p>}
  </div>
);

export const Card = ({ children, className = "" }: { children?: React.ReactNode; className?: string; key?: React.Key }) => (
  <div className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 shadow-sm transition-colors duration-200 ${className}`}>
    {children}
  </div>
);
