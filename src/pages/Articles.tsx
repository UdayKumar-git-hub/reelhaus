import React, { useState } from 'react';
import { PenSquare, Clock, ArrowRight, Rss, Search, Mic, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Articles = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const articles = []; // No articles yet

  const filters = [
    { id: 'all', label: 'All Articles', icon: <Rss/> },
    { id: 'interviews', label: 'Interviews', icon: <Mic/> },
    { id: 'case-studies', label: 'Case Studies', icon: <BookOpen/> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

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
            Articles
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            Insights, tutorials, and stories from the creative minds at Reel HausClub.
          </motion.p>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
              <div className="relative flex flex-wrap gap-2 p-1 bg-black/30 rounded-full">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-300 z-10 flex items-center gap-2 ${activeFilter === filter.id ? 'text-black' : 'text-gray-300 hover:text-white'}`}
                  >
                    {filter.icon} {filter.label}
                    {activeFilter === filter.id && (
                      <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full z-[-1]"
                          layoutId="activeArticleFilter"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                ))}
              </div>
          </div>

          {articles.length > 0 ? (
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
              {/* Actual articles will be mapped here */}
            </motion.div>
          ) : (
            <div className="text-center py-16">
              <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}>
                <PenSquare className="w-16 h-16 text-yellow-400/50 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Stories in the Making</h3>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
                  Our new Articles section is currently under development. We're busy writing insightful interviews and in-depth case studies. Stay tuned!
                </p>
              </motion.div>
              <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                {[1, 2, 3].map(id => (
                  <motion.div
                    key={id}
                    className="aspect-video bg-gray-900/50 rounded-2xl border-2 border-dashed border-yellow-400/20 flex flex-col items-center justify-center p-6 text-center"
                    variants={itemVariants}
                  >
                    <Clock className="w-12 h-12 text-yellow-400/40 mb-4" />
                    <h4 className="text-xl font-bold text-white">Coming Soon</h4>
                    <p className="text-gray-400 text-sm mt-1">A new story is being crafted for this spot.</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action - Write for us */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Have a Story to Tell?</h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    We believe in the power of shared knowledge. If you have an idea for an article, an interview, or an inspiring story, we'd love to hear from you.
                </p>
                <motion.a 
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/60" 
                    whileHover={{ y: -3 }} 
                    whileTap={{ y: 1 }}
                >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/30 rounded-full group-hover:w-40 group-hover:h-40"></span>
                    <span className="relative flex items-center">Write For Us <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" /></span>
                </motion.a>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Articles;