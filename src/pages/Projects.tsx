import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, LayoutGrid, List, Search, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';

const Projects = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'event-coverage', label: 'Event Coverage' },
    { id: 'content-series', label: 'Content Series' },
    { id: 'photography', label: 'Photography' },
  ];
  
  const projects = []; // No projects yet

  const stats = [
    { number: 15, suffix: "+", label: "Projects Completed" },
    { number: 50, suffix: "K+", label: "Total Reach" },
    { number: 8, suffix: "", label: "Clubs Supported" },
    { number: 300, suffix: "%", label: "Avg. Engagement Boost" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };
  
  const CountUp = ({ end, suffix = '' }) => {
    const ref = useRef(null);
    const [displayValue, setDisplayValue] = useState(0);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, end, {
                duration: 2.5,
                ease: "easeOut",
                onUpdate(value) {
                    setDisplayValue(Math.floor(value));
                }
            });
            return () => controls.stop();
        }
    }, [isInView, end]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
  };

  const PlaceholderCard = () => (
    <div className="relative aspect-[4/3] bg-gray-900/50 rounded-2xl border border-yellow-400/10 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(theme(colors.yellow.900)_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
        <div className="text-center">
            <p className="text-yellow-400 font-bold text-lg">Coming Soon</p>
            <p className="text-gray-400">New project on the way!</p>
        </div>
        <div className="absolute inset-0 bg-black/50"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      {/* Hero Section */}
      <section className="relative py-28 pt-40 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 animate-pulse">
          <div className="absolute h-full w-full bg-[radial-gradient(theme(colors.yellow.400)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1 
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,0.6)]"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          >
            Our Projects
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover our work in elevating IARE's digital presence and supporting student organizations.
          </motion.p>
        </div>
      </section>

      {/* Filter and View Controls */}
      <section className="py-8 bg-gray-900/50 sticky top-0 z-30 backdrop-blur-md border-b border-yellow-400/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="relative flex flex-wrap gap-2 p-1 bg-black/30 rounded-full mb-4 md:mb-0">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`relative px-4 py-2 rounded-full font-semibold text-sm transition-colors duration-300 z-10 ${activeFilter === filter.id ? 'text-black' : 'text-gray-300 hover:text-white'}`}
                  aria-label={`Filter by ${filter.label}`}
                >
                  {filter.label}
                   {activeFilter === filter.id && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full z-[-1]"
                        layoutId="activeFilter"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="flex items-center space-x-2 p-1 bg-black/30 rounded-full">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-full transition-colors ${viewMode === 'grid' ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'}`} aria-label="Grid view"><LayoutGrid size={20} /></button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-full transition-colors ${viewMode === 'list' ? 'bg-yellow-400 text-black' : 'text-gray-400 hover:text-white'}`} aria-label="List view"><List size={20} /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {projects.length > 0 ? (
                <div className={`grid gap-8 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                  {/* Project mapping will go here */}
                </div>
              ) : (
                <div className="text-center py-16">
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}>
                    <Search className="w-16 h-16 text-yellow-400/50 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold text-white mb-4">Our Workshop is Cooking!</h3>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                      We're currently curating our portfolio of impactful projects. Check back soon to see how we're transforming IARE's digital landscape.
                    </p>
                  </motion.div>
                  <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                      {[...Array(3)].map((_, i) => <motion.div key={i} variants={itemVariants}><PlaceholderCard /></motion.div>)}
                  </motion.div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-600 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 drop-shadow-lg">Our Impact in Numbers</h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {stats.map((stat, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="text-5xl md:text-6xl font-bold text-black mb-2 drop-shadow-md">
                  <CountUp end={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-black/80 font-semibold text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Collaborate?</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Let's work together to elevate your club's digital presence and create impactful content.
                </p>
                <motion.a href="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/60" whileHover={{ y: -3 }} whileTap={{ y: 1 }}>
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/30 rounded-full group-hover:w-40 group-hover:h-40"></span>
                    <span className="relative flex items-center">Start a Project <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" /></span>
                </motion.a>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
