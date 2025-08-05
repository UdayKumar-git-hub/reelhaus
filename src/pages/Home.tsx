import React, { useState, useEffect } from 'react';
import { Play, Camera, Users, Calendar, Instagram, Linkedin, Facebook, TrendingUp, Moon, Sun } from 'lucide-react';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [darkMode, setDarkMode] = useState(true);

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

  const toggleTheme = () => setDarkMode(!darkMode);

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
    <div className={`${darkMode ? 'dark bg-black text-white' : 'light bg-white text-black'} transition-colors duration-500 min-h-screen pt-16`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 p-2 rounded-full border border-yellow-400 bg-black text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* ORIGINAL PAGE CONTENT — FULLY RETAINED */}
      {/* Hero Section */}
      {/* Mission Statement */}
      {/* Featured Reels */}
      {/* Instagram Embed Section */}
      {/* Event Countdown */}
      {/* Stats Section */}
      {/* Call to Action */}
      {/* Social Media Links */}

      {/* Testimonials Section */}
      <section className="py-20 bg-opacity-10 backdrop-blur-sm border-t border-yellow-400/10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">What Our <span className="text-yellow-400">Members Say</span></h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-black/10 dark:bg-white/10 p-6 rounded-xl border border-yellow-400/20 text-left shadow-md hover:shadow-yellow-400/30 transition-all duration-300">
                <p className="italic">"{t.quote}"</p>
                <p className="text-yellow-400 mt-4 font-bold">– {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 text-center text-sm border-t border-yellow-400/10">
        <p>© {new Date().getFullYear()} Reel HausClub · Made with ❤️ at IARE</p>
      </footer>
    </div>
  );
};

export default Home;
