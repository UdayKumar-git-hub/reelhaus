import React from 'react';
import { Calendar, Users, ArrowRight, Instagram, Sparkles } from 'lucide-react';
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

      {/* Coming Soon Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <Sparkles className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Stage is Being Set...</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Our team is currently curating an unforgettable calendar of events. From exclusive workshops with industry pros to high-stakes creative competitions, our next season is something you won't want to miss.
            </p>
            <p className="font-semibold text-yellow-400 text-lg">It will be worth the wait. Check back soon!</p>
          </motion.div>
        </div>
      </section>

      {/* Club Updates Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-4xl mx-auto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">The Club is <span className="text-yellow-400">Cooking</span> Something Special!</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Behind the scenes at Reel HausClub, our creative minds are working tirelessly to bring you an extraordinary lineup of events, workshops, and experiences that will revolutionize how we approach content creation at IARE.
              </p>
              <p>
                We're crafting immersive workshops with industry professionals, planning exclusive masterclasses on viral content creation, organizing photography expeditions around campus, and designing competitions that will showcase the incredible talent within our student community.
              </p>
              <p>
                From hands-on sessions with professional cinematographers to collaborative projects that will put IARE on the digital map, we're preparing experiences that go beyond traditional club activities. Think interactive storytelling workshops, brand partnership opportunities, and networking events with content creators who've made it big.
              </p>
              <p className="text-yellow-400 font-semibold text-xl">
                The wait will be worth it. Something big is coming, and you won't want to miss it.
              </p>
            </div>
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
