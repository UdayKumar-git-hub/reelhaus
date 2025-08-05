import React from 'react';
import { Target, Eye, Calendar, Users, Zap, Award, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const objectives = [
    { icon: <TrendingUp className="w-8 h-8" />, title: "Improve IARE's social game", description: "Enhance the institute's social media presence across all platforms." },
    { icon: <Globe className="w-8 h-8" />, title: "Promote creative expression", description: "Encourage students to explore their creative potential through multimedia." },
    { icon: <Award className="w-8 h-8" />, title: "Contribute to institutional branding", description: "Build and maintain IARE's digital brand identity with professional content." },
    { icon: <Users className="w-8 h-8" />, title: "Build professional portfolios", description: "Help students create impressive portfolios for their future careers." },
    { icon: <Zap className="w-8 h-8" />, title: "Encourage career opportunities", description: "Open doors to digital marketing and content creation careers for members." },
    { icon: <Target className="w-8 h-8" />, title: "Organize workshops & competitions", description: "Conduct regular skill-building events, workshops, and engaging contests." }
  ];
  
  const visionPoints = [
      { icon: <Eye className="w-12 h-12 text-black mx-auto mb-4" />, title: "Social Media Excellence", description: "Focus on enhancing IARE's presence across Instagram, LinkedIn, Twitter, and Facebook." },
      { icon: <Target className="w-12 h-12 text-black mx-auto mb-4" />, title: "Club Support", description: "Boost other club handles and support their digital marketing initiatives." },
      { icon: <Zap className="w-12 h-12 text-black mx-auto mb-4" />, title: "Content Innovation", description: "Advance content development and social media marketing strategies." },
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
    <div className="min-h-screen bg-black text-gray-200 font-sans">
      {/* Hero Section */}
      <section className="relative py-28 pt-40 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 animate-pulse">
            <div className="absolute h-full w-full bg-[radial-gradient(theme(colors.yellow.400)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.h1 
            className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 mb-6 drop-shadow-[0_0_30px_rgba(234,179,8,0.6)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The official social media, digital marketing, and brand-building club of IARE.
          </motion.p>
        </div>
      </section>

      {/* Club Info Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 text-center transition-all duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:-translate-y-2" variants={itemVariants}>
              <Calendar className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Established</h3>
              <p className="text-yellow-400 text-4xl font-bold">2025</p>
            </motion.div>
            <motion.div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 text-center transition-all duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:-translate-y-2" variants={itemVariants}>
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Club Type</h3>
              <p className="text-yellow-400 text-2xl font-bold">Service + Cultural</p>
            </motion.div>
            <motion.div className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 text-center transition-all duration-300 hover:border-yellow-400/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:-translate-y-2" variants={itemVariants}>
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Institution</h3>
              <p className="text-yellow-400 text-2xl font-bold">IARE</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our <span className="text-yellow-400">Mission</span></h2>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                    At Reelhaus, our mission is to <span className="text-yellow-400 font-semibold">level up the social media game</span> at IARE by empowering students to create impactful, trendy content through the art of <span className="text-yellow-400 font-semibold">photography, filmmaking, and reel making</span>.
                </p>
                <div className="bg-gradient-to-r from-yellow-400/10 to-yellow-500/10 border border-yellow-400/20 rounded-2xl p-8">
                    <p className="text-lg text-gray-300 leading-relaxed italic">
                        We believe in the power of visual storytelling to transform how IARE connects with its community, showcases its achievements, and inspires future generations of creative professionals.
                    </p>
                </div>
            </motion.div>
        </div>
      </section>

      {/* Vision 2025-2026 */}
      <section className="py-24 bg-gradient-to-br from-yellow-400 to-yellow-600 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 drop-shadow-lg">Vision 2025-2026</h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            {visionPoints.map((point, index) => (
              <motion.div key={index} className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 text-center transition-all duration-300 hover:bg-black/30 hover:-translate-y-2 hover:shadow-2xl" variants={itemVariants}>
                <div className="transition-transform duration-300 group-hover:scale-110">{point.icon}</div>
                <h3 className="text-2xl font-bold text-black mt-4 mb-2">{point.title}</h3>
                <p className="text-black/80 leading-relaxed">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Core <span className="text-yellow-400">Objectives</span></h2>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {objectives.map((objective, index) => (
              <motion.div key={index} className="bg-black/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 transition-all duration-300 group hover:border-yellow-400/60 hover:bg-gray-800/50 hover:shadow-xl hover:shadow-yellow-400/10" variants={itemVariants}>
                <div className="text-yellow-400 mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-10deg]">
                  {objective.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{objective.title}</h3>
                <p className="text-gray-400 leading-relaxed">{objective.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our <span className="text-yellow-400">Journey</span></h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Be part of IARE's digital transformation and build your creative career with us.
                </p>
                <motion.a href="/join" className="group relative inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-black bg-yellow-400 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 shadow-xl shadow-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/60" whileHover={{ y: -3 }} whileTap={{ y: 1 }}>
                    <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white/30 rounded-full group-hover:w-40 group-hover:h-40"></span>
                    <span className="relative flex items-center">Join The Club <ArrowRight className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2" /></span>
                </motion.a>
            </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
