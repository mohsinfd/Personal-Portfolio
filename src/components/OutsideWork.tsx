import React from 'react';
import { User } from 'lucide-react';
import { PERSONAL_DATA } from '../data/personal';
import { SectionHeader } from './ui';

export const OutsideWork = () => (
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
