import React from 'react';

export const Badge = ({ children, className = "" }: { children?: React.ReactNode; className?: string; key?: React.Key }) => (
  <span className={`px-3 py-1 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 ${className}`}>
    {children}
  </span>
);

export const SectionHeader = ({ title, subtitle, icon: Icon }: { title: string; subtitle?: string; icon?: any }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-2">
      {Icon && <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />}
      <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-serif">{title}</h2>
    </div>
    {subtitle && <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl">{subtitle}</p>}
  </div>
);

export const Card = ({ children, className = "" }: { children?: React.ReactNode; className?: string; key?: React.Key }) => (
  <div className={`bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700 ${className}`}>
    {children}
  </div>
);
