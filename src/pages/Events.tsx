import React from 'react';
import { Film, Sparkles, Instagram, Clock, Star, ArrowRight, Calendar, ArrowLeft } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// A component for the interactive particles in the hero
const InteractiveParticles = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50"></div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ event, index, navigate }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '10%']);

  return (
    <motion.div
      ref={ref}
      className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/10 border border-white/10 mb-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url(${event.imageUrl})`, y }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>
      
      <div className="relative p-8 sm:p-12 flex flex-col justify-end min-h-[500px]">
        <div>
          <p className={`inline-block px-3 py-1 text-sm rounded-full mb-4 ${event.status === 'Upcoming' ? 'bg-yellow-400 text-black font-bold' : 'bg-gray-500 text-white'}`}>{event.status}</p>
          <h3 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">{event.title}</h3>
          <p className="mt-2 text-xl text-gray-300 max-w-2xl">{event.description}</p>
          <div className="mt-6 flex items-center space-x-6 text-gray-200">
            <div className="flex items-center space-x-2">
              <Calendar className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold">{event.date}</span>
            </div>
             <div className="flex items-center space-x-2">
              <Clock className="w-6 h-6 text-yellow-400" />
              <span className="font-semibold">{event.time}</span>
            </div>
          </div>
          <motion.button
            onClick={() => navigate('/creatorfeast')}
            className="mt-8 group/button relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-transparent border-2 border-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-yellow-400/10 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)]"
            whileHover={{ y: -3 }}
            whileTap={{ y: 1 }}
          >
            <span className="relative flex items-center">View Details <ArrowRight className="w-5 h-5 ml-3 transition-transform duration-300 group-hover/button:translate-x-1" /></span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// CreatorFeast Page Component
const CreatorFeast = ({ navigate }) => {
    const event = {
      title: "Creator Fest",
      date: "September 13th, 2025",
      time: "9:50 AM Onwards",
      imageUrl: "https://i.postimg.cc/wMt7PP0b/rh-feast-13-sep.jpg"
    };

    return (
        <motion.div 
            className="min-h-screen w-full flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${event.imageUrl})` }}>
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
                     <motion.button
                        onClick={() => navigate('/')}
                        className="absolute top-5 left-5 flex items-center space-x-2 text-lg font-semibold text-yellow-400 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ArrowLeft className="w-6 h-6" />
                        <span>Back to Events</span>
                    </motion.button>
                    <motion.h1 
                        className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-[0_0_40px_rgba(234,179,8,0.7)]"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        {event.title}
                    </motion.h1>
                    <motion.div 
                        className="mt-6 flex items-center space-x-8 text-2xl"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                        <div className="flex items-center space-x-2">
                            <Calendar className="w-8 h-8 text-yellow-400" />
                            <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock className="w-8 h-8 text-yellow-400" />
                            <span>{event.time}</span>
                        </div>
                    </motion.div>
                     <motion.a
                        href="#" // Your registration link
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                        className="mt-12 group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-500/30"
                    >
                        Register Now
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};


const App = () => {
   const [page, setPage] = React.useState(window.location.pathname);
    
    const navigate = (path) => {
        window.history.pushState(null, '', path);
        setPage(path);
    };

    React.useEffect(() => {
        const handlePopState = () => {
            setPage(window.location.pathname);
        };
        window.addEventListener('popstate', handlePopState);
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, []);

  // Inject styles into the document head for animations
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes cosmic-rift {
        0% {
          background-image:
            radial-gradient(at 20% 20%, hsla(212, 90%, 50%, 0.2) 0px, transparent 50%),
            radial-gradient(at 80% 20%, hsla(28, 90%, 50%, 0.2) 0px, transparent 50%),
            radial-gradient(at 20% 80%, hsla(344, 90%, 50%, 0.2) 0px, transparent 50%),
            radial-gradient(at 80% 80%, hsla(200, 90%, 50%, 0.2) 0px, transparent 50%);
        }
        50% {
          background-image:
            radial-gradient(at 30% 70%, hsla(212, 90%, 50%, 0.2) 0px, transparent 50%),
            radial-gradient(at 70% 30%, hsla(28, 90%, 50%, 0.2) 0px, transparent 50%),
            radial-gradient(at 30% 30%, hsla(344, 90%, 50%, 0.2) 0px, transparent 50%),
            radial-gradient(at 70% 70%, hsla(200, 90%, 50%, 0.2) 0px, transparent 50%);
        }
        100% {
          background-image:
            radial-gradient(at 20% 20%, hsla(212, 90%, 50%, 0.2) 0px, transparent 50%),
            radial-gradient(at 80% 20%, hsla(28, 90%, 50%, 0.2) 0px, transparent 50%),
            radial-gradient(at 20% 80%, hsla(344, 90%, 50%, 0.2) 0px, transparent 50%),
            radial-gradient(at 80% 80%, hsla(200, 90%, 50%, 0.2) 0px, transparent 50%);
        }
      }
      .animate-cosmic-rift {
        animation: cosmic-rift 20s ease-in-out infinite;
      }
       @keyframes subtle-gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animated-gradient-bg {
        background: linear-gradient(-45deg, #000, #110900, #000, #0c0d14);
        background-size: 400% 400%;
        animation: subtle-gradient 15s ease infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // For the main hero scroll animation
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.7]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const welcomeText = "Your Story Starts Here.";

  const events = [
    {
      title: "Creator Fest",
      description: "A full-day creative showdown to empower students in the art of short-form content creation.",
      date: "September 13th, 2025",
      time: "9:50 AM Onwards",
      status: "Upcoming",
      imageUrl: "https://i.postimg.cc/wMt7PP0b/rh-feast-13-sep.jpg"
    }
  ];

  // Animation Variants
  const sentenceVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.04,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const renderPage = () => {
      if (page === '/creatorfeast') {
          return <CreatorFeast navigate={navigate} />;
      }
      return (
          <main>
            {/* Scrollable Hero Section */}
            <section className="h-[60vh] flex items-center justify-center sticky top-0">
                <motion.div style={{ scale, opacity: heroOpacity, y }} className="text-center relative">
                <InteractiveParticles />
                <motion.h1
                    className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 drop-shadow-[0_0_40px_rgba(234,179,8,0.7)]"
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
                    This is where creativity finds its stage.
                </motion.p>
                </motion.div>
            </section>

            {/* Main Content Container */}
            <div className="relative z-10 bg-black">

                {/* GRAND Welcome Juniors Section */}
                <section className="py-24 flex items-center justify-center animated-gradient-bg border-y-2 border-yellow-500/20">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <motion.div 
                            initial={{scale: 0, opacity: 0}}
                            whileInView={{scale: 1, opacity: 1}}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5, ease: "backOut" }}
                            className="inline-block p-4 mb-6 bg-yellow-500/10 rounded-full shadow-[0_0_40px_10px_rgba(234,179,8,0.5)]"
                        >
                            <Star className="w-12 h-12 text-yellow-400"/>
                        </motion.div>
                        <motion.h2 
                            className="text-5xl md:text-6xl font-bold text-white mb-6"
                            variants={sentenceVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {welcomeText.split("").map((char, index) => (
                                <motion.span key={char + "-" + index} variants={letterVariant}>
                                    {char}
                                </motion.span>
                            ))}
                        </motion.h2>
                        <motion.p 
                            initial={{y: 20, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.5}}
                            className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
                        >
                            Welcome, creators! This isn't just a club; it's your launchpad. A place to experiment, to create bold content, and to shape the digital voice of IARE. We didn't just save you a seat—<span className="font-bold text-yellow-400">we built this stage for you.</span>
                        </motion.p>
                        <motion.a
                            href="#" // Replace with your application link
                            initial={{y: 20, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.7}}
                            className="mt-10 group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-yellow-500/30"
                        >
                            <span className="relative flex items-center">Join the Movement <Sparkles className="w-6 h-6 ml-3" /></span>
                        </motion.a>
                    </div>
                </section>

                {/* Events Listing Section */}
                <section className="py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    >
                    <h2 className="text-lg font-semibold text-yellow-400 uppercase tracking-widest">Our Calendar</h2>
                    <p className="mt-4 text-4xl md:text-6xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Upcoming & Past Events</p>
                    </motion.div>

                    <div>
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} index={index} navigate={navigate} />
                    ))}
                    </div>
                </div>
                </section>

                <section className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 drop-shadow-lg">Don't Miss The Drop!</h2>
                    <p className="text-xl text-black/80 mb-10 max-w-2xl mx-auto">
                        Be the first to know. Follow our Instagram for all announcements, behind-the-scenes content, and registration info.
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
          </main>
      );
  }

  return (
    <div className="min-h-screen bg-black text-gray-200 font-sans overflow-x-hidden">
      {/* Cosmic Rift Background */}
      <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-black animate-cosmic-rift"></div>
      </div>
      {renderPage()}
    </div>
  );
};

export default App;

