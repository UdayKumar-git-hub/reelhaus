import React, { useState, useEffect } from 'react';
import { Play, Camera, Users, Calendar, Instagram, Linkedin, Facebook, TrendingUp } from 'lucide-react';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown to next event (future date)
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

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
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
              <a
                href="/join"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/50 inline-flex items-center space-x-2"
                aria-label="Join the Reel HausClub"
              >
                <Users size={20} />
                <span>Join the Club</span>
              </a>
              <a
                href="/projects"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
                aria-label="View Reel HausClub projects"
              >
                <Play size={20} />
                <span>View Projects</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our <span className="text-yellow-400">Mission</span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                <span className="text-yellow-400 font-semibold">
                  "At Reelhaus, our mission is to level up the social media game at IARE by empowering students to create
                </span>{' '}
                impactful, trendy content through the art of{' '}
                <span className="text-yellow-400 font-semibold">photography, filmmaking, and reel making</span>."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Reels */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Featured <span className="text-yellow-400">Reels</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredReels.map((reel) => (
              <a
                key={reel.id}
                href={reel.link ? reel.link : `/reel/${reel.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block group"
                aria-label={`Watch reel: ${reel.title}`}
              >
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="bg-yellow-400 text-black p-4 rounded-full hover:bg-yellow-500 transition-colors shadow-lg shadow-yellow-400/50"
                    aria-label="Play reel"
                  >
                    <Play size={24} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold mb-2">{reel.title}</h3>
                  <div className="flex items-center justify-between text-gray-300 text-sm">
                    <span>{reel.views} views</span>
                    <span>{reel.likes} likes</span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Instagram Embed Section */}
          <div className="text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <Instagram className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Follow us on Instagram</h3>
              <p className="text-gray-300 mb-6">@reelhausclub</p>
              <a
                href="https://instagram.com/reelhausclub"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-full font-bold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 inline-flex items-center space-x-2"
                aria-label="Follow Reel HausClub on Instagram"
              >
                <Instagram size={20} />
                <span>Follow Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Event Countdown */}
      <section className="py-20 bg-gradient-to-br from-yellow-400 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">Next Event</h2>
            <h3 className="text-2xl text-black/80 mb-8">Photography Workshop & Reel Making Competition</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
              <p className="text-xl text-black">The event has ended. Check out our upcoming events!</p>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="bg-black text-yellow-400 rounded-2xl p-6 mb-2">
                      <div className="text-3xl md:text-4xl font-bold">{item.value}</div>
                    </div>
                    <div className="text-black font-semibold">{item.label}</div>
                  </div>
                ))}
              </div>
            )}
            <div className="text-center">
              <a
                href="/events"
                className="bg-black text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-900 transition-colors transform hover:scale-105 inline-flex items-center space-x-2"
                aria-label="View all Reel HausClub events"
              >
                <Calendar size={20} />
                <span>View All Events</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our <span className="text-yellow-400">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 hover:border-yellow-400/50 transition-all duration-300 group">
                  <div className="text-yellow-400 mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 font-semibold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Create <span className="text-yellow-400">Amazing Content</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join Reel HausClub and be part of IARE's digital transformation. Build your portfolio, learn new skills, and make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/50 inline-flex items-center space-x-2"
              aria-label="Join the Reel HausClub"
            >
              <Users size={20} />
              <span>Join the Club</span>
            </a>
            <a
              href="/contact"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              aria-label="Contact Reel HausClub"
            >
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-12 bg-gray-900 border-t border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8">
            <a
              href="https://instagram.com/reelhausclub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors transform hover:scale-110"
              aria-label="Follow Reel HausClub on Instagram"
            >
              <Instagram size={32} />
            </a>
            <a
              href="https://linkedin.com/company/reelhausclub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors transform hover:scale-110"
              aria-label="Follow Reel HausClub on LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://facebook.com/reelhausclub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-yellow-400 transition-colors transform hover:scale-110"
              aria-label="Follow Reel HausClub on Facebook"
            >
              <Facebook size={32} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;