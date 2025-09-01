import React from 'react';
import { Play, Users, Calendar, Instagram, Linkedin, Facebook, TrendingUp, ArrowRight, Target, Scissors, BookOpen, Clock, MapPin, Award } from 'lucide-react';
import { motion, useInView, animate, useMotionValue, useTransform } from 'framer-motion';

// Animated Counter Component
const CountUp = ({ end, suffix = '' }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [displayValue, setDisplayValue] = React.useState(0);

    React.useEffect(() => {
        if (isInView) {
            const controls = animate(0, end, {
                duration: 2,
                ease: "easeOut",
                onUpdate(value) {
                    setDisplayValue(Math.floor(value));
                }
            });
            return () => controls.stop();
        }
    }, [isInView, end]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
};


const App = () => {
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    // State and handlers for the 3D tilt effect
    const [rotateX, setRotateX] = React.useState(0);
    const [rotateY, setRotateY] = React.useState(0);
    
    // Spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const spotlightOpacity = useMotionValue(0);
    
    const handleHeroMouseMove = (event) => {
        const { clientX, clientY, currentTarget } = event;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
        spotlightOpacity.set(1);
    };

    const handleTiltMouseMove = (event) => {
        const card = event.currentTarget;
        const { left, top, width, height } = card.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;
        const rotateXValue = -1 * ((y - height / 2) / (height / 2)) * 10;
        const rotateYValue = ((x - width / 2) / (width / 2)) * 10;
        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        spotlightOpacity.set(0);
    };

    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    const eventPosterUrl = "https://i.postimg.cc/26Cm8RrV/rh-feast-13-sep.jpg";

    const featuredReels = [
        { id: 1, title: "Beyond the edge IARE", thumbnail: "https://i.postimg.cc/xjz3fJhn/Screenshot-2025-07-17-132834.jpg", views: "4.8K", likes: "320", link: "https://www.instagram.com/reel/DK4hZxrvUG7/" },
        { id: 2, title: "When Your Friend Bunks Class", thumbnail: "https://i.postimg.cc/XYGC8TW3/Screenshot-2025-07-17-133855.jpg", views: "7.2K", likes: "550", link: "https://www.instagram.com/reel/DLKbMn4PV6H/" },
        { id: 3, title: "Attendance Frustration", thumbnail: "https://i.postimg.cc/dtnbBxBW/Screenshot-2025-07-17-134243.jpg", views: "3.1K", likes: "210", link: "https://www.instagram.com/reel/DLZ7TsKP-xe/" },
    ];

    const stats = [
        { number: 500, suffix: "+", label: "Students Reached", icon: <Users className="w-8 h-8" /> },
        { number: 10, suffix: "K+", label: "Social Media Reach", icon: <TrendingUp className="w-8 h-8" /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <div className={`font-sans transition-colors duration-500 ${isDarkMode ? 'bg-black text-gray-200' : 'bg-gray-50 text-gray-800'}`}>
            <motion.button onClick={toggleDarkMode} className="fixed top-5 left-5 p-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-yellow-400 z-50 transition-all duration-300 hover:bg-gray-700 hover:scale-110" aria-label="Toggle dark mode" whileHover={{ rotate: 360 }} transition={{ duration: 0.7 }}>
                {isDarkMode ? '☀️' : '🌙'}
            </motion.button>

            <section className="relative min-h-screen flex items-center justify-center overflow-hidden" onMouseMove={handleHeroMouseMove} onMouseLeave={handleMouseLeave}>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
                
                 {/* Spotlight Effect */}
                <motion.div
                    className="pointer-events-none absolute inset-0 z-10"
                    style={{
                        background: useTransform(
                            [mouseX, mouseY],
                            ([x, y]) => `radial-gradient(400px at ${x}px ${y}px, rgba(234, 179, 8, 0.15), transparent 80%)`
                        ),
                        opacity: spotlightOpacity,
                        transition: 'opacity 0.3s ease-in-out'
                    }}
                />

                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute h-full w-full bg-[radial-gradient(theme(colors.yellow.400)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
                </div>

                {/* Animated Orbs */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.div className="absolute w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl" animate={{ x: [0, 100, 0], y: [0, -150, 0], scale: [1, 1.2, 1] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}></motion.div>
                    <motion.div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-500/20 rounded-full blur-3xl" animate={{ x: [0, -120, 0], y: [0, 80, 0], scale: [1.1, 0.9, 1.1] }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}></motion.div>
                </div>


                <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible">
                        <motion.h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-6 drop-shadow-[0_0_35px_rgba(234,179,8,0.7)]" variants={itemVariants}>
                            ReelHaus IARE
                        </motion.h1>
                        <motion.p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300" variants={itemVariants}>
                            Elevating IARE's social presence through the lens of <span className="text-yellow-400 font-semibold">photography, filmmaking, and viral reel creation</span>.
                        </motion.p>
                        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center" variants={itemVariants}>
                            <motion.a 
                                href="/register"
                                target="_blank" rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(234,179,8,0.6)] hover:shadow-[0_0_45px_rgba(234,179,8,0.8)]" whileHover={{ y: -3 }} whileTap={{ y: 1 }}>
                                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/30 rounded-full group-hover:w-48 group-hover:h-48"></span>
                                <span className="relative flex items-center"><Award className="w-6 h-6 mr-3" /> Register for Creator Feast</span>
                            </motion.a>
                            <motion.a 
                                href="https://instagram.com/reelhaus.hyd" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-yellow-400 bg-transparent border-2 border-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:bg-yellow-400/10 hover:shadow-[0_0_25px_rgba(234,179,8,0.5)]" whileHover={{ y: -3 }} whileTap={{ y: 1 }}>
                                <Play className="w-6 h-6 mr-3" />
                                <span>View Our Work</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

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

             <section id="event" className={`py-24 ${isDarkMode ? 'bg-black' : 'bg-gray-900'}`} style={{ perspective: '1200px' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-lg font-semibold text-yellow-400 uppercase tracking-widest">Our Next Big Event</h2>
                        <p className="mt-4 text-4xl md:text-6xl font-black text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">Unleash Your Inner Creator</p>
                    </motion.div>

                    <motion.div
                        className="relative group rounded-3xl overflow-hidden"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
                        onMouseMove={handleTiltMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl transition-all duration-300 ease-out"></div>
                        <div className="absolute inset-[-100px] bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.3),transparent_40%)] animate-aurora" style={{animation: "aurora 30s linear infinite"}}></div>
                        
                        <div className="relative p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                            <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
                               <img src={eventPosterUrl} alt="ReelHaus Creator Feast Poster" className="rounded-2xl shadow-2xl shadow-yellow-400/20 w-full border-4 border-yellow-400/30 transition-all duration-300 group-hover:scale-105 group-hover:shadow-yellow-400/40" />
                            </motion.div>
                            
                            <div className="lg:col-span-3">
                                <div className="text-center lg:text-left">
                                    <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">ReelHaus Creator Feast</h3>
                                    <p className="mt-4 text-xl text-gray-300 max-w-3xl">A full-day creative showdown to empower students in the art of short-form content.</p>
                                </div>

                                <div className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 text-lg text-gray-200">
                                   <div className="flex items-center gap-3"><Calendar className="w-5 h-5 text-yellow-400" /><strong>13th September</strong></div>
                                   <div className="flex items-center gap-3"><Clock className="w-5 h-5 text-yellow-400" /><strong>9:50 AM Onwards</strong></div>
                                   <div className="flex items-center gap-3"><MapPin className="w-5 h-5 text-yellow-400" /><strong>IARE, Hyderabad</strong></div>
                                </div>
                                <div className="mt-8 text-center lg:text-left">
                                    <motion.a 
                                        href="/register"
                                        target="_blank" rel="noopener noreferrer"
                                        className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/60" 
                                        whileHover={{ y: -3 }} 
                                        whileTap={{ y: 1 }}
                                    >
                                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/30 rounded-full group-hover:w-48 group-hover:h-48"></span>
                                        <span className="relative flex items-center">Book Your Spot <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" /></span>
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative p-8 sm:p-12 pt-0">
                           <motion.div
                                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-lg"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <motion.div variants={itemVariants} className="bg-black/20 p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-colors duration-300">
                                    <h4 className="font-bold text-2xl text-yellow-400 mb-4 flex items-center"><Target className="w-6 h-6 mr-3" /> Core Objectives</h4>
                                    <ul className="space-y-3 text-gray-300">
                                        <li className="flex items-start transition-colors hover:text-white group"><Play className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0 transition-transform group-hover:scale-125 group-hover:rotate-12" /><span>Train in short-form content creation.</span></li>
                                        <li className="flex items-start transition-colors hover:text-white group"><Scissors className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0 transition-transform group-hover:scale-125 group-hover:rotate-12" /><span>Explore visual storytelling for promotion.</span></li>
                                        <li className="flex items-start transition-colors hover:text-white group"><BookOpen className="w-5 h-5 mr-3 mt-1 text-yellow-500 flex-shrink-0 transition-transform group-hover:scale-125 group-hover:rotate-12" /><span>Showcase IARE's unique spirit & culture.</span></li>
                                    </ul>
                                </motion.div>
                                
                                <motion.div variants={itemVariants} className="relative bg-black/20 p-6 rounded-xl border border-white/10 hover:border-yellow-400/50 transition-colors duration-300">
                                    <h4 className="font-bold text-2xl text-yellow-400 mb-4 flex items-center"><Clock className="w-6 h-6 mr-3" /> Event Structure</h4>
                                    <div className="space-y-2 text-gray-300">
                                        <p><b>Round 1:</b> Frame the Fame <span className="font-mono text-yellow-400/80">[20 Pts]</span></p>
                                        <p><b>Round 2:</b> IARE Trailer Cut <span className="font-mono text-yellow-400/80">[30 Pts]</span></p>
                                        <p><b>Round 3:</b> Ad Blitz <span className="font-mono text-yellow-400/80">[25 Pts]</span></p>
                                        <p><b>Round 4:</b> Idea Hack <span className="font-mono text-yellow-400/80">[15 Pts]</span></p>
                                        <p><b>Round 5:</b> Cut & Create <span className="font-mono text-yellow-400/80">[40 Pts]</span></p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>
            

            <section className={`py-24 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                        <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Our <span className="text-yellow-400">Impact</span> By The Numbers</h2>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                        {stats.map((stat, index) => (
                            <motion.div key={index} className={`p-8 rounded-2xl text-center transition-all duration-300 group ${isDarkMode ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-gray-100 hover:bg-gray-200'}`} variants={itemVariants} whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(234, 179, 8, 0.2), 0 10px 10px -5px rgba(234, 179, 8, 0.15)" }}>
                                <div className="text-yellow-400 mb-4 transition-transform duration-300 group-hover:scale-125 flex justify-center">{stat.icon}</div>
                                <div className={`text-4xl md:text-5xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}><CountUp end={stat.number} suffix={stat.suffix} /></div>
                                <div className={`font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <footer className={`py-12 border-t-2 ${isDarkMode ? 'bg-gray-900/50 border-yellow-400/10' : 'bg-gray-100 border-gray-300/50'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="flex justify-center space-x-8 mb-6">
                        <motion.a href="https://instagram.com/reelhaus.iare" target="_blank" rel="noopener noreferrer" className={`hover:text-yellow-400 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} whileHover={{ scale: 1.2, y: -5 }}><Instagram size={28} /></motion.a>
                        <motion.a href="https://linkedin.com/company/reelhausclub" target="_blank" rel="noopener noreferrer" className={`hover:text-yellow-400 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} whileHover={{ scale: 1.2, y: -5 }}><Linkedin size={28} /></motion.a>
                        <motion.a href="https://facebook.com/reelhausclub" target="_blank" rel="noopener noreferrer" className={`hover:text-yellow-400 transition-colors ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`} whileHover={{ scale: 1.2, y: -5 }}><Facebook size={28} /></motion.a>
                    </div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-600'}`}>&copy; {new Date().getFullYear()} Reel HausClub. All Rights Reserved.</p>
                </div>
            </footer>

            <style jsx global>{`
                @keyframes aurora {
                    0% { transform: translate(-20%, -20%) rotate(0deg); }
                    50% { transform: translate(20%, 20%) rotate(180deg); }
                    100% { transform: translate(-20%, -20%) rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default App;