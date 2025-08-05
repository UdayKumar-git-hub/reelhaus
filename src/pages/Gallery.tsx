import React, { useState } from 'react';
import { Play, Camera, Film, Eye, Heart, Share2, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('reels');

  const reels = [
    { id: 1, title: "IARE Cultural Fest Highlights", thumbnail: "https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=600", views: "2.5K", likes: "180", duration: "0:45" },
    { id: 2, title: "Campus Life Chronicles", thumbnail: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600", views: "3.2K", likes: "250", duration: "1:20" },
    { id: 3, title: "Workshop Behind the Scenes", thumbnail: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600", views: "1.8K", likes: "120", duration: "0:30" },
    { id: 4, title: "Student Spotlight Series", thumbnail: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600", views: "4.1K", likes: "320", duration: "2:15" },
    { id: 5, title: "Tech Event Coverage", thumbnail: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600", views: "2.9K", likes: "195", duration: "1:45" },
    { id: 6, title: "Club Activities Montage", thumbnail: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600", views: "5.3K", likes: "410", duration: "3:00" }
  ];

  const photography = [
    { id: 1, title: "Golden Hour Campus", image: "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800", photographer: "Reel HausClub", likes: "245" },
    { id: 2, title: "Student Portrait Series", image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800", photographer: "Uday", likes: "189" },
    { id: 3, title: "Architecture Focus", image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800", photographer: "Charan", likes: "156" },
    { id: 4, title: "Event Documentation", image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800", photographer: "Jayani", likes: "298" },
    { id: 5, title: "Creative Compositions", image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800", photographer: "Sankeerthana", likes: "167" },
    { id: 6, title: "Campus Lifestyle", image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800", photographer: "Aasrith", likes: "223" }
  ];

  const behindTheScenes = [
    { id: 1, title: "Reel Making Process", image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Team collaborating on social media content.", date: "Jan 2024" },
    { id: 2, title: "Photography Setup", image: "https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Setting up for the campus portrait session.", date: "Jan 2024" },
    { id: 3, title: "Team Meeting", image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Planning the next content strategy.", date: "Feb 2024" },
    { id: 4, title: "Equipment Check", image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800", description: "Preparing gear for the event coverage.", date: "Feb 2024" }
  ];

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
          <div className="flex justify-center mb-12">
            <div className="relative flex flex-wrap gap-2 p-1 bg-black/30 rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 rounded-full font-semibold text-sm transition-colors duration-300 z-10 flex items-center gap-2 ${activeTab === tab.id ? 'text-black' : 'text-gray-300 hover:text-white'}`}
                >
                  {tab.icon} {tab.label}
                  {activeTab === tab.id && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full z-[-1]"
                        layoutId="activeGalleryTab"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
            >
              {activeTab === 'reels' && (
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" animate="visible">
                  {reels.map(reel => (
                    <motion.div key={reel.id} className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-yellow-400/20 shadow-lg" variants={itemVariants} whileHover={{ scale: 1.05, y: -5 }}>
                      <img src={reel.thumbnail} alt={reel.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm font-mono">{reel.duration}</div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-yellow-400 text-black p-5 rounded-full shadow-lg shadow-yellow-400/50"><Play size={32} /></button>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-bold truncate">{reel.title}</h3>
                        <div className="flex justify-between text-sm text-gray-300 mt-1">
                          <span className="flex items-center gap-1"><Eye size={14} /> {reel.views}</span>
                          <span className="flex items-center gap-1"><Heart size={14} /> {reel.likes}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              {activeTab === 'photography' && (
                <motion.div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8" variants={containerVariants} initial="hidden" animate="visible">
                    {photography.map(photo => (
                        <motion.div key={photo.id} className="group relative overflow-hidden rounded-2xl block" variants={itemVariants}>
                            <img src={photo.image} alt={photo.title} className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
                                <h3 className="font-bold">{photo.title}</h3>
                                <div className="flex justify-between text-sm text-gray-300 mt-1">
                                    <span>by {photo.photographer}</span>
                                    <span className="flex items-center gap-1"><Heart size={14} /> {photo.likes}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
              )}
              {activeTab === 'behind-the-scenes' && (
                <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={containerVariants} initial="hidden" animate="visible">
                  {behindTheScenes.map(item => (
                    <motion.div key={item.id} className="group bg-gray-900/50 rounded-2xl border border-yellow-400/20 p-6 flex items-center gap-6" variants={itemVariants}>
                      <img src={item.image} alt={item.title} className="w-40 h-40 object-cover rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-105" />
                      <div>
                        <span className="text-yellow-400 text-sm font-semibold">{item.date}</span>
                        <h3 className="text-xl font-bold text-white mt-1 mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      {/* Instagram CTA */}
       <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">See More on <span className="text-yellow-400">Instagram</span></h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    For the full collection of our work and daily updates, follow our journey on Instagram.
                </p>
                <motion.a 
                    href="https://instagram.com/reelhaus.iare" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/30" 
                    whileHover={{ y: -3 }} 
                    whileTap={{ y: 1 }}
                >
                    <span className="relative flex items-center"><Instagram className="w-6 h-6 mr-3" /> @reelhaus.iare</span>
                </motion.a>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
