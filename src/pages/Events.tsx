import React from 'react';
import { Calendar, Film, Sparkles, Instagram, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Events = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
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
            Events
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our workshops, competitions, and masterclasses to ignite your creative spark.
          </motion.p>
        </div>
      </section>

      {/* Grand First Event Teaser Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-black to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-lg font-semibold text-yellow-400 uppercase tracking-widest">Brace Yourselves</h2>
            <p className="mt-4 text-4xl md:text-6xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Our First Ever Event is Coming.</p>
          </motion.div>

          <motion.div
            className="relative group p-8 bg-black bg-opacity-40 border border-yellow-400/30 rounded-3xl shadow-2xl shadow-yellow-500/10 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative">
              <div className="text-center">
                <Film className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">Reel Haus Creator Fest - IARE Hyderabad</h3>
[cite_start]                <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Empowering students to craft reels that promote IARE's digital identity through creativity and storytelling. [cite: 2]</p>
              </div>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700">
                  <h4 className="font-bold text-2xl text-yellow-400 mb-3">What to Expect:</h4>
                  <ul className="space-y-3 list-disc list-inside text-gray-300">
[cite_start]                    <li>A full-day creative showdown from 9:40 AM to 3:40 PM. [cite: 3]</li>
[cite_start]                    <li>Hands-on training in short-form content creation. [cite: 6]</li>
                    <li>Multiple rounds to test your skills.</li>
[cite_start]                    <li>Showcase IARE's spirit, culture, and facilities. [cite: 7]</li>
                  </ul>
                </div>
                <div className="relative bg-gray-900/50 p-6 rounded-xl border border-gray-700 overflow-hidden">
                  <h4 className="font-bold text-2xl text-yellow-400 mb-3">Event Rounds Sneak Peek:</h4>
                  <div className="space-y-3 text-gray-300 blur-[3px] select-none">
[cite_start]                    <p>Round 1: Frame the Fame - Campus Promo Reel [cite: 22]</p>
[cite_start]                    <p>Round 2: Trailer Cuts - Story in 60 Secs [cite: 29]</p>
[cite_start]                    <p>Round 3: Ad Blitz - Commercial Edit [cite: 43]</p>
[cite_start]                    <p>Round 4: Idea Hack - Reel Pitch for Reel Haus [cite: 53]</p>
[cite_start]                    <p>Round 5: Cut & Create - Final Reel Editing [cite: 66]</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                    <div className="text-center p-4">
                      <p className="font-bold text-xl text-yellow-400">Full Schedule & Details</p>
                      <p className="text-3xl font-extrabold text-white animate-pulse">REVEALING SOON!</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <p className="text-2xl font-bold text-white">Venue & Date: <span className="text-yellow-400">To Be Announced</span></p>
              	<p className="mt-4 text-gray-400">Keep an eye on our Instagram for the official announcement and registration details.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">More Awaits...</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Our team is currently curating an unforgettable calendar of events. From exclusive workshops with industry pros to high-stakes creative competitions, our next season is something you won't want to miss.
            </p>
            <p className="font-semibold text-yellow-400 text-lg">It will be worth the wait. Check back soon!</p>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 drop-shadow-lg">Don't Miss a Beat!</h2>
                <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
                    Be the first to know when we drop our new event schedule. Follow us on Instagram for all the latest announcements, behind-the-scenes content, and more.
                </p>
                <motion.a
                    href="https://instagram.com/reelhaus.iare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-yellow-400 bg-black rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl"
                    whileHover={{ y: -3 }}
                    whileTap={{ y: 1 }}
                >
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/20 rounded-full group-hover:w-40 group-hover:h-40"></span>
                    <span className="relative flex items-center"><Instagram className="w-6 h-6 mr-3" /> Follow Us</span>
                </motion.a>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;