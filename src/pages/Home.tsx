import React, { useState, useEffect } from 'react';
import {
  Play,
  Camera,
  Users,
  Calendar,
  Instagram,
  Linkedin,
  Facebook,
  TrendingUp,
  Sun,
  Moon,
} from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const [theme, setTheme] = useState('dark');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const nextEventDate = new Date('2025-08-01T10:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextEventDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const featuredReels = [
    {
      id: 1,
      title: 'Beyond the edge IARE',
      thumbnail: 'https://i.postimg.cc/xjz3fJhn/Screenshot-2025-07-17-132834.jpg',
      views: '2.5K',
      likes: '180',
      link: 'https://www.instagram.com/reel/DK4hZxrvUG7/',
    },
    {
      id: 2,
      title: 'When Your Friend Bunks Class Without Telling You',
      thumbnail: 'https://i.postimg.cc/XYGC8TW3/Screenshot-2025-07-17-133855.jpg',
      views: '2.5K',
      likes: '180',
      link: 'https://www.instagram.com/reel/DLKbMn4PV6H/',
    },
    {
      id: 3,
      title: 'Attendance Frustration',
      thumbnail: 'https://i.postimg.cc/dtnbBxBW/Screenshot-2025-07-17-134243.jpg',
      views: '2.5K',
      likes: '180',
      link: 'https://www.instagram.com/reel/DLZ7TsKP-xe/',
    },
  ];

  const stats = [
    { number: '500+', label: 'Students Reached', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Content Created', icon: <Camera className="w-6 h-6" /> },
    { number: '15+', label: 'Events Covered', icon: <Calendar className="w-6 h-6" /> },
    { number: '10K+', label: 'Social Media Reach', icon: <TrendingUp className="w-6 h-6" /> },
  ];

  return (
    <div className="pt-16 min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all duration-500">
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleTheme}
          className="bg-gray-800 dark:bg-white text-white dark:text-black p-2 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-6 leading-tight">
              Reel HausClub
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Level up IARE's social media game through the art of
              <span className="text-yellow-400 font-semibold"> photography, filmmaking, and reel making</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/join"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform shadow-lg shadow-yellow-400/50 inline-flex items-center space-x-2"
                aria-label="Join the Reel HausClub"
              >
                <Users size={20} />
                <span>Join the Club</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/projects"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform inline-flex items-center space-x-2"
                aria-label="View Reel HausClub projects"
              >
                <Play size={20} />
                <span>View Projects</span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* All remaining sections to be animated the same way... */}
    </div>
  );
};

export default Home;
