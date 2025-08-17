import React from 'react';
import { Calendar, Film, Sparkles, Instagram, ArrowRight, Target, Scissors, BookOpen, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Events = () => {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-28 pt-40 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* Animated grid pattern */}
          <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,white_10%,transparent_90%)]"
            style={{
              backgroundImage: 'linear-gradient(to right, #facc15 1px, transparent 1px), linear-gradient(to bottom, #facc15 1px, transparent 1px)',
              backgroundSize: '60px 60px',
              animation: 'panGrid 20s linear infinite',
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,0.6)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Events
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our workshops, competitions, and masterclasses to ignite your creative spark.
          </motion.p>
        </div>
      </section>

      {/* Grand First Event Teaser Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg font-semibold text-yellow-400 uppercase tracking-widest animate-pulse">The Countdown Begins</h2>
            <p className="mt-4 text-4xl md:text-6xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Our Inaugural Event Is On The Horizon.</p>
          </motion.div>

          <motion.div
            className="relative group p-8 bg-black/40 border border-yellow-400/30 rounded-3xl shadow-2xl shadow-yellow-500/10 backdrop-blur-sm overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Animated background gradient */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-500/30 rounded-full blur-[120px] opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] bg-yellow-400/20 rounded-full blur-[120px] opacity-50 group-hover:opacity-80 transition-opacity duration-500"></div>
            
            <div className="relative">
              <div className="text-center">
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}>
                  <Film className="w-16 h-16 text-yellow-400 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]" />
                </motion.div>
[cite_start]                <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">Reel Haus Creator Fest - IARE Hyderabad [cite: 1]</h3>
[cite_start]                <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Empowering students to craft reels that promote IARE's digital identity through creativity and storytelling. [cite: 2]</p>
              </div>

              <motion.div
                className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-lg"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div variants={itemVariants} className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-colors duration-300">
                  <h4 className="font-bold text-2xl text-yellow-400 mb-4 flex items-center"><Target className="w-6 h-6 mr-3" /> Core Objectives</h4>
                  <ul className="space-y-3 text-gray-300">
[cite_start]                    <li className="flex items-start"><Sparkles className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0" /><span>Train students in short-form content creation. [cite: 6]</span></li>
[cite_start]                    <li className="flex items-start"><Scissors className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0" /><span>Explore visual storytelling for digital promotion. [cite: 5]</span></li>
[cite_start]                    <li className="flex items-start"><BookOpen className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0" /><span>Showcase IARE's spirit, culture, and facilities. [cite: 7]</span></li>
                  </ul>
                </motion.div>
                
                <motion.div variants={itemVariants} className="relative bg-gray-900/50 p-6 rounded-xl border border-gray-700 overflow-hidden">
                  <h4 className="font-bold text-2xl text-yellow-400 mb-4 flex items-center"><Clock className="w-6 h-6 mr-3" /> Event Structure</h4>
                  <div className="space-y-3 text-gray-400 blur-sm select-none">
[cite_start]                    <p>Round 1: Frame the Fame [cite: 22] - [cite_start][20 Points] [cite: 28]</p>
[cite_start]                    <p>Round 2: Trailer Cuts [cite: 29] - [cite_start][30 Points] [cite: 38]</p>
[cite_start]                    <p>Round 3: Ad Blitz [cite: 43] - [cite_start][25 Points] [cite: 52]</p>
[cite_start]                    <p>Round 4: Idea Hack [cite: 53] - [cite_start][15 Points] [cite: 65]</p>
[cite_start]                    <p>Round 5: Cut & Create [cite: 66] - [cite_start][40 Points] [cite: 77]</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/70 backdrop-blur-[1px]">
                    <div className="text-center p-4 border-2 border-dashed border-yellow-400/50 rounded-lg">
                      <p className="font-bold text-xl text-yellow-400 tracking-widest">CLASSIFIED</p>
                      <p className="text-2xl font-extrabold text-white animate-pulse mt-1">FULL DETAILS INCOMING</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
              	className="mt-12 text-center"
              	initial={{ opacity: 0 }}
              	whileInView={{ opacity: 1 }}
              	viewport={{ once: true }}
              	transition={{ delay: 0.5, duration: 1 }}
            	>
[cite_start]                <p className="text-2xl font-bold text-white">Venue & Date: <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.7)]">FINALIZING... STAY TUNED.</span> [cite: 3]</p>
              	<p className="mt-4 text-gray-400">Keep an eye on our Instagram for the official announcement and registration details.</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 drop-shadow-lg">Don't Miss The Drop!</h2>
                <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
                    Be the first to know when we announce the date. Follow our Instagram for all the latest updates, behind-the-scenes content, and registration info.
                </p>
                <motion.a
                    href="https://instagram.com/reelhaus.hyd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-yellow-400 bg-black rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    whileHover={{ y: -3, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3), 0 10px 10px -5px rgba(0,0,0,0.2)' }}
                    whileTap={{ y: 1 }}
                >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/20 rounded-full group-hover:w-40 group-hover:h-40"></span>
                    <span className="relative flex items-center"><Instagram className="w-6 h-6 mr-3" /> Follow Us</span>
                </motion.a>
            </motion.div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes panGrid {
          0% { background-position: 0% 0%; }
          100% { background-position: 60px 60px; }
        }
      `}</style>
    </div>
  );
};

export default Events;