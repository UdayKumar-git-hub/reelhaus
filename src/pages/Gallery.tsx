import React, { useState } from 'react';
import { Play, Camera, Film, Eye, Heart, Share2, Instagram, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('reels');

  // Gallery content will be populated soon
  const reels = [];
  const photography = [];
  const behindTheScenes = [];

  const tabs = [
    { id: 'reels', label: 'Reels', icon: <Play /> },
    { id: 'photography', label: 'Photography', icon: <Camera /> },
    { id: 'behind-the-scenes', label: 'Behind the Scenes', icon: <Film /> }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
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
            Gallery
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            Explore our creative work, from viral reels to stunning photography and behind-the-scenes moments.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Coming Soon Section */}
          <div className="text-center py-16">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7, ease: 'easeOut' }}>
              <Sparkles className="w-16 h-16 text-yellow-400/50 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Our Creative Vault is Loading...</h3>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                Behind the scenes, our talented team is curating an incredible collection of visual content that showcases the best of IARE's creative spirit. From stunning photography that captures campus life to viral reels that have taken social media by storm, we're preparing a gallery that will truly represent our artistic journey.
              </p>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                We're organizing breathtaking photography sessions, compiling our most engaging reels, and documenting the creative process that goes into every piece of content we produce. This gallery will feature exclusive behind-the-scenes moments, professional-quality photography, and the viral content that's putting IARE on the digital map.
              </p>
              <p className="font-semibold text-yellow-400 text-xl">
                The wait will be worth it. Something spectacular is coming soon!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* What's Coming Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-4xl mx-auto" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">What's <span className="text-yellow-400">Coming</span> to Our Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-black/30 rounded-2xl p-6 border border-yellow-400/10">
                <Play className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Viral Reels Collection</h3>
                <p className="text-gray-300">Our most engaging reels that have captured IARE's spirit and gone viral across social media platforms.</p>
              </div>
              <div className="bg-black/30 rounded-2xl p-6 border border-yellow-400/10">
                <Camera className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Professional Photography</h3>
                <p className="text-gray-300">Stunning campus photography, event documentation, and creative portraits by our talented team members.</p>
              </div>
              <div className="bg-black/30 rounded-2xl p-6 border border-yellow-400/10">
                <Film className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Behind the Scenes</h3>
                <p className="text-gray-300">Exclusive glimpses into our creative process, team collaborations, and the making of our content.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Instagram CTA */}
       <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Follow Our <span className="text-yellow-400">Creative Journey</span></h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    While we're preparing our gallery, follow us on Instagram for daily updates, sneak peeks, and the latest content from our creative team.
                </p>
                <motion.a 
                    href="https://instagram.com/reelhaus.iare" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/30" 
                    whileHover={{ y: -3 }} 
                    whileTap={{ y: 1 }}
                >
                    <span className="relative flex items-center"><Instagram className="w-6 h-6 mr-3" /> Follow @reelhaus.iare</span>
                </motion.a>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
