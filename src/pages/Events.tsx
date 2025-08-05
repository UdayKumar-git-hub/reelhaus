import React from 'react';
import { Calendar, Users, ArrowRight, Instagram, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Events = () => {
  const pastEvents = [
    { id: 1, title: "Club Launch Event", date: "January 10, 2024", participants: 300, image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { id: 2, title: "First Photography Walk", date: "January 25, 2024", participants: 80, image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800" }
  ];

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

      {/* Past Events Showcase */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">A Glimpse into Our Past</h2>
            <p className="text-xl text-gray-400">See what we've been up to.</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {pastEvents.map((event) => (
              <motion.div key={event.id} className="group relative rounded-2xl overflow-hidden shadow-lg" variants={itemVariants}>
                <img src={event.image} alt={event.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
                  <div className="flex items-center space-x-6 text-gray-300">
                    <div className="flex items-center gap-2"><Calendar size={16} /><span>{event.date}</span></div>
                    <div className="flex items-center gap-2"><Users size={16} /><span>{event.participants} Participants</span></div>
                  </div>
                </div>
              </motion.div>
            ))}
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
