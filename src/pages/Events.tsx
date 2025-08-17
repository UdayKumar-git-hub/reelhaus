import React from 'react';
import { Film, Sparkles, Instagram, Target, Scissors, BookOpen, Clock } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Events = () => {
  // For the 3D tilt effect on the main card
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    const rotateXValue = -1 * ((y - height / 2) / (height / 2)) * 10;
    const rotateYValue = ((x - width / 2) / (width / 2)) * 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // For the scroll-based hero animation
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans overflow-x-hidden">
      {/* Abstract Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(234,179,8,0.1)_0%,_rgba(234,179,8,0)_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(250,204,21,0.1)_0%,_rgba(250,204,21,0)_70%)]"></div>
      </div>
      
      {/* Scrollable Hero Section */}
      <section className="h-[60vh] flex items-center justify-center sticky top-0">
        <motion.div style={{ scale, opacity, y }} className="text-center">
          <motion.div
            className="inline-block mb-4 px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/50 rounded-full text-sm font-medium text-yellow-300 shadow-[0_0_15px_rgba(234,179,8,0.5)]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A Special Welcome to Our Juniors! ✨
          </motion.div>
          <motion.h1
            className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-[0_0_30px_rgba(234,179,8,0.6)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Events
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join us to ignite your creative spark.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content Container */}
      <div className="relative z-10 bg-black pt-16">
        {/* Grand First Event Teaser Section */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ perspective: '1000px' }}>
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
              className="relative group rounded-3xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl transition-all duration-300 ease-out"></div>
              {/* Dynamic Aurora Background */}
              <div className="absolute inset-[-100px] bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.2),transparent_40%)] animate-aurora"></div>
              
              <div className="relative p-8 sm:p-12">
                <div className="text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: 'spring', stiffness: 150 }}>
                    <Film className="w-16 h-16 text-yellow-400 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(234,179,8,0.8)]" />
                  </motion.div>
                  <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">Reel Haus Creator Fest - IARE Hyderabad</h3>
                  <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Empowering students to craft reels that promote IARE's digital identity through creativity and storytelling.</p>
                </div>

                <motion.div
                  className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-lg"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.div variants={itemVariants} className="bg-black/20 p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-colors duration-300">
                    <h4 className="font-bold text-2xl text-yellow-400 mb-4 flex items-center"><Target className="w-6 h-6 mr-3" /> Core Objectives</h4>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start transition-colors hover:text-white"><Sparkles className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0" /><span>Train students in short-form content creation.</span></li>
                      <li className="flex items-start transition-colors hover:text-white"><Scissors className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0" /><span>Explore visual storytelling for digital promotion.</span></li>
                      <li className="flex items-start transition-colors hover:text-white"><BookOpen className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0" /><span>Showcase IARE's spirit, culture, and facilities.</span></li>
                    </ul>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="group/declassify relative bg-black/20 p-6 rounded-xl border border-white/10 overflow-hidden">
                    <h4 className="font-bold text-2xl text-yellow-400 mb-4 flex items-center"><Clock className="w-6 h-6 mr-3" /> Event Structure</h4>
                    <div className="space-y-3 text-gray-400 blur-md group-hover/declassify:blur-sm transition-all duration-500 select-none">
                      <p>Round 1: Frame the Fame - [20 Points]</p>
                      <p>Round 2: Trailer Cuts - [30 Points]</p>
                      <p>Round 3: Ad Blitz - [25 Points]</p>
                      <p>Round 4: Idea Hack - [15 Points]</p>
                      <p>Round 5: Cut & Create - [40 Points]</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-100 group-hover/declassify:opacity-0 transition-opacity duration-500">
                      <div className="text-center p-4 border-2 border-dashed border-yellow-400/50 rounded-lg">
                        <p className="font-bold text-xl text-yellow-400 tracking-widest">CLASSIFIED</p>
                        <p className="text-lg font-semibold text-white mt-1">HOVER TO DECLASSIFY</p>
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
                  <p className="text-2xl font-bold text-white">Venue & Date: <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(234,179,8,0.7)]">FINALIZING... STAY TUNED.</span></p>
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
                whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.3), 0 10px 10px -5px rgba(0,0,0,0.2)' }}
                whileTap={{ y: 1 }}
              >
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white/20 rounded-full group-hover:w-56 group-hover:h-56"></span>
                <span className="relative flex items-center"><Instagram className="w-6 h-6 mr-3" /> Follow Us</span>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes aurora {
          0% { transform: translate(-20%, -20%) rotate(0deg); }
          50% { transform: translate(20%, 20%) rotate(180deg); }
          100% { transform: translate(-20%, -20%) rotate(360deg); }
        }
        .animate-aurora {
          animation: aurora 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Events;