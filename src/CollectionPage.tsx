import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INVENTORY_DATA } from './inventoryData';
import { ThemeContext } from './App';

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

const CollectionPage = () => {
  // Group inventory by category
  const groupedInventory = useMemo(() => {
    const groups: Record<string, typeof INVENTORY_DATA> = {};
    INVENTORY_DATA.forEach(item => {
      if (!groups[item.category]) {
        groups[item.category] = [];
      }
      groups[item.category].push(item);
    });
    return groups;
  }, []);

  // Define the order of categories to display
  const categoryOrder = ['Legacy', 'Iconic', 'Modern Premium', 'Collector', 'Medals & Coins'];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors selection:bg-indigo-500/30 font-sans">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <ThemeToggle />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Full CS2 Collection</h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg leading-relaxed">
            My history with Counter-Strike goes back to 1.6 and Condition Zero in 2005-08. Years later, my work at FanClash reintroduced me to CS:GO (now CS2). This is a complete archive of the skins and medals I've collected over the years. Some are investments, some are memories, and some just look incredibly good in-game.
          </p>
        </div>

        <div className="space-y-24">
          {categoryOrder.map(category => {
            const items = groupedInventory[category];
            if (!items || items.length === 0) return null;

            return (
              <section key={category}>
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-2xl font-serif font-bold">{category}</h2>
                  <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
                  <span className="text-sm font-mono text-zinc-400">{items.length} items</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {items.map((skin, index) => (
                    <motion.div
                      key={`${skin.name}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: (index % 8) * 0.05 }}
                      className="group relative flex flex-col bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl overflow-hidden hover:border-zinc-300 dark:hover:border-zinc-700/50 transition-all duration-300"
                    >
                      <div className="aspect-[4/3] bg-zinc-100 dark:bg-zinc-900/50 p-6 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-200/50 dark:from-zinc-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                        <img 
                          src={skin.imageUrl} 
                          alt={skin.name}
                          className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-110 transition-transform duration-500 ease-out relative z-20"
                          loading="lazy"
                        />
                      </div>
                      
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="font-bold text-zinc-900 dark:text-zinc-100 leading-tight mb-3">
                          {skin.name}
                        </h3>
                        
                        <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-auto">
                          {skin.wear && (
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                              {skin.wear}
                            </span>
                          )}
                          {skin.float && (
                            <span className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700"></span>
                              {skin.float}
                            </span>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
