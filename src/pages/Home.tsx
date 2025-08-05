import React, { useState, useEffect } from 'react';
import { Play, Camera, Users, Calendar, Instagram, Linkedin, Facebook, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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
      title: "Beyond the edge IARE",
      thumbnail: "https://i.postimg.cc/xjz3fJhn/Screenshot-2025-07-17-132834.jpg",
      views: "2.5K",
      likes: "180",
      link: "https://www.instagram.com/reel/DK4hZxrvUG7/",
    },
    {
      id: 2,
      title: "When Your Friend Bunks Class Without Telling You",
      thumbnail: "https://i.postimg.cc/XYGC8TW3/Screenshot-2025-07-17-133855.jpg",
      views: "2.5K",
      likes: "180",
      link: "https://www.instagram.com/reel/DLKbMn4PV6H/",
    },
    {
      id: 3,
      title: "Attendance Frustration",
      thumbnail: "https://i.postimg.cc/dtnbBxBW/Screenshot-2025-07-17-134243.jpg",
      views: "2.5K",
      likes: "180",
      link: "https://www.instagram.com/reel/DLZ7TsKP-xe/",
    },
  ];

  const stats = [
    { number: "500+", label: "Students Reached", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Content Created", icon: <Camera className="w-6 h-6" /> },
    { number: "15+", label: "Events Covered", icon: <Calendar className="w-6 h-6" /> },
    { number: "10K+", label: "Social Media Reach", icon: <TrendingUp className="w-6 h-6" /> },
  ];

  const testimonials = [
    {
      quote: "Reel HausClub helped me express my creativity and meet passionate people!",
      name: "Aarav, 2nd Year",
    },
    {
      quote: "I got noticed on social media thanks to the workshops!",
      name: "Sanya, 3rd Year",
    },
    {
      quote: "Real hands-on experience in filmmaking — it's a dream club!",
      name: "Rahul, 1st Year",
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-black text-white">
      {/* Splash Screen */}
      <div id="splash" className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black z-50">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-yellow-400 text-4xl font-bold"
        >
          Reel HausClub 🎬
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover opacity-10" src="/videos/hero-bg.mp4" />
        <div className="relative z-10 text-center mb-16 px-4">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 mb-6">
            Reel HausClub
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto">
            Level up IARE's social media game through the art of <span className="text-yellow-400 font-semibold">photography, filmmaking, and reel making</span>
          </motion.p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join" className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform inline-flex items-center space-x-2 shadow-lg shadow-yellow-400/30">
              <Users size={20} />
              <span>Join the Club</span>
            </a>
            <a href="/projects" className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2">
              <Play size={20} />
              <span>View Projects</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">What Our <span className="text-yellow-400">Members Say</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-black/50 p-6 rounded-xl border border-yellow-400/20 text-left"
              >
                <p className="text-gray-300 italic">"{t.quote}"</p>
                <p className="text-yellow-400 mt-4 font-bold">– {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center text-gray-500 text-sm border-t border-yellow-400/20">
        <p>© {new Date().getFullYear()} Reel HausClub · Made with ❤️ at IARE</p>
      </footer>
    </div>
  );
};

export default Home;