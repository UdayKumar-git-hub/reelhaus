import React from 'react';
import { Play, Camera, Users, Calendar, Instagram, Linkedin, Facebook, TrendingUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// A custom hook for the countdown timer
const useCountdown = (targetDate) => {
    const [timeLeft, setTimeLeft] = React.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    React.useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = new Date(targetDate).getTime() - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(timer);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return timeLeft;
};


const App = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const nextEventDate = '2025-09-15T18:00:00';
    const timeLeft = useCountdown(nextEventDate);

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const featuredReels = [
        { id: 1, title: "Beyond the Edge IARE", thumbnail: "https://placehold.co/600x800/000000/FFFFFF?text=Reel+1", views: "4.8K", likes: "320", link: "https://www.instagram.com/reel/C3pOwJqSAD_/" },
        { id: 2, title: "When Your Friend Bunks Class", thumbnail: "https://placehold.co/600x800/111111/FFFFFF?text=Reel+2", views: "7.2K", likes: "550", link: "https://www.instagram.com/reel/C3pOwJqSAD_/" },
        { id: 3, title: "Attendance Frustration", thumbnail: "https://placehold.co/600x800/222222/FFFFFF?text=Reel+3", views: "3.1K", likes: "210", link: "https://www.instagram.com/reel/C3pOwJqSAD_/" },
    ];

    const stats = [
        { number: "500+", label: "Students Reached", icon: <Users className="w-8 h-8" /> },
        { number: "50+", label: "Content Created", icon: <Camera className="w-8 h-8" /> },
        { number: "15+", label: "Events Covered", icon: <Calendar className="w-8 h-8" /> },
        { number: "10K+", label: "Social Media Reach", icon: <TrendingUp className="w-8 h-8" /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className={`font-sans transition-colors duration-500 ${isDarkMode ? 'bg-black text-gray-200' : 'bg-gray-100 text-gray-800'}`}>
            {/* Dark Mode Toggle */}
            <motion.button
                onClick={toggleDarkMode}
                className="fixed top-5 right-5 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-yellow-400 z-50 transition-all duration-300 hover:bg-gray-700 hover:scale-110"
                aria-label="Toggle dark mode"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
            >
                {isDarkMode ? '☀️' : '🌙'}
            </motion.button>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-90"></div>
                <div className="absolute inset-0 z-0 opacity-10">
                    <div className="absolute h-full w-full bg-[radial-gradient(#eab308_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                </div>
                <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible">
                        <motion.h1
                            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-6 drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]"
                            variants={itemVariants}
                        >
                            Reel HausClub
                        </motion.h1>
                        <motion.p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300" variants={itemVariants}>
                            Elevating IARE's social presence through the lens of <span className="text-yellow-400 font-semibold">photography, filmmaking, and viral reel creation</span>.
                        </motion.p>
                        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={itemVariants}>
                            <motion.a href="#join" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/30" whileHover={{ y: -2 }} whileTap={{ y: 1 }}>
                                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <Users className="w-6 h-6 mr-3 z-10" />
                                <span className="z-10">Join the Movement</span>
                            </motion.a>
                            <motion.a href="#projects" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-yellow-400 bg-transparent border-2 border-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-yellow-400/10" whileHover={{ y: -2 }} whileTap={{ y: 1 }}>
                                <Play className="w-6 h-6 mr-3" />
                                <span>View Our Work</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className={`py-24 ${isDarkMode ? 'bg-gray-900/50' : 'bg-white'}`}>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our <span className="text-yellow-400">Mission</span></h2>
                        <p className={`text-xl md:text-2xl leading-relaxed italic ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            "To empower IARE students to craft compelling, trend-setting content, transforming our college's digital footprint through the art of visual storytelling."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Featured Reels */}
            <section id="projects" className={`py-24 ${isDarkMode ? 'bg-black' : 'bg-gray-100'}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Featured <span className="text-yellow-400">Reels</span></h2>
                        <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>A glimpse into our creative world.</p>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                        {featuredReels.map((reel) => (
                            <motion.a key={reel.id} href={reel.link} target="_blank" rel="noopener noreferrer" className="relative block group overflow-hidden rounded-2xl shadow-lg" variants={itemVariants} whileHover={{ scale: 1.05, zIndex: 10, y: -5 }} transition={{ duration: 0.3 }}>
                                <img src={reel.thumbnail} alt={reel.title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-yellow-400 text-black p-5 rounded-full shadow-lg shadow-yellow-400/50">
                                        <Play size={32} />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                                    <h3 className="text-xl font-bold mb-2 truncate">{reel.title}</h3>
                                    <div className="flex justify-between text-sm text-gray-300">
                                        <span>{reel.views} views</span>
                                        <span>{reel.likes} likes</span>
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </section>
            
            {/* Event Countdown */}
            <section className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-500 text-black">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                        <h2 className="text-4xl md:text-5xl font-black mb-4">Next Big Event</h2>
                        <p className="text-2xl font-light">Photography Workshop & Reel Making Competition</p>
                    </motion.div>
                    <AnimatePresence>
                        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
                            <motion.p key="event-ended" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-2xl text-center font-bold">The event has started!</motion.p>
                        ) : (
                            <motion.div key="countdown" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                                {Object.entries(timeLeft).map(([unit, value]) => (
                                    <motion.div key={unit} className="text-center" variants={itemVariants}>
                                        <div className="bg-black/80 backdrop-blur-sm text-yellow-400 rounded-2xl p-6 shadow-lg">
                                            <div className="text-5xl md:text-6xl font-bold tracking-tighter">{String(value).padStart(2, '0')}</div>
                                        </div>
                                        <div className="text-lg font-semibold mt-3 capitalize">{unit}</div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Stats Section */}
            <section className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our <span className="text-yellow-400">Impact</span> By The Numbers</h2>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                        {stats.map((stat, index) => (
                            <motion.div key={index} className={`p-8 rounded-2xl text-center transition-all duration-300 group ${isDarkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'}`} variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(234, 179, 8, 0.1), 0 10px 10px -5px rgba(234, 179, 8, 0.04)" }}>
                                <div className="text-yellow-400 mb-4 transition-transform duration-300 group-hover:scale-110 flex justify-center">{stat.icon}</div>
                                <div className={`text-4xl md:text-5xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{stat.number}</div>
                                <div className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section id="join" className={`py-24 ${isDarkMode ? 'bg-black' : 'bg-gray-100'}`}>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Ready to Create?</h2>
                        <p className={`text-xl mb-10 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            Join Reel HausClub to build your portfolio, master new skills, and shape IARE's digital narrative.
                        </p>
                        <motion.a href="#" className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/30" whileHover={{ y: -2 }} whileTap={{ y: 1 }}>
                            <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="z-10">Apply Now</span>
                            <ArrowRight className="w-6 h-6 ml-3 z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className={`py-12 border-t ${isDarkMode ? 'bg-gray-900/50 border-yellow-400/10' : 'bg-gray-200 border-gray-300/50'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center space-x-8 mb-6">
                        {[Instagram, Linkedin, Facebook].map((Icon, index) => (
                            <motion.a key={index} href="#" target="_blank" rel="noopener noreferrer" className={`hover:text-yellow-400 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} whileHover={{ scale: 1.2, y: -5 }}>
                                <Icon size={28} />
                            </motion.a>
                        ))}
                    </div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                        &copy; {new Date().getFullYear()} Reel HausClub. All Rights Reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default App;
