import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gamepad2 } from 'lucide-react';
import { PERSONAL_DATA, CS_SKINS_DATA } from '../data/personal';

export const CS2Collection = () => {
  const featuredSkins = CS_SKINS_DATA.slice(0, 3).map((skin) => skin.name).join(' / ');

  return (
    <section id="cs2-collection" className="py-16 bg-zinc-950 text-zinc-50 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[56px_1fr_auto] gap-6 md:items-center border border-zinc-800 rounded-lg p-6 bg-zinc-900/40">
          <div className="h-12 w-12 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-center">
            <Gamepad2 className="w-5 h-5 text-zinc-400" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-zinc-500 mb-2">Personal</p>
            <h2 className="text-2xl font-serif font-bold mb-2">CS2 Collection</h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
              {PERSONAL_DATA.csSkinsDescription} Current shelf: {featuredSkins}.
            </p>
          </div>
          <Link to="/cs2-collection" className="inline-flex items-center gap-2 text-sm font-bold text-zinc-200 hover:text-white transition-colors border border-zinc-800 hover:border-zinc-600 px-4 py-2 rounded-lg bg-zinc-950/50">
            View collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
